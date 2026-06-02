/**
 * Generates public/sitemap.xml and public/robots.txt from the public URL inventory.
 * Run: npm run seo:generate
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  buildSitemapInventory,
  getSitemapChangeFreq,
  getSitemapPriority,
} from "../src/lib/seo/publicUrlInventory";
import { SITE_URL } from "../src/lib/site";

const PUBLIC_DIR = join(process.cwd(), "public");

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function renderSitemap(urls: string[]): string {
  const lastmod = todayUtc();
  const entries = urls
    .map((url) => {
      const path = url.replace(SITE_URL, "") || "/";
      return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getSitemapChangeFreq(path)}</changefreq>
    <priority>${getSitemapPriority(path).toFixed(2)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderRobots(): string {
  return `User-agent: *
Allow: /

Disallow: /thank-you
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function main() {
  const inventory = buildSitemapInventory();

  mkdirSync(PUBLIC_DIR, { recursive: true });

  const sitemapPath = join(PUBLIC_DIR, "sitemap.xml");
  const robotsPath = join(PUBLIC_DIR, "robots.txt");

  writeFileSync(sitemapPath, renderSitemap(inventory.allUrls), "utf8");
  writeFileSync(robotsPath, renderRobots(), "utf8");

  console.log(`Wrote ${inventory.allUrls.length} URLs to ${sitemapPath}`);
  console.log(`Wrote robots.txt to ${robotsPath}`);
}

main();
