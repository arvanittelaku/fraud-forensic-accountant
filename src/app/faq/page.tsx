import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import Link from "next/link";
import { siteFaqs } from "@/data/faq";
import { faqRelatedLinks } from "@/data/faq-related-links";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountant FAQ | Civil, Criminal & Corporate Questions",
  description:
    "Answers to common questions about fraud forensic accountants: POCA, UWOs, DPAs, FTPF, civil vs criminal fraud, crypto fraud, asset tracing, and fees.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageJsonLd(siteFaqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        title="Fraud Forensic Accountant FAQ"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <ContentSection>
        {siteFaqs.map((faq) => {
          const related = faqRelatedLinks[faq.question] ?? [];
          return (
            <div key={faq.question} className="mb-8">
              <h2 className="!mt-0 text-xl">{faq.question}</h2>
              <p>{faq.answer}</p>
              {related.length > 0 && (
                <p className="mt-3 text-sm">
                  <span className="font-medium text-heading">Related: </span>
                  {related.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && " · "}
                      <Link href={link.href} className="text-indigo-accent hover:underline">
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
            </div>
          );
        })}
      </ContentSection>
      <BottomCTA />
    </>
  );
}
