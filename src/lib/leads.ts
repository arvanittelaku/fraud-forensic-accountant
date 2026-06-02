import { SITE_EMAIL } from "./site";

export const BRAND_NAME = "Fraud Forensic Accountant";

export type LeadSubmission = {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  role?: string;
  caseCategory?: string;
  fraudType?: string;
  fraudValue?: string;
  urgent?: string;
  message?: string;
};

export function sanitizeLeadText(value: string, max = 2000): string {
  return value.replace(/<[^>]*>/g, "").trim().slice(0, max);
}

export function leadToSheetRow(lead: LeadSubmission): (string | null)[] {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    lead.fullName,
    lead.email.toLowerCase(),
    lead.phone || "",
    lead.organisation || "",
    lead.role || "",
    lead.caseCategory || "",
    lead.fraudType || "",
    lead.fraudValue || "",
    lead.urgent || "",
    lead.message || "",
    SITE_EMAIL,
  ];
}

export function leadToWebhookPayload(lead: LeadSubmission) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone || "",
    "Brand name": BRAND_NAME,
  };
}

export async function notifyLeadWebhook(lead: LeadSubmission): Promise<void> {
  const url =
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL;

  if (!url) return;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadToWebhookPayload(lead)),
  });

  if (!res.ok) {
    console.error("Lead webhook failed:", res.status, await res.text().catch(() => ""));
  }
}
