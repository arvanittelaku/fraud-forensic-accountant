import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";

export const metadata = buildMetadata({
  title: "Terms of Use | FraudForensicAccountant.com",
  description: "Terms of use for FraudForensicAccountant.com referral service.",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <ContentSection>
        <p>Last updated: June 2026</p>
        <h2>Nature of Service</h2>
        <p>
          FraudForensicAccountant.com is a referral service connecting solicitors, corporates, and
          other professionals with qualified fraud forensic accountants. We are not a law firm, not
          an accountancy practice, and do not provide legal or accounting advice.
        </p>
        <h2>No Professional Relationship</h2>
        <p>
          Submitting an enquiry does not create a professional relationship with FraudForensicAccountant.com.
          Any engagement is directly between you and the forensic accountant instructed.
        </p>
        <h2>Accuracy of Information</h2>
        <p>
          Content on this website is for general information purposes. Legal and regulatory positions
          change. You should obtain specific legal advice from a qualified solicitor before acting on
          any matter described on this site.
        </p>
        <h2>Expert Credentials</h2>
        <p>
          We endeavour to refer enquiries only to forensic accountants holding relevant credentials
          (CFE, ACA/FCA, or equivalent). You are responsible for conducting your own due diligence
          before instructing any expert.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, FraudForensicAccountant.com accepts no liability for
          acts or omissions of referred forensic accountants or for reliance on website content.
        </p>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Disputes are subject to the
          exclusive jurisdiction of the courts of England and Wales.
        </p>
      </ContentSection>
    </>
  );
}
