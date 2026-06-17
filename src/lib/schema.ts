import { LINKEDIN_URL, SITE_EMAIL, SITE_NAME, SITE_URL } from "./site";

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; path: string };

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  datePublished = "2025-06-01",
  dateModified = "2026-06-02",
  aboutServiceId,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  aboutServiceId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline,
    description,
    datePublished,
    dateModified,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${path}`,
    inLanguage: "en",
    ...(aboutServiceId && {
      about: { "@id": `${SITE_URL}/services#${aboutServiceId}` },
    }),
  };
}

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  sameAs: [LINKEDIN_URL],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const serviceCatalog = [
  {
    id: "fraud-investigation-evidence",
    name: "Fraud Investigation & Evidence Building",
  },
  { id: "asset-tracing-recovery", name: "Asset Tracing & Recovery" },
  { id: "poca-confiscation-analysis", name: "POCA Confiscation Analysis" },
  { id: "civil-fraud-recovery-support", name: "Civil Fraud Recovery Support" },
  { id: "sfo-regulatory-support", name: "SFO & Regulatory Investigation Support" },
  { id: "dpa-preparation-support", name: "DPA Preparation & Negotiation Support" },
  { id: "crypto-fraud-investigation", name: "Crypto Fraud Investigation" },
  { id: "expert-witness-reports", name: "Expert Witness Reports & Testimony" },
];

export function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Fraud Forensic Accountant",
    serviceType: "Fraud Forensic Accountant",
    provider: { "@id": `${SITE_URL}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fraud Forensic Accountant Services",
      itemListElement: serviceCatalog.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/services#${s.id}`,
          name: s.name,
        },
      })),
    },
  };
}

export function servicesPageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...serviceCatalog.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/services#${s.id}`,
        name: s.name,
        provider: { "@id": `${SITE_URL}/#organization` },
      })),
    ],
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      professionalServiceSchema(),
    ],
  };
}

export function personJsonLd(expert: {
  slug: string;
  name: string;
  jobTitle: string;
  description: string;
  credentials: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/experts#${expert.slug}`,
    name: expert.name,
    jobTitle: expert.jobTitle,
    description: expert.description,
    knowsAbout: expert.credentials,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/experts`,
  };
}
