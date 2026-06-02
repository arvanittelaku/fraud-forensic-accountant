import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { CardGrid } from "@/components/CardGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { guides } from "@/data/guides";

export const metadata = buildMetadata({
  title: "Guides: Fraud Forensic Accountants UK | POCA, DPAs, Civil Recovery & More",
  description:
    "In-depth guides for UK solicitors and corporates on fraud forensic accountants: POCA confiscation, civil fraud recovery, SFO self-reporting, DPAs, and crypto fraud.",
  path: "/guides",
});

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Guides: Fraud Forensic Accountants UK"
        subtitle="In-depth resources on POCA, DPAs, civil recovery, SFO enforcement, crypto fraud, and corporate internal investigations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CardGrid
            items={guides.map((g) => ({
              title: g.h1,
              description: g.paragraphs[0],
              href: `/guides/${g.slug}`,
            }))}
          />
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
