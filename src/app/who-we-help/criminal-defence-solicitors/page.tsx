import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { WHO_WE_HELP_CRIMINAL_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, organizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountants for Criminal Defence | SFO, FCA & Crown Court",
  description:
    "Fraud forensic accountants for criminal defence solicitors. POCA confiscation defence, SFO investigation support, benefit calculation, and expert evidence in Crown Court proceedings.",
  path: "/who-we-help/criminal-defence-solicitors",
});

export default function CriminalDefencePage() {
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
              {
                name: "Criminal Defence Solicitors",
                path: "/who-we-help/criminal-defence-solicitors",
              },
            ]),
          ],
        }}
      />
      <PageHero
        title="Fraud Forensic Accountants for Criminal Defence Solicitors"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Criminal Defence" },
        ]}
      />
      <ContentSection>
        <h2>What Defence Solicitors Need</h2>
        <p>
          A fraud forensic accountant who understands both forensic accounting and criminal
          procedure: producing expert evidence under CrPR Part 33, challenging the prosecution&apos;s
          financial analysis, and providing credible evidence on POCA benefit and available assets.
        </p>
        <h2>Services for Criminal Defence</h2>
        <ul>
          <li>POCA confiscation benefit analysis: challenging the prosecution&apos;s benefit figure</li>
          <li>Available assets assessment: identifying and valuing legitimate assets for Section 7 POCA</li>
          <li>Tainted gifts analysis: challenging alleged gifts of criminal proceeds</li>
          <li>Third-party interests in assets: protecting innocent third parties</li>
          <li>Expert evidence on financial transactions at trial</li>
          <li>Hidden assets response: tracing prosecution-alleged hidden assets</li>
          <li>Financial expert evidence for Newton hearings</li>
        </ul>
        <h2>SFO Investigations: How We Support Defence Teams</h2>
        <ul>
          <li>Reviewing and challenging SFO financial analysis</li>
          <li>Section 2 interview preparation (financial aspects)</li>
          <li>Document review and financial reconstruction</li>
          <li>Parallel civil recovery proceedings analysis</li>
          <li>Expert witness reports for Crown Court</li>
        </ul>
        <h2>DPA Negotiations: Quantifying the Exposure</h2>
        <p>
          For the first time, the SFO has stated explicitly that where a corporate self-reports
          suspected wrongdoing and fully cooperates, it can expect to be invited to negotiate a DPA
          rather than face prosecution (unless exceptional circumstances apply). Fraud forensic
          accountants quantify the scope of wrongdoing, the financial benefit to the organisation,
          and the appropriate disgorgement figure: the foundation of any DPA financial settlement.
        </p>
        <h2>CrPR Part 33 Compliance</h2>
        <p>
          In criminal proceedings, expert witnesses are governed by Criminal Procedure Rules Part 33.
          Our experts produce CrPR Part 33 compliant reports with the required declaration of
          independence and objectivity.
        </p>
        <InternalLinkGrid title="Related case types and guides" links={WHO_WE_HELP_CRIMINAL_LINKS} />
      </ContentSection>
      <BottomCTA buttonText="Instruct an Expert" />
    </>
  );
}
