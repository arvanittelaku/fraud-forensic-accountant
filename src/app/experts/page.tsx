import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { BottomCTA } from "@/components/BottomCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = buildMetadata({
  title: "Our Fraud Forensic Accountants | Fraud Investigation Specialists",
  description:
    "FraudForensicAccountant.com connects solicitors and corporates with qualified fraud forensic accountants: CFE and ACA credentialed specialists in civil and criminal fraud proceedings.",
  path: "/experts",
});

export default function ExpertsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Experts", path: "/experts" },
          ]),
          ...experts.map((e) =>
            personJsonLd({
              slug: e.slug,
              name: e.name,
              jobTitle: e.jobTitle,
              description: e.description,
              credentials: e.credentials,
            })
          ),
        ]}
      />
      <PageHero
        title="Our Fraud Forensic Accountants"
        subtitle="Fraud investigation specialists with CFE, ACA, and FCA credentials across civil fraud, criminal defence, and corporate investigations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experts" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-bold text-heading">{expert.name}</h2>
              <p className="text-sm font-medium text-indigo-accent">{expert.jobTitle}</p>
              <p className="mt-3 text-body">{expert.description}</p>
              <p className="mt-3 text-sm font-semibold text-heading">Credentials</p>
              <ul className="mt-1 list-disc pl-5 text-sm text-body">
                {expert.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm">
                <span className="font-semibold text-heading">Areas: </span>
                {expert.areas.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
