const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

interface EnquiryRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
  body?: Record<string, unknown>;
}

interface EnquiryResponse {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => EnquiryResponse;
  json: (body: unknown) => void;
}

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

const validEmail = (value: string) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validPhone = (value: string) => /^[0-9+()\-\s]{7,24}$/.test(value);

export default async function handler(request: EnquiryRequest, response: EnquiryResponse) {
  const requestId = crypto.randomUUID();
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ success: false, error: "Method not allowed", requestId });
  }

  const forwardedFor = request.headers["x-forwarded-for"];
  const forwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(",")[0];
  const ip = text(forwardedIp || request.socket?.remoteAddress || "unknown", 80);
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    console.warn(JSON.stringify({ event: "enquiry_rate_limited", requestId }));
    return response.status(429).json({ success: false, error: "Too many enquiries. Please try again later.", requestId });
  }
  requestLog.set(ip, [...recent, now]);

  const body = request.body || {};
  const website = text(body.website, 200);
  if (website) return response.status(200).json({ success: true, requestId });

  const name = text(body.name, 100);
  const company = text(body.company, 120);
  const phone = text(body.phone, 24);
  const email = text(body.email, 120);
  const product = text(body.product, 120);
  const quantity = text(body.quantity, 80);
  const requirement = text(body.requirement, 1000);
  const sourceUrl = text(body.sourceUrl, 300);
  const startedAt = Number(body.startedAt);

  if (!name || !phone || !requirement || !validPhone(phone) || !validEmail(email)) {
    return response.status(400).json({ success: false, error: "Please check the required contact details.", requestId });
  }
  if (Number.isFinite(startedAt) && (now - startedAt < 1500 || now - startedAt > 24 * 60 * 60 * 1000)) {
    console.warn(JSON.stringify({ event: "enquiry_timing_rejected", requestId }));
    return response.status(400).json({ success: false, error: "Unable to validate the form session.", requestId });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL || "sales@bobbinsindia.com";
  const from = process.env.ENQUIRY_FROM_EMAIL || "Bobbins India Website <onboarding@resend.dev>";
  if (!apiKey) {
    console.error(JSON.stringify({ event: "enquiry_email_not_configured", requestId }));
    return response.status(503).json({ success: false, error: "Email delivery is being configured.", requestId });
  }

  const rows = [
    ["Name", name],
    ["Company", company || "Not provided"],
    ["Phone", phone],
    ["Email", email || "Not provided"],
    ["Product", product || "General enquiry"],
    ["Estimated quantity", quantity || "Not provided"],
    ["Requirement", requirement],
    ["Source", sourceUrl || "Website"],
  ];
  const htmlRows = rows.map(([label, value]) =>
    `<tr><th style="padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb">${escapeHtml(label)}</th><td style="padding:10px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
  ).join("");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: product ? `Website enquiry: ${product}` : "Website product enquiry",
        html: `<h2>New Bobbins India website enquiry</h2><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${htmlRows}</table><p style="color:#6b7280;font-size:12px">Request ID: ${requestId}</p>`,
      }),
    });
    const result = await resendResponse.json().catch(() => null);
    if (!resendResponse.ok) {
      console.error(JSON.stringify({ event: "enquiry_delivery_failed", requestId, status: resendResponse.status, providerError: result?.name || result?.message }));
      return response.status(502).json({ success: false, error: "Email delivery failed.", requestId });
    }
    console.info(JSON.stringify({ event: "enquiry_delivered", requestId, providerId: result?.id }));
    return response.status(200).json({ success: true, requestId });
  } catch (error) {
    console.error(JSON.stringify({ event: "enquiry_delivery_exception", requestId, error: error instanceof Error ? error.message : "Unknown error" }));
    return response.status(502).json({ success: false, error: "Email delivery failed.", requestId });
  }
}
