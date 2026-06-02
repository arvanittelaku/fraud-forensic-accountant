import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Instruct a Fraud Forensic Accountant | FraudForensicAccountant.com UK",
  description:
    "Submit your case details to be matched with a qualified UK fraud forensic accountant for civil fraud, criminal defence, or corporate investigation. Response within 1 business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Fraud Forensic Accountant"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-[8px] border border-border bg-section-alt p-5">
              <h2 className="font-semibold text-heading">Criminal Defence</h2>
              <p className="mt-2 text-sm text-body">
                Defending SFO, FCA, or Crown Court fraud proceedings?
              </p>
              <Link
                href="/who-we-help/criminal-defence-solicitors"
                className="mt-2 inline-block text-sm text-indigo-accent hover:underline"
              >
                Criminal defence guide →
              </Link>
            </div>
            <div className="rounded-[8px] border border-border bg-section-alt p-5">
              <h2 className="font-semibold text-heading">Civil Fraud Recovery</h2>
              <p className="mt-2 text-sm text-body">
                Pursuing civil fraud recovery, freezing injunctions, or UWOs?
              </p>
              <Link
                href="/who-we-help/civil-fraud-solicitors"
                className="mt-2 inline-block text-sm text-indigo-accent hover:underline"
              >
                Civil fraud guide →
              </Link>
            </div>
            <div className="rounded-[8px] border border-border bg-section-alt p-5">
              <h2 className="font-semibold text-heading">Corporate</h2>
              <p className="mt-2 text-sm text-body">
                Internal investigation, self-reporting assessment, or DPA preparation?
              </p>
              <Link
                href="/who-we-help/corporates-compliance"
                className="mt-2 inline-block text-sm text-indigo-accent hover:underline"
              >
                Corporate guide →
              </Link>
            </div>
            <div className="rounded-[8px] border border-indigo-accent/20 bg-indigo-accent/5 p-5">
              <h3 className="font-semibold text-heading">Why instruct through us</h3>
              <ul className="mt-3 space-y-2 text-sm text-body">
                <li>Civil and criminal fraud covered</li>
                <li>CPR Part 35 & CrPR Part 33 compliant</li>
                <li>LPP protection available for corporates</li>
                <li>24-hour emergency response available</li>
                <li>Confidential enquiry</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
