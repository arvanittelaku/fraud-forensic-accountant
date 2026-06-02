import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import {
  leadToSheetRow,
  notifyLeadWebhook,
  sanitizeLeadText,
  type LeadSubmission,
} from "@/lib/leads";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<LeadSubmission>;

    const fullName = sanitizeLeadText(body.fullName ?? "", 200);
    const email = sanitizeLeadText(body.email ?? "", 320).toLowerCase();
    const phone = sanitizeLeadText(body.phone ?? "", 50);

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full name and email are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const lead: LeadSubmission = {
      fullName,
      email,
      phone,
      organisation: sanitizeLeadText(body.organisation ?? "", 200),
      role: sanitizeLeadText(body.role ?? "", 120),
      caseCategory: sanitizeLeadText(body.caseCategory ?? "", 120),
      fraudType: sanitizeLeadText(body.fraudType ?? "", 120),
      fraudValue: sanitizeLeadText(body.fraudValue ?? "", 80),
      urgent: sanitizeLeadText(body.urgent ?? "", 80),
      message: sanitizeLeadText(body.message ?? "", 4000),
    };

    let sheetsOk = false;
    const hasWebhook = Boolean(
      process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
    );

    try {
      await appendRow(leadToSheetRow(lead));
      sheetsOk = true;
    } catch (err) {
      console.error("Google Sheets write failed:", err);
    }

    if (hasWebhook) {
      try {
        await notifyLeadWebhook(lead);
      } catch (err) {
        console.error("Lead webhook failed:", err);
      }
    }

    if (!sheetsOk && !hasWebhook) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to save submission. Please email info@fraudforensicaccountant.com",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("submit-lead error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
