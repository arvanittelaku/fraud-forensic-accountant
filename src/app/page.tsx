import Link from "next/link";
import { EnforcementBanner } from "@/components/EnforcementBanner";
import { BottomCTA } from "@/components/BottomCTA";
import { CardGrid } from "@/components/CardGrid";
import { JsonLd } from "@/components/JsonLd";
import { homepageGraph } from "@/lib/schema";
import { HOMEPAGE_HUB_LINKS } from "@/lib/seo/internal-links";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { services } from "@/data/services";

const enforcementFacts = [
  { fact: "SFO new investigations 2025", figure: "8 opened", source: "SFO 2025-26 Plan" },
  { fact: "SFO cases listed for trial 2026", figure: "5", source: "SFO 2025-26 Plan" },
  { fact: "FTPF offence in force", figure: "1 September 2025", source: "ECCTA 2023" },
  {
    fact: "HMRC whistleblower reward",
    figure: "15-30% of £1.5M+ recovered",
    source: "HMRC Strengthened Reward Scheme",
  },
  { fact: "UWO annual report published", figure: "February 2026", source: "NCA/Home Office" },
  { fact: "Cryptoasset FCA full regulation", figure: "October 2027", source: "HM Treasury 2025" },
  {
    fact: "DPA explicit invitation policy",
    figure: "Self-reporting = DPA invitation",
    source: "SFO/CPS 2025 guidance",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />
      <section className="bg-charcoal py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Fraud Forensic Accountant Services for Solicitors & Corporates
          </h1>
          <p className="mt-6 max-w-4xl text-lg text-white/80">
            Whether you are defending a fraud prosecution, pursuing civil recovery, conducting an
            internal investigation, or preparing for SFO self-reporting, you need a forensic
            accountant who understands the full landscape of fraud: civil, criminal, and regulatory.
            FraudForensicAccountant.com connects solicitors and corporates with qualified fraud
            forensic accountants across every context.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/who-we-help/criminal-defence-solicitors"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-indigo-accent px-6 py-3 font-semibold text-white hover:bg-indigo-accent/90"
            >
              Criminal Defence
            </Link>
            <Link
              href="/who-we-help/civil-fraud-solicitors"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Civil Fraud Recovery
            </Link>
            <Link
              href="/who-we-help/corporates-compliance"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Corporate / Internal
            </Link>
          </div>
        </div>
      </section>

      <EnforcementBanner />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            What Our Fraud Forensic Accountants Cover
          </h2>
          <div className="mt-8">
            <CardGrid
              items={services.map((s) => ({
                title: s.title,
                description: s.short,
                href: `/services/${s.id}`,
              }))}
            />
          </div>
          <p className="mt-6 text-center">
            <Link href="/services" className="font-medium text-indigo-accent hover:underline">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-section-alt py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            Fraud Enforcement: Key 2025-2026 Facts
          </h2>
          <ResponsiveTable>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                    Fact
                  </th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                    Figure
                  </th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {enforcementFacts.map((row) => (
                  <tr key={row.fact} className="bg-white">
                    <td className="border border-border px-4 py-3">{row.fact}</td>
                    <td className="border border-border px-4 py-3 font-medium">{row.figure}</td>
                    <td className="border border-border px-4 py-3 text-body">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTable>
          <p className="mt-4 text-xs text-body">
            Sources: SFO 2025-26 Strategic Plan; ECCTA 2023; HMRC Strengthened Reward Scheme
            guidance; SFO/CPS Corporate Prosecution Guidance 2025; HM Treasury cryptoasset regulations.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">Three Types of Client We Serve</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Criminal Defence",
                desc: "Defending individuals or corporates facing SFO, FCA, CPS, NCA, or HMRC fraud investigations. POCA benefit calculation, available assets, confiscation defence.",
                href: "/who-we-help/criminal-defence-solicitors",
              },
              {
                title: "Civil Fraud Recovery",
                desc: "Pursuing fraudsters through civil proceedings: freezing injunctions, asset tracing, UWOs, Norwich Pharmacal orders, civil recovery, and private prosecution support.",
                href: "/who-we-help/civil-fraud-solicitors",
              },
              {
                title: "Corporate / Internal",
                desc: "Internal investigations, SFO self-reporting preparation, DPA negotiation support, FTPF compliance advisory, and remediation programme assessment.",
                href: "/who-we-help/corporates-compliance",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] hover:border-indigo-accent/30"
              >
                <h3 className="text-lg font-semibold text-heading">{card.title}</h3>
                <p className="mt-2 text-sm text-body">{card.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-indigo-accent">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-body">
            New to fraud forensic accounting?{" "}
            <Link
              href="/what-is-a-fraud-forensic-accountant"
              className="font-medium text-indigo-accent hover:underline"
            >
              What is a fraud forensic accountant?
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <InternalLinkGrid
            title="Explore fraud forensic accounting resources"
            links={[
              ...HOMEPAGE_HUB_LINKS,
              { href: "/fraud-forensic-accounting-explained", label: "Fraud forensic accounting explained" },
              { href: "/services", label: "All services" },
              { href: "/contact", label: "Instruct an expert" },
            ]}
            columns={3}
            className="!mt-0 !border-0 pt-0"
          />
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
