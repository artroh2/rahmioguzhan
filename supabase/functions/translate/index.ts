import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { texts, targetLanguage, targetLanguageName } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Build a simple key-value list for translation
    const keys = Object.keys(texts);
    const entries = keys.map((k, i) => `${i}. ${texts[k]}`).join("\n");

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
            content: `You are a translator. Translate each numbered line from Turkish to ${targetLanguageName}. Return ONLY a JSON object where the keys are the line numbers (as strings) and values are the translations. No markdown, no explanation, just the JSON object. Keep proper nouns (names, companies) as-is.`
          },
          {
            role: "user",
            content: entries
          }
        ],
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
      throw new Error("AI gateway error: " + response.status);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    console.log("AI response:", content);

    // Extract JSON from response (handle markdown code blocks)
    const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let indexedTranslations: Record<string, string>;
    try {
      indexedTranslations = JSON.parse(cleaned);
    } catch (e) {
      console.error("Failed to parse AI response:", cleaned);
      throw new Error("Failed to parse translation response");
    }

    // Map back to original keys
    const translations: Record<string, string> = {};
    keys.forEach((key, i) => {
      const val = indexedTranslations[String(i)] || indexedTranslations[i];
      if (val) translations[key] = val;
    });

    console.log("Translations mapped:", Object.keys(translations).length, "of", keys.length);

    return new Response(JSON.stringify({ translations }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (e) {
    console.error("translate error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
