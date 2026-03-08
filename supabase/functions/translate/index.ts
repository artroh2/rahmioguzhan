import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { texts, targetLanguage, targetLanguageName } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const textsJson = JSON.stringify(texts);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `You are a professional translator. Translate the given JSON object values from Turkish to ${targetLanguageName} (${targetLanguage}). Keep the JSON keys exactly the same. Return ONLY the translated JSON object, no markdown, no explanation. Maintain the same JSON structure. Translate naturally, not word-by-word. For proper nouns like personal names, company names, university names, and city names, keep them as-is unless there is a well-known translation in the target language.`
          },
          {
            role: "user",
            content: `Translate these texts to ${targetLanguageName}:\n${textsJson}`
          }
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "return_translations",
              description: "Return the translated texts as a JSON object with the same keys",
              parameters: {
                type: "object",
                properties: {
                  translations: {
                    type: "object",
                    description: "Object with same keys as input, values translated to target language"
                  }
                },
                required: ["translations"],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "return_translations" } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    if (toolCall) {
      const parsed = JSON.parse(toolCall.function.arguments);
      return new Response(JSON.stringify({ translations: parsed.translations }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Fallback: try to parse content directly
    const content = data.choices?.[0]?.message?.content || "{}";
    const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return new Response(JSON.stringify({ translations: JSON.parse(cleaned) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (e) {
    console.error("translate error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
