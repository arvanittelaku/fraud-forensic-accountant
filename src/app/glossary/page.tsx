import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { glossaryTerms } from "@/data/glossary";

export const metadata = buildMetadata({
  title: "Fraud Forensic Accountant Glossary | Key Legal & Investigation Terms",
  description:
    "Definitions of key fraud forensic accounting and financial crime terms for proceedings: from POCA to UWOs, DPAs, freezing orders, and CPR Part 35.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.question.localeCompare(b.question)
  );

  return (
    <>
      <JsonLd
        data={[
          faqPageJsonLd(sorted),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
        ]}
      />
      <PageHero
        title="Fraud Forensic Accountant Glossary"
        subtitle="Key legal and investigation terms for fraud forensic accounting proceedings."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />
      <ContentSection>
        {sorted.map((term) => (
          <div key={term.question} id={term.question.toLowerCase().replace(/\s+/g, "-")}>
            <h2 className="!mt-6 text-lg">{term.question}</h2>
            <p>
              {term.answer}
              {term.slug && (
                <>
                  {" "}
                  <Link href={term.slug} className="text-indigo-accent hover:underline">
                    Learn more →
                  </Link>
                </>
              )}
            </p>
          </div>
        ))}
      </ContentSection>
      <BottomCTA />
    </>
  );
}
