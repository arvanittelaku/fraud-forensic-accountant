import Link from "next/link";
import { ContentSection } from "./ContentSection";
import { BottomCTA } from "./BottomCTA";
import { InternalLinkGrid } from "./seo/InternalLinkGrid";
import { STANDARD_CONTENT_FOOTER_LINKS } from "@/lib/seo/internal-links";
import type { ContentPage } from "@/data/types";
import { services } from "@/data/services";

export function DynamicContentPage({
  page,
  extraLinks,
}: {
  page: ContentPage;
  extraLinks?: { href: string; label: string }[];
}) {
  const footerLinks = [
    ...STANDARD_CONTENT_FOOTER_LINKS,
    ...(extraLinks ?? []),
  ];

  return (
    <>
      <ContentSection>
        {page.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {page.faqs.length > 0 && (
          <>
            <h2>Frequently Asked Questions</h2>
            {page.faqs.map((faq) => (
              <div key={faq.question} className="mb-6">
                <h3 className="!mt-4 text-lg">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </>
        )}

        {(page.relatedCaseTypes || page.relatedFraudTypes || page.relatedServices) && (
          <>
            <h2>Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.relatedCaseTypes?.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-types/${r.slug}`}
                  className="flex min-h-[44px] items-center rounded-[8px] border border-border p-4 transition hover:border-indigo-accent/30"
                >
                  <span className="font-medium text-heading">{r.label}</span>
                </Link>
              ))}
              {page.relatedFraudTypes?.map((r) => (
                <Link
                  key={r.slug}
                  href={`/fraud-types/${r.slug}`}
                  className="flex min-h-[44px] items-center rounded-[8px] border border-border p-4 transition hover:border-indigo-accent/30"
                >
                  <span className="font-medium text-heading">{r.label}</span>
                </Link>
              ))}
              {page.relatedServices?.map((id) => {
                const s = services.find((x) => x.id === id);
                if (!s) return null;
                return (
                  <Link
                    key={id}
                    href={`/services/${id}`}
                    className="flex min-h-[44px] items-center rounded-[8px] border border-border p-4 transition hover:border-indigo-accent/30"
                  >
                    <span className="font-medium text-heading">{s.title}</span>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        <InternalLinkGrid title="More on fraud forensic accounting" links={footerLinks} />
      </ContentSection>
      <BottomCTA />
    </>
  );
}
