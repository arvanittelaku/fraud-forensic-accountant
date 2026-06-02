/**
 * Verifies public/sitemap.xml matches buildPublicUrlInventory().
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildSitemapInventory } from "../src/lib/seo/publicUrlInventory";

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

function main() {
  const sitemapPath = join(process.cwd(), "public", "sitemap.xml");

  if (!existsSync(sitemapPath)) {
    console.error("Missing public/sitemap.xml. Run: npm run seo:generate");
    process.exit(1);
  }

  const xml = readFileSync(sitemapPath, "utf8");
  const sitemapUrls = extractLocs(xml);
  const inventory = buildSitemapInventory();
  const expected = [...inventory.allUrls].sort();

  const missing = expected.filter((u) => !sitemapUrls.includes(u));
  const extra = sitemapUrls.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    console.error("Sitemap missing URLs:");
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    console.error("Sitemap has unexpected URLs:");
    extra.forEach((u) => console.error(`  - ${u}`));
  }

  if (missing.length > 0 || extra.length > 0) {
    console.error("\nRun npm run seo:generate to refresh public/sitemap.xml");
    process.exit(1);
  }

  console.log(`OK: sitemap.xml contains ${sitemapUrls.length} URLs matching inventory.`);
}

main();
