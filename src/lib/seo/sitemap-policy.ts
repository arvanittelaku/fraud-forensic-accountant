/** Paths indexed in HTML but excluded from sitemap.xml per SEO-ARCHITECTURE.md §11 */
export const SITEMAP_EXCLUDED_PATHS = new Set([
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
]);

export function filterSitemapPaths(paths: string[]): string[] {
  return paths.filter((p) => !SITEMAP_EXCLUDED_PATHS.has(p));
}
