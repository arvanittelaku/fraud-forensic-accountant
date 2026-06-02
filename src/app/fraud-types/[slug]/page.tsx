import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { DynamicContentPage } from "@/components/DynamicContentPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { fraudTypes, getFraudType } from "@/data/fraud-types";

export function generateStaticParams() {
  return fraudTypes.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getFraudType(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/fraud-types/${slug}`,
  });
}

export default async function FraudTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getFraudType(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Fraud Types", path: "/fraud-types" },
            { name: page.title, path: `/fraud-types/${slug}` },
          ]),
          faqPageJsonLd(page.faqs),
        ]}
      />
      <PageHero
        title={page.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fraud Types", href: "/fraud-types" },
          { label: page.title },
        ]}
      />
      <DynamicContentPage
        page={page}
        extraLinks={[
          { href: "/fraud-types", label: "All fraud types" },
          { href: "/who-we-help", label: "Who we help" },
        ]}
      />
    </>
  );
}
