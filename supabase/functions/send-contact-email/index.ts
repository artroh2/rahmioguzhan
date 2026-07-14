import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const escapeHtml = (s: unknown): string =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    const safeName = escapeHtml(name || "Belirtilmedi").slice(0, 200);
    const safeEmail = escapeHtml(email || "Belirtilmedi").slice(0, 320);
    const safeMessage = escapeHtml(message || "Boş mesaj")
      .slice(0, 5000)
      .replace(/\n/g, "<br>");
    const safeSubjectName = String(name || "Anonim").replace(/[\r\n]/g, " ").slice(0, 100);

    const notificationEmail = await resend.emails.send({
      from: "İletişim Formu <onboarding@resend.dev>",
      to: ["rahmioguzhanhacieyupoglu@gmail.com"],
      subject: `Yeni Mesaj — ${safeSubjectName}`,
      html: `
        <h2>Yeni İletişim Mesajı</h2>
        <p><strong>İsim:</strong> ${safeName}</p>
        <p><strong>E-posta:</strong> ${safeEmail}</p>
        <p><strong>Mesaj:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${safeMessage}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
