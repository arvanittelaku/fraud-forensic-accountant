import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { CardGrid } from "@/components/CardGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { fraudTypes } from "@/data/fraud-types";

export const metadata = buildMetadata({
  title: "Types of Fraud Requiring a Forensic Accountant | Guide",
  description:
    "Which types of fraud need a forensic accountant? Corporate fraud, investment fraud, bribery, money laundering, crypto fraud, tax fraud, procurement fraud, and financial statement fraud explained.",
  path: "/fraud-types",
});

export default function FraudTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Fraud Types", path: "/fraud-types" },
        ])}
      />
      <PageHero
        title="Types of Fraud Requiring a Forensic Accountant"
        subtitle="Dedicated guides to each major fraud category and the forensic accounting evidence required in civil and criminal proceedings."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fraud Types" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CardGrid
            items={fraudTypes.map((f) => ({
              title: f.h1,
              description: f.paragraphs[0],
              href: `/fraud-types/${f.slug}`,
            }))}
          />
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
