import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { STANDARD_CONTENT_FOOTER_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountant Qualifications UK | CFE, ACA & Specialist Credentials",
  description:
    "What credentials should a UK fraud forensic accountant hold? CFE, ACA, FCA, CAMS, and specialist investigation credentials explained, plus CPR Part 35 and CrPR compliance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Qualifications", path: "/qualifications" },
        ])}
      />
      <PageHero
        title="Fraud Forensic Accountant Qualifications & Credentials"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Qualifications" }]}
      />
      <ContentSection>
        <h2>Core Credentials</h2>
        <h3>CFE (Certified Fraud Examiner)</h3>
        <p>
          Primary credential for fraud investigators. ACFE qualification covering fraud prevention,
          detection, and investigation. Essential for fraud forensic accountants.
        </p>
        <h3>ACA / FCA (ICAEW)</h3>
        <p>
          Chartered accountancy baseline essential for financial statement and accounting analysis in
          fraud investigations.
        </p>
        <h3>CAMS (Certified Anti-Money Laundering Specialist)</h3>
        <p>ACAMS qualification relevant for AML investigations and money laundering proceedings.</p>
        <h3>CGSS (Certified in Governance, Risk and Compliance)</h3>
        <p>Relevant for corporate internal investigation and DPA work.</p>
        <h3>ICAEW Forensic Accreditation</h3>
        <p>ICAEW specialist forensic accounting accreditation demonstrating peer-reviewed competence.</p>
        <h3>Digital forensics credentials (FBCS, EnCE, GCFE)</h3>
        <p>Where electronic evidence and crypto fraud are involved in the investigation.</p>

        <h2>Experience Requirements</h2>
        <ul>
          <li>Active fraud investigation practice (civil and criminal)</li>
          <li>POCA confiscation proceedings experience</li>
          <li>SFO/FCA investigation familiarity</li>
          <li>CPR Part 35 AND CrPR Part 33 report experience</li>
          <li>Professional indemnity insurance</li>
          <li>LPP working framework knowledge for corporate instructions</li>
        </ul>

        <h2>CPR Part 35 & CrPR Part 33</h2>
        <p>
          Civil expert evidence is governed by CPR Part 35. Experts owe a primary duty to the court,
          must be independent and objective, and their reports must comply with Practice Direction 35.
          The Ikarian Reefer principles establish the foundational duties applicable to all civil
          expert witnesses in fraud proceedings.
        </p>
        <p>
          Criminal expert evidence is governed by Criminal Procedure Rules Part 33. Experts must
          provide a declaration confirming they understand their duties, have complied with the
          requirements, and that their report includes everything required for the court to understand
          their opinion. Fraud forensic accountants routinely produce reports under both frameworks.
        </p>
        <p>
          <Link href="/experts">Meet our fraud forensic accountants →</Link>
        </p>
        <InternalLinkGrid title="Related resources" links={STANDARD_CONTENT_FOOTER_LINKS} />
      </ContentSection>
      <BottomCTA />
    </>
  );
}
