import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountant Fees UK | 2025 Hourly Rates & Investigation Costs",
  description:
    "UK fraud forensic accountant fees: investigation costs £150-£600/hour, expert witness reports £5,000-£75,000+. Civil, criminal, and corporate engagement costs explained.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Fees", path: "/fees" },
        ])}
      />
      <PageHero
        title="Fraud Forensic Accountant Fees UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]}
      />
      <ContentSection>
        <h2>Investigation Fees</h2>
        <ul>
          <li>Standard investigation: £150-£350/hour (regional)</li>
          <li>Senior/London specialist: £300-£600/hour</li>
          <li>Big 4/Kroll/FTI equivalent level: £500-£1,000+/hour</li>
        </ul>

        <h2>Expert Witness Report Fees</h2>
        <ul>
          <li>Standard civil fraud report: £5,000-£20,000</li>
          <li>Complex POCA or SFO case: £20,000-£75,000+</li>
          <li>International arbitration: £50,000-£250,000+</li>
          <li>DPA financial quantification: £30,000-£200,000+</li>
          <li>Rebuttal report: £5,000-£20,000</li>
        </ul>

        <h2>Emergency Response</h2>
        <p>
          Civil fraud cases are often urgent. Same-day freezing injunction support is available at
          premium emergency rates for preliminary quantum and asset tracing within 24-48 hours.
        </p>

        <h2>Fee Structures</h2>
        <ul>
          <li>Hourly (standard for open-ended investigations)</li>
          <li>Fixed fee (defined scope engagements)</li>
          <li>Retainer (ongoing regulatory matters)</li>
          <li>No contingency fees (not permitted for expert witnesses)</li>
        </ul>

        <h2>Legal Aid</h2>
        <p>
          Legal Aid may be available for criminal defence work. Rates are subject to Legal Aid Agency
          limits. Expert fees in legally aided cases require prior authority where applicable.
        </p>
      </ContentSection>
      <BottomCTA />
    </>
  );
}
