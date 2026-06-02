import type { FaqItem } from "@/lib/schema";

export type ContentPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  paragraphs: string[];
  faqs: FaqItem[];
  relatedCaseTypes?: { slug: string; label: string }[];
  relatedFraudTypes?: { slug: string; label: string }[];
  relatedServices?: string[];
};

export type GuidePage = ContentPage & {
  aboutServiceId?: string;
};
