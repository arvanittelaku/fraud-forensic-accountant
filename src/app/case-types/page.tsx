import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { CardGrid } from "@/components/CardGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { caseTypes } from "@/data/case-types";

export const metadata = buildMetadata({
  title: "Case Types for Fraud Forensic Accountants | UK Civil & Criminal Guide",
  description:
    "Which UK proceedings need a fraud forensic accountant? SFO investigations, POCA confiscation, UWOs, civil fraud recovery, DPAs, FCA enforcement, and private prosecution explained.",
  path: "/case-types",
});

export default function CaseTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        title="Case Types for Fraud Forensic Accountants UK"
        subtitle="UK civil and criminal proceedings where specialist fraud forensic accounting evidence is required."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Types" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CardGrid
            items={caseTypes.map((c) => ({
              title: c.h1,
              description: c.paragraphs[0],
              href: `/case-types/${c.slug}`,
            }))}
          />
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
