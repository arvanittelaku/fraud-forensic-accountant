import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { CardGrid } from "@/components/CardGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Who We Help | Fraud Forensic Accountants for Defence, Civil Fraud & Corporates",
  description:
    "Fraud forensic accountants for criminal defence solicitors, civil fraud solicitors, and corporates facing internal investigations or SFO/FCA enforcement.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help" },
        ])}
      />
      <PageHero
        title="Who We Help"
        subtitle="Fraud forensic accountants for three distinct client groups: criminal defence, civil fraud recovery, and corporates facing internal or regulatory investigations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Who We Help" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CardGrid
            items={[
              {
                title: "Criminal Defence Solicitors",
                description:
                  "Defending individuals and corporates facing SFO, FCA, CPS, HMRC, and NCA fraud investigations and prosecutions.",
                href: "/who-we-help/criminal-defence-solicitors",
              },
              {
                title: "Civil Fraud Solicitors",
                description:
                  "Pursuing fraud recovery through freezing injunctions, asset tracing, POCA civil recovery, UWOs, and private prosecution.",
                href: "/who-we-help/civil-fraud-solicitors",
              },
              {
                title: "Corporates & Compliance",
                description:
                  "Internal investigations, SFO self-reporting, DPA preparation, and FTPF compliance advisory.",
                href: "/who-we-help/corporates-compliance",
              },
            ]}
          />
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
