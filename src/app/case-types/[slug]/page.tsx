import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { DynamicContentPage } from "@/components/DynamicContentPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { caseTypes, getCaseType } from "@/data/case-types";

export function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Types", path: "/case-types" },
            { name: page.title, path: `/case-types/${slug}` },
          ]),
          faqPageJsonLd(page.faqs),
        ]}
      />
      <PageHero
        title={page.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types", href: "/case-types" },
          { label: page.title },
        ]}
      />
      <DynamicContentPage
        page={page}
        extraLinks={[
          { href: "/case-types", label: "All case types" },
          { href: "/how-to-instruct", label: "How to instruct" },
        ]}
      />
    </>
  );
}
