import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { WHO_WE_HELP_CORPORATE_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, organizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountants for Corporates UK | Internal Investigations & DPA Preparation",
  description:
    "Fraud forensic accountants for UK corporates. Internal fraud investigations, SFO self-reporting support, DPA negotiation, FTPF compliance advisory, and remediation programmes.",
  path: "/who-we-help/corporates-compliance",
});

export default function CorporatesCompliancePage() {
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
              { name: "Corporates & Compliance", path: "/who-we-help/corporates-compliance" },
            ]),
          ],
        }}
      />
      <PageHero
        title="Fraud Forensic Accountants for Corporates & Compliance Teams UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Corporates" },
        ]}
      />
      <ContentSection>
        <h2>You Don&apos;t Always Know the Full Picture Yet</h2>
        <p>
          Many corporate fraud investigations begin with a suspicion, tip-off, or regulatory enquiry
          before the full scope is clear. A fraud forensic accountant helps you understand what you are
          dealing with before you decide how to respond.
        </p>
        <h2>Internal Investigations</h2>
        <p>Working under legal professional privilege (via your external legal counsel), our fraud forensic accountants:</p>
        <ul>
          <li>Conduct forensic accounting investigation of suspected fraud or misconduct</li>
          <li>Preserve and analyse financial evidence</li>
          <li>Quantify the scope and value of any wrongdoing</li>
          <li>Produce investigation reports protected from disclosure to regulators (LPP)</li>
          <li>Advise on whether self-reporting to SFO/FCA is appropriate</li>
        </ul>
        <h2>SFO Self-Reporting: The New Landscape</h2>
        <p>
          The SFO&apos;s updated 2025 guidance emphasises early engagement and full disclosure, including
          facilitating access to overseas data and waiving privilege over factual accounts as elements
          of cooperation. While self-reporting now explicitly leads to DPA invitation, disclosure
          neither automatically protects against prosecution nor guarantees reduced penalties. Fraud
          forensic accountants help corporates by quantifying the full scope of misconduct, modelling
          financial exposure (disgorgement plus penalty), preparing the financial evidence package for
          disclosure, and supporting DPA negotiation on quantum.
        </p>
        <h2>DPA Negotiation Support</h2>
        <p>
          A DPA financial settlement consists of disgorgement of profits or benefits from misconduct,
          financial penalty, and costs. Fraud forensic accountants quantify each element: the
          foundation of DPA negotiation.
        </p>
        <h2>FTPF Prevention Procedures</h2>
        <p>
          The FTPF offence requires large organisations to have reasonable fraud prevention procedures
          in place. The SFO and CPS updated joint guidance covers general principles, evidential
          considerations, and public interest factors. Fraud forensic accountants assess whether
          existing procedures are adequate and advise on improvements, building the reasonable
          procedures defence. The offence has been in force since 1 September 2025 under ECCTA 2023.
        </p>
        <InternalLinkGrid title="Related case types and guides" links={WHO_WE_HELP_CORPORATE_LINKS} />
      </ContentSection>
      <BottomCTA
        title="Discuss Your Investigation"
        buttonText="Discuss Your Investigation"
      />
    </>
  );
}
