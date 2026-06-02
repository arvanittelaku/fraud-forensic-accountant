import { SITE_URL } from "../site";
import { services } from "../../data/services";
import { fraudTypes } from "../../data/fraud-types";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import { filterSitemapPaths } from "./sitemap-policy";

/** Paths indexed for search (excludes noindex utility/legal pages). */
export const APP_STATIC_PATHS = [
  "/",
  "/services",
  "/fraud-forensic-accounting-explained",
  "/what-is-a-fraud-forensic-accountant",
  "/who-we-help",
  "/who-we-help/criminal-defence-solicitors",
  "/who-we-help/civil-fraud-solicitors",
  "/who-we-help/corporates-compliance",
  "/fraud-types",
  "/case-types",
  "/qualifications",
  "/how-to-instruct",
  "/fees",
  "/faq",
  "/guides",
  "/experts",
  "/glossary",
  "/cookies",
  "/contact", // indexable but excluded from sitemap per §11
] as const;

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const dynamicPaths = [
    ...services.map((s) => `/services/${s.id}`),
    ...fraudTypes.map((f) => `/fraud-types/${f.slug}`),
    ...caseTypes.map((c) => `/case-types/${c.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];

  const allPaths = [...new Set([...APP_STATIC_PATHS, ...dynamicPaths])].sort();

  const allUrls = allPaths.map((path) => {
    const normalized = path === "/" ? "" : path;
    return `${SITE_URL}${normalized}`;
  });

  return { allPaths, allUrls };
}

/** URLs for sitemap.xml (excludes contact, thank-you, privacy, terms). */
export function buildSitemapInventory(): PublicUrlInventory {
  const full = buildPublicUrlInventory();
  const allPaths = filterSitemapPaths(full.allPaths);
  const allUrls = allPaths.map((path) => {
    const normalized = path === "/" ? "" : path;
    return `${SITE_URL}${normalized}`;
  });
  return { allPaths, allUrls };
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/fraud-forensic-accounting-explained") return 0.95;
  if (path.startsWith("/services/")) return 0.93;
  if (
    path === "/who-we-help" ||
    path.startsWith("/who-we-help/") ||
    path === "/fraud-types" ||
    path === "/case-types"
  )
    return 0.92;
  if (path.startsWith("/fraud-types/")) return 0.9;
  if (path === "/what-is-a-fraud-forensic-accountant") return 0.9;
  if (
    path === "/qualifications" ||
    path === "/how-to-instruct" ||
    path === "/fees"
  )
    return 0.88;
  if (path.startsWith("/case-types/")) return 0.88;
  if (path === "/faq" || path === "/guides") return 0.87;
  if (path === "/guides/sfo-enforcement-update-2025") return 0.85;
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/experts") return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/cookies") return 0.5;
  return 0.5;
}

export function getSitemapChangeFreq(path: string): string {
  if (path === "/") return "weekly";
  if (path === "/guides" || path.startsWith("/guides/")) return "weekly";
  if (path === "/privacy" || path === "/terms") return "yearly";
  return "monthly";
}
