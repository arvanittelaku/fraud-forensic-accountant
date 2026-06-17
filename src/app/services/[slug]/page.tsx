import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { BottomCTA } from "@/components/BottomCTA";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { ServiceFaqs } from "@/components/ServiceFaqs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { services, getService } from "@/data/services";
import { fraudTypes } from "@/data/fraud-types";
import { caseTypes } from "@/data/case-types";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} | Fraud Forensic Accountant`,
    description: service.short,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const fraud = fraudTypes.find((f) => f.slug === service.fraudType);
  const caseT = caseTypes.find((c) => c.slug === service.caseType);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ]),
          faqPageJsonLd(service.faqs),
        ]}
      />
      <PageHero
        title={service.title}
        subtitle={service.short}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <div className="py-12 md:py-16">
        <div className="prose-content mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-heading">Methodology</h2>
          <ResponsiveTable>
            <table className="mt-4 w-full min-w-[320px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-border bg-section-alt px-4 py-2 text-left">Step</th>
                  <th className="border border-border bg-section-alt px-4 py-2 text-left">Detail</th>
                </tr>
              </thead>
              <tbody>
                {service.methodology.map((m) => (
                  <tr key={m.step}>
                    <td className="border border-border px-4 py-2 font-medium">{m.step}</td>
                    <td className="border border-border px-4 py-2">{m.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTable>

          <p className="mt-6 text-sm">
            Related:{" "}
            {fraud && (
              <Link href={`/fraud-types/${fraud.slug}`} className="text-indigo-accent hover:underline">
                {fraud.title}
              </Link>
            )}
            {fraud && caseT && " · "}
            {caseT && (
              <Link href={`/case-types/${caseT.slug}`} className="text-indigo-accent hover:underline">
                {caseT.title}
              </Link>
            )}
          </p>

          <ServiceFaqs faqs={service.faqs} />
        </div>
      </div>
      <BottomCTA />
    </>
  );
}
