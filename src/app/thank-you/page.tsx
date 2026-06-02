import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { BottomCTA } from "@/components/BottomCTA";

export const metadata = buildMetadata({
  title: "Thank You | FraudForensicAccountant.com",
  description: "Your enquiry has been received. We will respond within 1 business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You for Your Enquiry"
        subtitle="Your message has been received successfully. A member of our team will review your case details and respond within 1 business day, or within 24 hours for urgent matters."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Thank You" }]}
      />
      <section className="bg-section-alt py-14 md:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-accent/10">
            <svg
              className="h-8 w-8 text-indigo-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-heading">What happens next?</h2>
          <ul className="mt-4 space-y-2 text-left text-body">
            <li>We review your enquiry and match you with a qualified fraud forensic accountant.</li>
            <li>You receive a response by email with next steps for instruction.</li>
            <li>For urgent freezing injunction or UWO matters, we prioritise 24-hour response.</li>
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-indigo-accent px-6 py-3 font-semibold text-white hover:bg-indigo-accent/90"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-border bg-white px-6 py-3 font-semibold text-heading hover:bg-section-alt"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
      <BottomCTA
        title="Need urgent forensic support?"
        description="For freezing injunctions, UWO responses, or SFO Section 2 deadlines, contact us and mark your enquiry as urgent."
        buttonText="Contact Us"
      />
    </>
  );
}
