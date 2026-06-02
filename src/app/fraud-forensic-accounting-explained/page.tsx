import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { PILLAR_PAGE_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

const PAGE_DESCRIPTION =
  "The complete guide to fraud forensic accounting in the UK: civil fraud vs criminal prosecution, POCA confiscation, unexplained wealth orders, deferred prosecution agreements, and asset tracing methodology.";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accounting Explained | Civil vs Criminal, POCA, UWOs & DPAs UK",
  description: PAGE_DESCRIPTION,
  path: "/fraud-forensic-accounting-explained",
});

export default function FraudExplainedPage() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: "Fraud Forensic Accounting Explained: The Complete UK Guide",
            description: PAGE_DESCRIPTION,
            path: "/fraud-forensic-accounting-explained",
            aboutServiceId: "fraud-investigation-evidence",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            {
              name: "Fraud Forensic Accounting Explained",
              path: "/fraud-forensic-accounting-explained",
            },
          ]),
        ]}
      />
      <PageHero
        title="Fraud Forensic Accounting Explained: The Complete UK Guide"
        subtitle="The definitive UK resource on civil vs criminal fraud, POCA, UWOs, DPAs, asset tracing, crypto fraud, and FTPF corporate accountability."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fraud Forensic Accounting Explained" },
        ]}
      />
      <ContentSection>
        <h2>What Fraud Forensic Accounting Covers</h2>
        <p>
          Fraud forensic accounting applies the investigative methodology of forensic accounting
          specifically to fraud: financial crime, financial misconduct, and dishonest conduct in both
          civil and criminal legal contexts. Unlike general forensic accountants who may focus on
          commercial disputes or valuation, fraud forensic accountants specialise in proceeds tracing,
          regulatory investigations, and financial crime expert evidence.
        </p>

        <h2>Civil Fraud vs Criminal Fraud: Key Differences</h2>
        <ResponsiveTable>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Civil Fraud</th>
              <th>Criminal Fraud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard of proof</td>
              <td>Balance of probabilities</td>
              <td>Beyond reasonable doubt</td>
            </tr>
            <tr>
              <td>Who brings it</td>
              <td>Victim (claimant)</td>
              <td>State (prosecution)</td>
            </tr>
            <tr>
              <td>Key remedies</td>
              <td>Freezing orders, asset tracing, damages</td>
              <td>Imprisonment, POCA confiscation</td>
            </tr>
            <tr>
              <td>Forensic accountant role</td>
              <td>CPR Part 35 expert, asset tracer</td>
              <td>CrPR Part 33 expert, POCA analyst</td>
            </tr>
            <tr>
              <td>Forum</td>
              <td>High Court (Chancery/Commercial)</td>
              <td>Crown Court</td>
            </tr>
            <tr>
              <td>Can proceed simultaneously</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        </ResponsiveTable>

        <h2>The POCA Framework: Criminal and Civil</h2>
        <h3>Criminal confiscation (Part 2)</h3>
        <p>
          The court makes a confiscation order following conviction. Benefit from criminal conduct is
          calculated on a gross proceeds basis (all proceeds, not net gain). Available assets are
          assessed. The order equals the lesser of benefit and available assets.{" "}
          <Link href="/case-types/poca-confiscation-defence">POCA confiscation defence support →</Link>
        </p>
        <h3>Civil recovery (Part 5)</h3>
        <p>
          The NCA, SFO, HMRC, or CPS applies to the High Court for a civil recovery order. No
          conviction is required. The balance of probabilities standard applies. Property obtained
          through unlawful conduct is targeted.
        </p>
        <h3>Crypto recovery (Part 5 as amended)</h3>
        <p>
          Part 5 POCA has been amended to specifically allow recovery of crypto-assets, as well as cash
          and other property types.{" "}
          <Link href="/fraud-types/crypto-fraud-digital-assets">Crypto fraud forensic accounting →</Link>
        </p>

        <h2>Unexplained Wealth Orders (UWO)</h2>
        <p>
          A UWO is a High Court order requiring a respondent to explain the source of their wealth in
          relation to specified property worth more than £50,000. The SFO, NCA, HMRC, CPS, and FCA may
          apply. The UWO annual report published in February 2026 confirms active enforcement.
        </p>
        <p>
          <strong>For enforcement agencies:</strong> building financial evidence establishing grounds for
          the application.
        </p>
        <p>
          <strong>For respondents:</strong> tracing the audit trail of funds used for acquisition,
          proving wealth is derived from legitimate sources.{" "}
          <Link href="/case-types/unexplained-wealth-orders">UWO forensic support →</Link>
        </p>

        <h2>Deferred Prosecution Agreements (DPA)</h2>
        <p>
          A DPA is an agreement between a prosecutor and a corporate whereby prosecution is deferred in
          exchange for cooperation, remediation, and financial payment. SFO 2025 guidance explicitly
          links self-reporting and full cooperation to DPA invitation.
        </p>
        <p>The DPA financial settlement comprises:</p>
        <ol>
          <li>Disgorgement of profits/benefits</li>
          <li>Financial penalty (typically equal to or greater than disgorgement)</li>
          <li>Costs</li>
        </ol>
        <p>
          The forensic accountant quantifies benefit to the organisation from misconduct: the number
          around which the entire DPA financial negotiation revolves.{" "}
          <Link href="/guides/dpa-financial-quantification-guide">DPA quantification guide →</Link>
        </p>

        <h2>Asset Tracing Methodology</h2>
        <ResponsiveTable>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Description</th>
              <th>Tools Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Financial record analysis</td>
              <td>Bank statements, investment accounts, corporate records</td>
              <td>Forensic accounting software</td>
            </tr>
            <tr>
              <td>2. Entity mapping</td>
              <td>Corporate structure, beneficial ownership, connected parties</td>
              <td>Company registry, Orbis, OSINT</td>
            </tr>
            <tr>
              <td>3. Transaction tracing</td>
              <td>Fund flows between accounts and entities</td>
              <td>Forensic transaction mapping</td>
            </tr>
            <tr>
              <td>4. Asset identification</td>
              <td>Properties, vehicles, investments, crypto wallets</td>
              <td>Land Registry, Companies House, blockchain analysis</td>
            </tr>
            <tr>
              <td>5. Cross-border tracing</td>
              <td>Offshore accounts, foreign properties, international structures</td>
              <td>Mutual Legal Assistance, correspondent bank tracing</td>
            </tr>
          </tbody>
        </table>
        </ResponsiveTable>

        <h2>Crypto Fraud: The Emerging Frontier</h2>
        <p>
          In December 2025, the Treasury published the final draft statutory instrument bringing
          cryptoasset firms under a full financial services regulatory framework, with the new regime
          covering fungible and transferable cryptoassets coming into force in October 2027.
        </p>
        <ul>
          <li>Blockchain transaction analysis</li>
          <li>Wallet identification and tracing</li>
          <li>Exchange account analysis</li>
          <li>NFT and DeFi fraud investigation</li>
          <li>Crypto confiscation under amended POCA Part 5</li>
        </ul>

        <h2>The FTPF Offence: Corporate Accountability</h2>
        <p>
          The Failure to Prevent Fraud offence under ECCTA 2023 makes large organisations criminally
          liable if they fail to prevent employees committing fraud for the organisation&apos;s benefit.
          In force from 1 September 2025, it applies to large bodies corporate and partnerships.
          Organisations may rely on reasonable fraud prevention procedures as a defence.
        </p>
        <p>
          Forensic accountants assess procedure adequacy, support corporates building compliance
          programmes, and assist in enforcement defence by analysing whether procedures were reasonable
          in the circumstances.
        </p>

        <h2>Expert Evidence Frameworks</h2>
        <p>
          <strong>Civil:</strong> <Link href="/qualifications">CPR Part 35</Link> requires independence,
          objectivity, primary duty to the court, and statement of truth.
        </p>
        <p>
          <strong>Criminal:</strong> <Link href="/qualifications">CrPR Part 33</Link> imposes equivalent
          duties in Crown Court proceedings.
        </p>
        <p>
          Explore our{" "}
          <Link href="/who-we-help">who we help</Link>,{" "}
          <Link href="/fraud-types">fraud types</Link>, and{" "}
          <Link href="/case-types">case types</Link> for detailed forensic accounting support in each
          context.
        </p>

        <InternalLinkGrid
          title="Explore fraud forensic accounting in the UK"
          links={PILLAR_PAGE_LINKS}
          columns={3}
        />
      </ContentSection>
      <BottomCTA />
    </>
  );
}
