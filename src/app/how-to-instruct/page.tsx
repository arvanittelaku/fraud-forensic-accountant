import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "How to Instruct a Fraud Forensic Accountant | Solicitors & Corporates Guide",
  description:
    "How solicitors and corporates instruct a fraud forensic accountant : civil fraud, criminal defence, internal investigation, or DPA preparation.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How to Instruct", path: "/how-to-instruct" },
        ])}
      />
      <PageHero
        title="How to Instruct a Fraud Forensic Accountant"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How to Instruct" }]}
      />
      <ContentSection>
        <h2>Section 1: Criminal Defence Solicitors</h2>
        <ol>
          <li>Identify proceedings: SFO, FCA, HMRC, CPS, or NCA</li>
          <li>Determine whether POCA analysis or trial expert evidence is required</li>
          <li>Confirm LPP scope with counsel</li>
          <li>Decide: privileged investigation report or disclosed expert report?</li>
          <li>Provide all financial documentation: bank statements, accounts, contracts, correspondence</li>
        </ol>

        <h2>Section 2: Civil Fraud Solicitors</h2>
        <ol>
          <li>Assess urgency: freezing injunction (24-48 hour response) or standard engagement</li>
          <li>Define asset tracing scope: domestic or cross-border</li>
          <li>Confirm whether CPR Part 35 expert report is required for trial</li>
          <li>Provide documents: bank statements, corporate records, contracts, transaction data</li>
        </ol>

        <h2>Section 3: Corporates</h2>
        <ol>
          <li>Instruct via external legal counsel to preserve legal professional privilege</li>
          <li>Define investigation scope: individuals, period, business units</li>
          <li>Set self-reporting decision timeline with board and counsel</li>
          <li>If self-reporting: establish DPA preparation pathway and financial quantification scope</li>
        </ol>

        <h2>Matching Timeline</h2>
        <ol>
          <li>Submit enquiry via contact form or email</li>
          <li>Initial response within 1 business day (24 hours for urgent matters)</li>
          <li>Conflict check and credentials confirmation</li>
          <li>Scope discussion with lead solicitor or counsel</li>
          <li>Engagement letter and fee estimate</li>
          <li>Document production and investigation commencement</li>
          <li>Interim findings and final report delivery</li>
        </ol>

        <h2>Red Flags: When Not to Delay Instruction</h2>
        <ul>
          <li>Assets at risk of dissipation (freezing injunction window closing)</li>
          <li>UWO response deadline approaching</li>
          <li>POCA confiscation hearing listed</li>
          <li>SFO Section 2 notice received</li>
          <li>Whistleblower report received (HMRC reward scheme cases)</li>
          <li>Regulatory enquiry letter from FCA or HMRC</li>
        </ul>
      </ContentSection>
      <BottomCTA />
    </>
  );
}
