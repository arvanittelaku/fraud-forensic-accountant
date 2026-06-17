import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { BottomCTA } from "@/components/BottomCTA";
import { CardGrid } from "@/components/CardGrid";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountant Services | Full Service List",
  description:
    "fraud forensic accountant services: fraud investigation, asset tracing, POCA confiscation, civil fraud recovery, SFO support, DPA preparation, crypto fraud analysis, and expert witness reports.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesPageGraph(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHero
        title="Fraud Forensic Accountant Services"
        subtitle="Comprehensive fraud forensic accounting services for civil fraud, criminal defence, and corporate regulatory matters."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CardGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.short,
              href: `/services/${s.id}`,
            }))}
          />
        </div>
      </section>
      <div className="pb-12 text-center">
        <p className="text-sm text-body">
          Each service page includes methodology, related case types, and frequently asked questions.
        </p>
      </div>
      <BottomCTA />
    </>
  );
}
