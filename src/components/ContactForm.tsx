"use client";

import { SITE_EMAIL } from "@/lib/site";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const inputClass =
  "w-full min-h-[44px] rounded-[4px] border border-border px-3 py-2 text-body focus:border-indigo-accent focus:outline-none focus:ring-2 focus:ring-indigo-accent/20";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      caseCategory: String(data.get("caseCategory") ?? "").trim(),
      fraudType: String(data.get("fraudType") ?? "").trim(),
      fraudValue: String(data.get("fraudValue") ?? "").trim(),
      urgent: String(data.get("urgent") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json()) as { success?: boolean; error?: string };

      if (res.ok && result.success) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(result.error ?? "Submission failed");
    } catch {
      setStatus("error");
      setErrorMessage(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-heading">
            Full Name *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="organisation" className="mb-1 block text-sm font-medium text-heading">
            Organisation *
          </label>
          <input id="organisation" name="organisation" type="text" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="mb-1 block text-sm font-medium text-heading">
          You are:
        </label>
        <select id="role" name="role" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Criminal Defence Solicitor">Criminal Defence Solicitor</option>
          <option value="Civil Fraud Solicitor">Civil Fraud Solicitor</option>
          <option value="Corporate / In-House Counsel">Corporate / In-House Counsel</option>
          <option value="Other Professional">Other Professional</option>
          <option value="Individual">Individual</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-heading">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-heading">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <p className="text-sm text-body">
        Or email us directly:{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-indigo-accent hover:underline">
          {SITE_EMAIL}
        </a>
      </p>

      <div>
        <label htmlFor="caseCategory" className="mb-1 block text-sm font-medium text-heading">
          Case Category
        </label>
        <select id="caseCategory" name="caseCategory" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Criminal Fraud Defence">Criminal Fraud Defence</option>
          <option value="POCA Confiscation Defence">POCA Confiscation Defence</option>
          <option value="Civil Fraud Recovery">Civil Fraud Recovery</option>
          <option value="Unexplained Wealth Order">Unexplained Wealth Order</option>
          <option value="DPA Negotiation">DPA Negotiation</option>
          <option value="Internal Investigation">Internal Investigation</option>
          <option value="SFO Self-Reporting">SFO Self-Reporting</option>
          <option value="FCA Investigation">FCA Investigation</option>
          <option value="HMRC Investigation">HMRC Investigation</option>
          <option value="Crypto Fraud">Crypto Fraud</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="fraudType" className="mb-1 block text-sm font-medium text-heading">
          Fraud Type
        </label>
        <select id="fraudType" name="fraudType" className={inputClass}>
          <option value="">Select...</option>
          <option value="Corporate Fraud">Corporate Fraud</option>
          <option value="Investment / Ponzi Fraud">Investment / Ponzi Fraud</option>
          <option value="Bribery / Corruption">Bribery / Corruption</option>
          <option value="Money Laundering">Money Laundering</option>
          <option value="Crypto Fraud">Crypto Fraud</option>
          <option value="Tax Fraud">Tax Fraud</option>
          <option value="Procurement Fraud">Procurement Fraud</option>
          <option value="Financial Statement Fraud">Financial Statement Fraud</option>
          <option value="Other / Not Sure">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="fraudValue" className="mb-1 block text-sm font-medium text-heading">
          Approximate fraud value
        </label>
        <select id="fraudValue" name="fraudValue" className={inputClass}>
          <option value="Unknown">Unknown</option>
          <option value="Under £100k">Under £100k</option>
          <option value="£100k-£500k">£100k-£500k</option>
          <option value="£500k-£5M">£500k-£5M</option>
          <option value="£5M-£50M">£5M-£50M</option>
          <option value="Over £50M">Over £50M</option>
        </select>
      </div>

      <div>
        <label htmlFor="urgent" className="mb-1 block text-sm font-medium text-heading">
          Is this urgent?
        </label>
        <select id="urgent" name="urgent" className={inputClass}>
          <option value="No - standard response fine">No - standard response fine</option>
          <option value="Yes - 24-hour response needed">Yes - 24-hour response needed</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-heading">
          Brief description
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} min-h-[120px]`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-crimson" role="alert">
          {errorMessage ?? "Unable to submit."} Please email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-[44px] w-full rounded-[4px] bg-indigo-accent px-6 py-3 font-semibold text-white hover:bg-indigo-accent/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
