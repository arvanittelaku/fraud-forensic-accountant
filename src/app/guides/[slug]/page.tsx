import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { GUIDE_STANDARD_LINKS } from "@/lib/seo/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { guides, getGuide } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getGuide(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getGuide(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: page.title, path: `/guides/${slug}` },
          ]),
          articleJsonLd({
            headline: page.h1,
            description: page.metaDescription,
            path: `/guides/${slug}`,
            aboutServiceId: page.aboutServiceId,
          }),
        ]}
      />
      <PageHero
        title={page.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: page.title },
        ]}
      />
      <ContentSection>
        {page.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <InternalLinkGrid title="Related guides and resources" links={GUIDE_STANDARD_LINKS} />
      </ContentSection>
      <BottomCTA />
    </>
  );
}
