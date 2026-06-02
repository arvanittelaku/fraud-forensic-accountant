/**
 * Netlify serverless handler for /api/submit-lead redirect.
 * Mirrors Next.js route: webhook notification with brand-specific keys.
 *
 * For full Google Sheets support in production, prefer the Next.js
 * app/api/submit-lead route when using @netlify/plugin-nextjs.
 */

const BRAND_NAME = "Fraud Forensic Accountant";

function sanitize(str, max = 500) {
  if (!str || typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim().slice(0, max);
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ success: false, error: "Invalid JSON" }) };
  }

  const fullName = sanitize(body.fullName, 200);
  const email = sanitize(body.email, 320).toLowerCase();
  const phone = sanitize(body.phone, 50);

  if (!fullName || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Full name and email are required" }),
    };
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": fullName,
          Email: email,
          "Phone Number": phone,
          "Brand name": BRAND_NAME,
        }),
      });
      if (!res.ok) {
        console.error("Webhook error:", res.status);
      }
    } catch (err) {
      console.error("Webhook fetch failed:", err);
    }
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true }),
  };
};
