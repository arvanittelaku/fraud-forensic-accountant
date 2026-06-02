import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { WHO_WE_HELP_CIVIL_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, organizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountants for Civil Fraud Solicitors UK | Asset Tracing & Recovery",
  description:
    "Fraud forensic accountants for UK civil fraud solicitors. Freezing injunction support, asset tracing, POCA civil recovery, UWOs, Norwich Pharmacal, and CPR Part 35 expert reports.",
  path: "/who-we-help/civil-fraud-solicitors",
});

export default function CivilFraudSolicitorsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organizationSchema,
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Who We Help", path: "/who-we-help" },
              { name: "Civil Fraud Solicitors", path: "/who-we-help/civil-fraud-solicitors" },
            ]),
          ],
        }}
      />
      <PageHero
        title="Fraud Forensic Accountants for Civil Fraud Solicitors UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Civil Fraud" },
        ]}
      />
      <ContentSection>
        <h2>What Civil Fraud Solicitors Need</h2>
        <p>
          Expert evidence for freezing injunction applications, asset tracing analysis, civil recovery
          proceeds calculations, and CPR Part 35 compliant expert reports for High Court civil fraud
          proceedings.
        </p>
        <h2>Freezing Injunction Support</h2>
        <p>
          Speed is critical: assets can be dissipated within hours. Our fraud forensic accountants
          provide urgent preliminary quantum assessments and asset tracing evidence for without-notice
          freezing injunction applications in the High Court.
        </p>
        <h2>Asset Tracing Methodology</h2>
        <ol>
          <li>Financial record analysis (bank statements, investment accounts)</li>
          <li>Corporate structure mapping (entity relationships, beneficial ownership)</li>
          <li>Transaction tracing (fund flows through accounts and entities)</li>
          <li>Asset identification (properties, vehicles, investments)</li>
          <li>Cross-border tracing (offshore accounts, foreign properties)</li>
          <li>Crypto and digital asset tracing</li>
        </ol>
        <h2>Unexplained Wealth Orders (UWO)</h2>
        <p>
          UWOs are available to the SFO, NCA, HMRC, CPS, and FCA for assets over £50,000 where
          there are reasonable grounds to suspect the holder lacks legitimate income to have obtained
          them. Contesting a UWO requires High Court advocacy and forensic accounting to trace the
          audit trail of acquisition funds. For claimant solicitors, our experts assist with financial
          evidence establishing grounds for application. For respondents, we assist with rebuttal by
          tracing legitimate sources of wealth.
        </p>
        <h2>Civil Recovery Under POCA</h2>
        <p>
          Part 5 POCA allows civil recovery of property obtained through unlawful conduct without
          requiring criminal conviction, on the balance of probabilities. Fraud forensic accountants
          establish financial evidence supporting or defending civil recovery applications.
        </p>
        <h2>Private Prosecution</h2>
        <p>
          For victims of significant fraud where police decline to act, private prosecution is an
          increasingly used route. Fraud forensic accountants build the financial evidence package:
          tracing the fraud, quantifying the loss, and producing prosecution-quality forensic
          accounting evidence.
        </p>
        <InternalLinkGrid title="Related case types and guides" links={WHO_WE_HELP_CIVIL_LINKS} />
      </ContentSection>
      <BottomCTA buttonText="Instruct an Expert" />
    </>
  );
}
