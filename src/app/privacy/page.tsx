import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy | FraudForensicAccountant.com",
  description: "Privacy policy for FraudForensicAccountant.com under GDPR.",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <ContentSection>
        <p>Last updated: June 2026</p>
        <h2>Who We Are</h2>
        <p>
          FraudForensicAccountant.com operates as a referral service connecting solicitors and
          corporates with qualified fraud forensic accountants. For data protection enquiries,
          contact {SITE_EMAIL}.
        </p>
        <h2>Data We Collect</h2>
        <p>
          When you submit an enquiry form, we collect: your name, organisation, role, email, phone
          (optional), case category, fraud type, approximate fraud value, urgency, and case
          description. We use this data solely to match you with an appropriate forensic accountant.
        </p>
        <h2>Legal Basis</h2>
        <p>
          We process personal data on the basis of legitimate interests (responding to your enquiry)
          and, where applicable, pre-contractual steps at your request.
        </p>
        <h2>Data Sharing</h2>
        <p>
          Enquiry data may be shared with qualified fraud forensic accountants in our network for the
          purpose of responding to your instruction request. We do not sell personal data.
        </p>
        <h2>Retention</h2>
        <p>
          Enquiry data is retained for up to 24 months unless a longer period is required for legal or
          regulatory purposes.
        </p>
        <h2>Your Rights</h2>
        <p>
          Under GDPR you have rights of access, rectification, erasure, restriction, portability,
          and objection. You may lodge a complaint with the Information Commissioner&apos;s Office (ICO).
          Contact {SITE_EMAIL} to exercise your rights.
        </p>
        <h2>Cookies & Analytics</h2>
        <p>
          We may use Google Analytics if configured via NEXT_PUBLIC_GA_MEASUREMENT_ID. Analytics cookies
          are used only with appropriate consent mechanisms where required.
        </p>
        <h2>Formspree</h2>
        <p>
          Contact form submissions are processed by Formspree, a third-party form handler. Formspree&apos;s
          privacy policy applies to data processed on their platform.
        </p>
      </ContentSection>
    </>
  );
}
