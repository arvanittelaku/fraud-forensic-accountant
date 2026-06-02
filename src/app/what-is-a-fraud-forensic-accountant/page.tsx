import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { WHAT_IS_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "What Is a Fraud Forensic Accountant? | UK Role, POCA & Expert Evidence",
  description:
    "A fraud forensic accountant investigates financial crime, quantifies fraud losses, traces assets, and provides expert evidence in UK civil and criminal proceedings. POCA, UWOs, DPAs, and CPR Part 35 explained.",
  path: "/what-is-a-fraud-forensic-accountant",
});

export default function WhatIsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What Is a Fraud Forensic Accountant", path: "/what-is-a-fraud-forensic-accountant" },
        ])}
      />
      <PageHero
        title="What Is a Fraud Forensic Accountant?"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Fraud Forensic Accountant" },
        ]}
      />
      <ContentSection>
        <h2>Definition</h2>
        <p>
          A fraud forensic accountant is a specialist forensic accountant who applies investigative
          accounting expertise specifically to fraud: financial crime, financial misconduct, and
          dishonest financial conduct. They investigate the financial facts of suspected or alleged
          fraud, quantify losses, trace the proceeds of fraud through complex transaction chains, and
          provide expert evidence in civil and criminal proceedings.
        </p>
        <h2>Fraud Forensic Accountant vs General Forensic Accountant</h2>
        <ResponsiveTable>
          <table>
            <thead>
              <tr>
                <th>Role</th>
                <th>Primary Focus</th>
                <th>Typical Instructions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>General forensic accountant</td>
                <td>Loss quantification, valuation, disputes</td>
                <td>Commercial disputes, divorce, business valuation</td>
              </tr>
              <tr>
                <td>Fraud forensic accountant</td>
                <td>Financial crime investigation, proceeds tracing, fraud quantification</td>
                <td>SFO/FCA investigations, civil fraud recovery, POCA, UWOs, DPAs</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTable>
        <h2>Three Contexts: Civil, Criminal & Corporate</h2>
        <h3>Civil Fraud</h3>
        <p>
          Fraud forensic accountants support civil fraud claims: tracing fraudulently obtained assets,
          quantifying losses for freezing injunction applications, and producing{" "}
          <Link href="/qualifications">CPR Part 35</Link> compliant expert reports for High Court civil
          fraud proceedings.
        </p>
        <h3>Criminal Fraud</h3>
        <p>
          In criminal proceedings, fraud forensic accountants assist defence teams by challenging POCA
          benefit calculations, identifying legitimate sources of assets, and providing expert evidence
          challenging the prosecution&apos;s financial analysis. They also support prosecution-side
          instructions.
        </p>
        <h3>Corporate / Regulatory</h3>
        <p>
          Corporates facing SFO, FCA, NCA, or HMRC investigation need forensic accountants to conduct
          internal investigations under legal professional privilege, assess the quantum of any
          wrongdoing, and prepare evidence packs for self-reporting and DPA negotiations.
        </p>
        <h2>The Legal Frameworks</h2>
        <p>
          <strong>CPR Part 35 (Civil):</strong> Expert evidence in civil fraud proceedings with primary
          duty to the court.
        </p>
        <p>
          <strong>Criminal Procedure Rules (CrPR):</strong> Expert evidence in criminal proceedings with
          equivalent duties of independence and objectivity.
        </p>
        <p>
          <strong>POCA 2002:</strong> Governs confiscation of proceeds of crime in criminal cases and
          civil recovery of unlawfully obtained property without requiring criminal conviction.
        </p>
        <p>
          <strong>ECCTA 2023 (FTPF):</strong> The Failure to Prevent Fraud offence makes large
          organisations criminally liable if they fail to prevent employees committing fraud for the
          organisation&apos;s benefit. In force from 1 September 2025.
        </p>
        <h2>When Is a Fraud Forensic Accountant Needed?</h2>
        <h3>Civil proceedings</h3>
        <ul>
          <li>Civil fraud claim in High Court</li>
          <li>Freezing injunction application (asset tracing evidence needed)</li>
          <li>Norwich Pharmacal order</li>
          <li>Unexplained Wealth Order (UWO) response</li>
          <li>Private prosecution for fraud</li>
          <li>Asset recovery proceedings</li>
        </ul>
        <h3>Criminal defence</h3>
        <ul>
          <li>SFO, FCA, CPS, HMRC, or NCA investigation</li>
          <li>Contested POCA confiscation hearing</li>
          <li>Crown Court fraud trial</li>
          <li>DPA negotiation support</li>
        </ul>
        <h3>Corporate</h3>
        <ul>
          <li>Internal fraud investigation discovered</li>
          <li>Potential SFO self-reporting assessment</li>
          <li>DPA negotiation and preparation</li>
          <li>FTPF prevention procedures assessment</li>
          <li>Regulatory investigation support</li>
        </ul>
        <p>
          <Link href="/fraud-forensic-accounting-explained">Read the complete UK guide to fraud forensic accounting →</Link>
        </p>
        <InternalLinkGrid title="Explore related topics" links={WHAT_IS_LINKS} />
      </ContentSection>
      <BottomCTA />
    </>
  );
}
