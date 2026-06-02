# SEO Architecture — fraudforensicaccountant.com

**Domain:** [https://www.fraudforensicaccountant.com](https://www.fraudforensicaccountant.com)  
**Canonical host:** `www` (apex → www via middleware)  
**Primary market:** United Kingdom (`en-GB`)  
**Secondary:** United States, EU (`en-US`, `x-default`)  
**Business model:** Lead-generation referral platform connecting solicitors and corporates with qualified fraud forensic accountants (not a law firm).

This document is the single source of truth for keyword targeting, content clusters, internal linking, structured data, generative-engine optimization (GEO), off-page strategy, competitive monitoring, launch timing, and deployment.

---

## Table of contents

1. [Keyword strategy](#1-keyword-strategy)
2. [Content cluster map](#2-content-cluster-map)
3. [Internal linking rules](#3-internal-linking-rules)
4. [Schema architecture](#4-schema-architecture)
5. [GEO optimization targets](#5-geo-optimization-targets)
6. [Off-page SEO targets](#6-off-page-seo-targets)
7. [Competitor monitoring](#7-competitor-monitoring)
8. [Strategic note — timing](#8-strategic-note--timing)
9. [Deployment checklist](#9-deployment-checklist)
10. [Site map and keyword-to-page mapping](#10-site-map-and-keyword-to-page-mapping)
11. [Technical SEO standards](#11-technical-seo-standards)
12. [Sitemap priorities](#12-sitemap-priorities)
13. [Measurement and KPIs](#13-measurement-and-kpis)

---

## 1. Keyword strategy

Keywords are grouped by intent. Each tier maps to primary landing pages (see [§10](#10-site-map-and-keyword-to-page-mapping)).

### Tier 1 — Transactional (hire / instruct intent)

| Target keyword | Primary page | Secondary pages |
|----------------|--------------|-----------------|
| fraud forensic accountant UK | `/` | `/what-is-a-fraud-forensic-accountant`, `/services` |
| fraud forensic accountant | `/` | `/fraud-forensic-accounting-explained` |
| forensic accountant fraud UK | `/` | `/services`, `/experts` |
| fraud forensic accountant expert witness | `/services#expert-witness-reports` | `/qualifications`, `/how-to-instruct` |
| civil fraud forensic accountant UK | `/who-we-help/civil-fraud-solicitors` | `/case-types/civil-fraud-recovery-proceedings` |
| criminal fraud forensic accountant UK | `/who-we-help/criminal-defence-solicitors` | `/case-types/poca-confiscation-defence` |
| SFO investigation forensic accountant | `/case-types/sfo-fraud-investigation` | `/guides/sfo-enforcement-update-2025` |
| POCA forensic accountant UK | `/case-types/poca-confiscation-defence` | `/guides/poca-confiscation-guide` |
| asset tracing forensic accountant UK | `/who-we-help/civil-fraud-solicitors` | `/services#asset-tracing-recovery` |
| DPA forensic accountant UK | `/case-types/deferred-prosecution-agreement` | `/guides/dpa-financial-quantification-guide` |

### Tier 2 — Informational (research / education intent)

| Target keyword | Primary page | Secondary pages |
|----------------|--------------|-----------------|
| what is a fraud forensic accountant UK | `/what-is-a-fraud-forensic-accountant` | `/fraud-forensic-accounting-explained` |
| civil fraud vs criminal fraud UK | `/fraud-forensic-accounting-explained` | `/faq` |
| how does POCA confiscation work UK | `/guides/poca-confiscation-guide` | `/fraud-forensic-accounting-explained` |
| what is an unexplained wealth order UK | `/case-types/unexplained-wealth-orders` | `/glossary#unexplained-wealth-order-uwo` |
| what is a deferred prosecution agreement | `/case-types/deferred-prosecution-agreement` | `/glossary#deferred-prosecution-agreement-dpa` |
| SFO self-reporting guidance 2025 | `/guides/sfo-enforcement-update-2025` | `/who-we-help/corporates-compliance` |
| how to trace assets in fraud case UK | `/who-we-help/civil-fraud-solicitors` | `/guides/civil-fraud-recovery-forensic-guide` |
| FTPF offence forensic accountant | `/what-is-a-fraud-forensic-accountant` | `/fraud-forensic-accounting-explained` |
| crypto fraud forensic accountant UK | `/fraud-types/crypto-fraud-digital-assets` | `/guides/crypto-fraud-forensic-guide` |
| internal investigation legal privilege UK | `/guides/internal-investigation-lpp-guide` | `/case-types/corporate-internal-investigation` |

### Tier 3 — Long-tail / case-specific (high conversion)

| Target keyword | Primary page |
|----------------|--------------|
| SFO fraud investigation forensic accountant UK | `/case-types/sfo-fraud-investigation` |
| POCA confiscation defence forensic accountant UK | `/case-types/poca-confiscation-defence` |
| unexplained wealth order forensic rebuttal UK | `/case-types/unexplained-wealth-orders` |
| DPA disgorgement calculation forensic accountant | `/guides/dpa-financial-quantification-guide` |
| Bribery Act forensic accountant UK | `/fraud-types/bribery-corruption` |
| money laundering forensic accountant POCA UK | `/case-types/money-laundering-proceedings` |
| crypto fraud asset recovery forensic accountant UK | `/fraud-types/crypto-fraud-digital-assets` |
| FCA enforcement forensic accountant UK | `/case-types/fca-enforcement-investigation` |
| HMRC COP9 forensic accountant UK | `/case-types/hmrc-fraud-investigation` |
| corporate internal investigation forensic accountant LPP UK | `/case-types/corporate-internal-investigation` |

### Title tag formula

- **Homepage:** `{Primary keyword} | {Secondary benefit}` (≤ 60 characters where possible)
- **Hub pages:** `{Topic} | Fraud Forensic Accountants UK`
- **Leaf pages:** `{Case/Fraud type} Forensic Accountant UK | {Outcome}`
- **Guides:** `{Topic}: {Audience} Guide | UK`
- Brand suffix on high-traffic pages only when space allows: `| FraudForensicAccountant.com`

---

## 2. Content cluster map

Eight topical hubs. Each hub has one **pillar** (highest authority page) and **supporting** pages that reinforce the cluster via internal links and shared vocabulary.

### Hub 1: SFO / Corporate DPA

**Pillar:** `/case-types/sfo-fraud-investigation`  
**Audience:** Criminal defence solicitors, corporate counsel, compliance

| Role | URL |
|------|-----|
| Case type | `/case-types/sfo-fraud-investigation` |
| Case type | `/case-types/deferred-prosecution-agreement` |
| Guide | `/guides/sfo-enforcement-update-2025` |
| Guide | `/guides/dpa-financial-quantification-guide` |
| Audience | `/who-we-help/corporates-compliance` |
| Fraud type | `/fraud-types/corporate-fraud` |
| Glossary | `/glossary#deferred-prosecution-agreement-dpa` |
| Glossary | `/glossary#section-2-notice-sfo` |
| Glossary | `/glossary#disgorgement` |
| FAQ | `/faq` (SFO, DPA, self-reporting Q&As) |
| Service | `/services#sfo-regulatory-support` |
| Service | `/services#dpa-preparation-support` |

### Hub 2: POCA Confiscation

**Pillar:** `/guides/poca-confiscation-guide`  
**Audience:** Criminal defence solicitors

| Role | URL |
|------|-----|
| Case type | `/case-types/poca-confiscation-defence` |
| Guide | `/guides/poca-confiscation-guide` |
| Pillar section | `/fraud-forensic-accounting-explained` (POCA framework H2) |
| Audience | `/who-we-help/criminal-defence-solicitors` |
| Glossary | `/glossary#poca-2002-proceeds-of-crime-act` |
| Glossary | `/glossary#benefit-from-criminal-conduct-poca` |
| Glossary | `/glossary#tainted-gift-poca` |
| Glossary | `/glossary#newton-hearing-poca` |
| Service | `/services#poca-confiscation-analysis` |

### Hub 3: Civil Fraud Recovery

**Pillar:** `/guides/civil-fraud-recovery-forensic-guide`  
**Audience:** Civil fraud solicitors

| Role | URL |
|------|-----|
| Case type | `/case-types/civil-fraud-recovery-proceedings` |
| Guide | `/guides/civil-fraud-recovery-forensic-guide` |
| Case type | `/case-types/unexplained-wealth-orders` |
| Case type | `/case-types/private-prosecution-fraud` |
| Audience | `/who-we-help/civil-fraud-solicitors` |
| Glossary | `/glossary#freezing-order-mareva-injunction` |
| Glossary | `/glossary#norwich-pharmacal-order` |
| Glossary | `/glossary#asset-tracing` |
| Service | `/services#civil-fraud-recovery-support` |
| Service | `/services#asset-tracing-recovery` |

### Hub 4: Crypto Fraud

**Pillar:** `/fraud-types/crypto-fraud-digital-assets`  
**Audience:** Civil and criminal solicitors, corporates

| Role | URL |
|------|-----|
| Fraud type | `/fraud-types/crypto-fraud-digital-assets` |
| Guide | `/guides/crypto-fraud-forensic-guide` |
| Pillar section | `/fraud-forensic-accounting-explained` (crypto H2) |
| Service | `/services#crypto-fraud-investigation` |
| Glossary | `/glossary#cryptoasset-recovery-poca` |
| Case type | `/case-types/money-laundering-proceedings` (POCA crypto recovery) |

### Hub 5: Bribery & AML

**Pillar:** `/fraud-types/bribery-corruption`  
**Audience:** Corporates, defence, civil recovery

| Role | URL |
|------|-----|
| Fraud type | `/fraud-types/bribery-corruption` |
| Fraud type | `/fraud-types/money-laundering-aml` |
| Case type | `/case-types/money-laundering-proceedings` |
| Service | `/services#sfo-regulatory-support` |
| Glossary | `/glossary#bribery-act-2010` |
| Glossary | `/glossary#cams-certified-anti-money-laundering-specialist` |
| Glossary | `/glossary#daml-defence-against-money-laundering` |

### Hub 6: Internal Investigations & LPP

**Pillar:** `/guides/internal-investigation-lpp-guide`  
**Audience:** Corporates, in-house counsel

| Role | URL |
|------|-----|
| Case type | `/case-types/corporate-internal-investigation` |
| Guide | `/guides/internal-investigation-lpp-guide` |
| Audience | `/who-we-help/corporates-compliance` |
| Glossary | `/glossary#legal-professional-privilege-lpp` |
| FAQ | `/faq` (LPP, internal investigation Q&As) |

### Hub 7: Fraud Types (Master)

**Pillar:** `/fraud-types` (hub) + `/fraud-forensic-accounting-explained`  
**Audience:** All three audiences

| Role | URL |
|------|-----|
| Hub | `/fraud-types` |
| Leaf (×8) | `/fraud-types/[slug]` — see [§10](#10-site-map-and-keyword-to-page-mapping) |
| Explainer | `/fraud-forensic-accounting-explained` |
| Definition | `/what-is-a-fraud-forensic-accountant` |
| Reference | `/glossary` (all fraud-type terms) |

### Hub 8: Civil vs Criminal Framework

**Pillar:** `/fraud-forensic-accounting-explained` (comparison table)  
**Audience:** Solicitors instructing for the first time

| Role | URL |
|------|-----|
| Master comparison | `/fraud-forensic-accounting-explained` |
| Role definition | `/what-is-a-fraud-forensic-accountant` |
| Expert rules | `/qualifications` (CPR Part 35 vs CrPR Part 33) |
| Process | `/how-to-instruct` (three-audience sections) |
| FAQ | `/faq` (civil vs criminal Q&As) |

---

## 3. Internal linking rules

Implement in page templates and content review. Anchor text should be descriptive (not “click here”). Minimum counts are per page type at publish.

### Rule 1 — `/fraud-forensic-accounting-explained` (GEO pillar)

Must link to:

- All three `/who-we-help/[slug]` pages
- `/fraud-types` (hub)
- All relevant `/case-types/[slug]` (context-dependent; aim for ≥6 across pillar body)
- All relevant `/glossary` terms (inline anchors to fragment IDs)
- `/guides` (hub) and ≥2 individual guides
- `/contact`

### Rule 2 — `/who-we-help/[slug]` (each audience page)

Each of the three audience pages must link to:

- ≥3 relevant `/case-types/[slug]`
- ≥2 relevant `/services` fragment anchors (`#service-id`)
- ≥1 relevant `/guides/[slug]`
- `/fraud-forensic-accounting-explained`
- `/qualifications`
- `/contact`

**Cross-audience:** Optional footer link to other audience pages (“Also see: Civil fraud solicitors”).

### Rule 3 — Every `/fraud-types/[slug]`

Must link to:

- ≥2 relevant `/case-types/[slug]`
- ≥1 relevant `/services` section
- `/fraud-forensic-accounting-explained`
- `/glossary` (≥2 key terms with fragment links)
- Relevant `/who-we-help/[slug]`
- `/contact`

### Rule 4 — Every `/case-types/[slug]`

Must link to:

- ≥1 relevant `/fraud-types/[slug]`
- ≥1 relevant `/services` section
- ≥1 relevant `/guides/[slug]` where a guide exists
- `/fraud-forensic-accounting-explained`
- `/glossary` (≥2 key terms)
- `/how-to-instruct` (audience-appropriate section)
- `/contact`

### Rule 5 — Every `/guides/[slug]`

Must link to:

- `/guides` (hub)
- ≥1 relevant `/fraud-types/[slug]`
- ≥1 relevant `/case-types/[slug]`
- `/fraud-forensic-accounting-explained`
- `/who-we-help` (hub or specific slug)
- `/contact`

### Rule 6 — Homepage `/`

Must link to:

- All three `/who-we-help/[slug]` pages
- All eight `/services` sections (cards or footer)
- `/fraud-forensic-accounting-explained`
- `/what-is-a-fraud-forensic-accountant`
- `/fraud-types` and `/case-types` (hubs)
- `/guides`
- `/faq`
- `/contact`

**Enforcement alert:** Homepage crimson banner links to `/guides/sfo-enforcement-update-2025`.

### Global patterns

| From | To | Pattern |
|------|-----|---------|
| All content pages | `/contact` | Bottom indigo CTA section |
| Hub pages | All child slugs | Card grid with H2-matched anchors |
| `/glossary` | Deep pages | Every term links to primary explanatory page |
| `/faq` | Case types, guides, pillar | Answer text contains contextual links |
| Footer | Services, fraud types, resources, audiences | Sitewide (all indexable pages) |

---

## 4. Schema architecture

Base URL: `https://www.fraudforensicaccountant.com`  
Use `@graph` on pages with multiple entities. Stable `@id` values enable cross-referencing.

### Root entity

```json
{
  "@type": "Organization",
  "@id": "https://www.fraudforensicaccountant.com/#organization",
  "name": "FraudForensicAccountant",
  "url": "https://www.fraudforensicaccountant.com",
  "email": "info@fraudforensicaccountant.com",
  "address": { "@type": "PostalAddress", "addressCountry": "GB" },
  "areaServed": ["GB", "US", "EU"],
  "sameAs": ["https://www.linkedin.com/company/fraudforensicaccountant"]
}
```

### Entity hierarchy

| Entity type | Pages | `@id` pattern |
|-------------|-------|----------------|
| **Organization** | Sitewide reference | `/#organization` |
| **ProfessionalService** | `/` | `/#professional-service` |
| **WebSite** + **SearchAction** | `/` | `/#website` |
| **Service** (×8) | `/services` + fragment refs | `/services#{service-slug}` |
| **Article** | `/fraud-forensic-accounting-explained` | `/fraud-forensic-accounting-explained#article` |
| **Article** (×6) | `/guides/[slug]` | `/guides/{slug}#article` |
| **Person** (×3) | `/experts` | `/experts#{person-slug}` |
| **FAQPage** | `/faq` | `/faq#faq` |
| **FAQPage** | `/glossary` | `/glossary#faq` |
| **FAQPage** | `/fraud-types/[slug]` (×8) | `/fraud-types/{slug}#faq` |
| **FAQPage** | `/case-types/[slug]` (×10) | `/case-types/{slug}#faq` |
| **BreadcrumbList** | All non-homepage indexable pages | `{canonical-url}#breadcrumb` |

### Service `@id` slugs (align with `/services` anchors)

1. `#fraud-investigation-evidence`
2. `#asset-tracing-recovery`
3. `#poca-confiscation-analysis`
4. `#civil-fraud-recovery-support`
5. `#sfo-regulatory-support`
6. `#dpa-preparation-support`
7. `#crypto-fraud-investigation`
8. `#expert-witness-reports`

### Article `about` / `mentions`

- Pillar Article `about` → `#fraud-investigation-evidence` and relevant Service nodes
- Guide Articles `about` → matching Service and CaseType URLs
- Use `mentions` for legislation terms (POCA, ECCTA, Bribery Act) where appropriate

### Pages excluded from rich results emphasis

| Page | Robots | Schema |
|------|--------|--------|
| `/thank-you` | `noindex, nofollow` | None |
| `/privacy` | `noindex, follow` | None |
| `/terms` | `noindex, follow` | None |
| `/contact` | `index, follow` | Optional `ContactPage`; omit from sitemap |

### Implementation notes

- Inject JSON-LD via shared `JsonLd` component per route
- Validate with Google Rich Results Test before launch
- FAQPage: question text must match visible on-page FAQ copy exactly
- BreadcrumbList: last item = current page (no link on current)

---

## 5. GEO optimization targets

Generative engines (Google AI Overviews, ChatGPT, Perplexity, etc.) favor **definition-first**, **structured**, **citable** content with clear headings and tables.

### Priority citation assets (top 10)

| # | Asset | URL | Format requirement |
|---|--------|-----|-------------------|
| 1 | Civil vs criminal fraud comparison | `/fraud-forensic-accounting-explained` | Full comparison table; definition-first H2s |
| 2 | POCA framework (criminal + civil + crypto) | `/fraud-forensic-accounting-explained` | Subsections Part 2, Part 5, crypto amendment |
| 3 | UWO explained | `/case-types/unexplained-wealth-orders` | Who applies, £50k threshold, response duty, consequences of non-response |
| 4 | DPA financial settlement structure | `/guides/dpa-financial-quantification-guide` | Numbered list: disgorgement, penalty, costs |
| 5 | Asset tracing methodology | `/who-we-help/civil-fraud-solicitors` | 5–6 step table with tools column |
| 6 | SFO enforcement update 2025–2026 | `/guides/sfo-enforcement-update-2025` | Dated facts, sourced statistics, trial/investigation counts |
| 7 | FTPF offence explanation | `/what-is-a-fraud-forensic-accountant` | In-force date, scope, reasonable procedures defence |
| 8 | HMRC whistleblower scheme | `/fraud-types/tax-fraud-hmrc` | 15–30% reward, £1.5M+ threshold, corporate exposure angle |
| 9 | UK fraud enforcement stats | `/` (homepage) | Sourced table: SFO, FTPF, HMRC, UWO, FCA crypto timeline |
| 10 | Glossary (35 terms) | `/glossary` | Definition-first; one H2 per term; fragment IDs |

### GEO content standards (all pillar and guide pages)

- Open with a **40–60 word definitional paragraph** directly under H1
- Use **HTML tables** for comparisons (not images of tables)
- Include **primary source citations** in footnotes (SFO plan, ECCTA, HMRC guidance)
- Use consistent **UK legal terminology** (POCA, UWO, DPA, FTPF, CPR Part 35, CrPR Part 33)
- Avoid em dashes in body copy (site style rule)
- Update `/guides/sfo-enforcement-update-2025` when SFO publishes new plan data

---

## 6. Off-page SEO targets

### Directory and accreditation listings

Submit firm/expert profiles with consistent NAP and link to `https://www.fraudforensicaccountant.com`:

| Directory | URL |
|-----------|-----|
| UK Register of Expert Witnesses | [jspubs.com](https://www.jspubs.com) |
| ACFE UK Chapter directory | ACFE member directory |
| ICAEW Forensic accreditation | ICAEW find-a-member |
| Academy of Experts | academyofexperts.com |
| Expert Witness Institute (EWI) | ewi.org.uk |
| Fraud Advisory Panel | fraudadvisorypanel.org |
| ACAMS UK (CAMS directory) | acams.org |

### Publication and thought-leadership targets

| Publication | Angle |
|-------------|--------|
| Fraud Intelligence | Case study / methodology pieces |
| Lexology (fraud section) | Regulatory update summaries |
| Global Investigations Review (GIR) | Cross-border asset tracing |
| Compliance Week | FTPF, internal investigations |
| Accountancy Age | Expert witness / credentials |
| Business Crime Defence | SFO, POCA, criminal defence |

### Digital PR story angles

1. **SFO 2025 Reinvigoration:** 5 trials listed for 2026 — what corporates need to know  
2. **DPA or Prosecution?** How forensic accountants quantify the self-reporting decision  
3. **Crypto Fraud Under POCA:** How UK courts recover stolen digital assets  
4. **Unexplained Wealth Orders 2025:** Annual report analysis  
5. **FTPF First Full Year of Enforcement:** What the forensic evidence looks like  

Each PR piece should link to the matching guide or case-type URL in §2.

---

## 7. Competitor monitoring

### Monthly review URLs

| Competitor | URL |
|------------|-----|
| Quantuma | quantuma.com/services/forensic-services/fraud-investigations/ |
| BTG Advisory | btgadvisory.com/services/forensic-services/fraud/ |
| Forensic Risk Alliance | forensicriskalliance.com/services/fraud-corruption-compliance/ |
| Grant Thornton UK | grantthornton.co.uk/services/forensic-and-investigation-services/ |
| Ankura | ankura.com/services/investigations/ |
| JSPubs expert witness index | jspubs.com/expert-witness/si/f/forensic-accountancy/ |

### Track each month

- New FTPF / ECCTA content (live enforcement area)
- SFO prosecution and investigation announcements
- DPA approvals and terms (disgorgement benchmarks)
- UWO annual report and case outcomes
- Crypto fraud enforcement (POCA Part 5, FCA milestones toward October 2027 regime)

### Competitive differentiation (messaging)

| Competitor tier | Their strength | Our counter-position |
|-----------------|----------------|----------------------|
| Big Four / FTI / Alvarez | Brand, cross-border | Niche **fraud-only** focus; solicitor-first UX; three-audience architecture |
| General forensic boutiques | Broad forensic | **Fraud forensic accountant** EMD domain; POCA/UWO/DPA/FTPF depth |
| Law firm marketing pages | Legal advice | Referral platform; forensic matching; CPR/CrPR expert framing |

---

## 8. Strategic note — timing

fraudforensicaccountant.com has the **strongest timing advantage** in the portfolio. Content and homepage alerts should reflect live enforcement cycles.

| Driver | Timing | Content action |
|--------|--------|----------------|
| **FTPF offence** | In force 1 September 2025; first enforcement year 2025–2026 | Target “failure to prevent fraud forensic accountant”; H2 on `/what-is-a-fraud-forensic-accountant` and `/fraud-forensic-accounting-explained`; link to corporates audience |
| **SFO reinvigoration** | 8 new investigations (2025); 5 trials listed for 2026; explicit DPA invitation for self-reporters | Publish and refresh `/guides/sfo-enforcement-update-2025`; homepage enforcement banner |
| **HMRC whistleblower scheme** | 15–30% rewards on serious cases | `/fraud-types/tax-fraud-hmrc`; corporate risk angle on `/who-we-help/corporates-compliance` |
| **Crypto regulation** | FCA full framework October 2027 | `/guides/crypto-fraud-forensic-guide`; “preparing now” narrative for solicitors and corporates |

**Highest-intent capture:** Criminal defence solicitors and corporate counsel actively monitoring SFO developments → route via homepage alert → `/guides/sfo-enforcement-update-2025` → `/contact`.

---

## 9. Deployment checklist

### Infrastructure

- [ ] Vercel deployment (production branch)
- [ ] DNS: `fraudforensicaccountant.com` → `www.fraudforensicaccountant.com` (301 apex redirect in `middleware.ts`)
- [ ] SSL certificate active on www host

### Internationalization and HTML

- [ ] `hreflang`: `en-GB`, `en-US`, `x-default` in root `layout.tsx`
- [ ] `<html lang="en-GB">`
- [ ] Canonical URLs on every indexable page → `https://www.fraudforensicaccountant.com{path}`

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.fraudforensicaccountant.com` |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Contact form |
| `GOOGLE_SITE_VERIFICATION` | Search Console |
| `BING_SITE_VERIFICATION` | Bing Webmaster |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Analytics |

### Search and social

- [ ] `sitemap.xml` generated (priorities per [§12](#12-sitemap-priorities))
- [ ] `robots.txt` allows indexable routes; blocks `/thank-you` if needed
- [ ] Google Search Console property verified
- [ ] Bing Webmaster Tools verified
- [ ] LinkedIn company page: **FraudForensicAccountant** (linked in Organization `sameAs`)

### Off-page launch

- [ ] Submit to JSPubs, ACFE, ICAEW, Academy of Experts, EWI, Fraud Advisory Panel, ACAMS directories

### Post-launch (week 1)

- [ ] Request indexing for `/`, `/fraud-forensic-accounting-explained`, `/services`, three `/who-we-help` pages
- [ ] Rich Results Test on homepage, `/faq`, one `/case-types` and one `/fraud-types` page
- [ ] GA4 conversion event on Formspree success (`/thank-you`)

---

## 10. Site map and keyword-to-page mapping

### Core routes (25 indexable + 3 utility)

| Path | Type | Cluster |
|------|------|---------|
| `/` | Homepage | All |
| `/what-is-a-fraud-forensic-accountant` | Definition | Hub 7, 8 |
| `/services` | Services hub | All |
| `/fraud-forensic-accounting-explained` | Pillar Article | Hub 8 (master) |
| `/who-we-help` | Audience hub | — |
| `/who-we-help/criminal-defence-solicitors` | Audience | Hub 2 |
| `/who-we-help/civil-fraud-solicitors` | Audience | Hub 3 |
| `/who-we-help/corporates-compliance` | Audience | Hub 1, 6 |
| `/fraud-types` | Hub | Hub 7 |
| `/case-types` | Hub | All case hubs |
| `/qualifications` | Trust | Hub 8 |
| `/how-to-instruct` | Conversion | Hub 8 |
| `/fees` | Conversion | — |
| `/faq` | FAQPage | All |
| `/guides` | Hub | — |
| `/experts` | E-E-A-T | — |
| `/glossary` | Reference | All |
| `/contact` | Conversion | — |
| `/thank-you` | Utility (noindex) | — |
| `/privacy` | Legal (noindex) | — |
| `/terms` | Legal (noindex) | — |

### `/fraud-types/[slug]` (×8)

| Slug | Hub |
|------|-----|
| `corporate-fraud` | 1, 7 |
| `investment-fraud-ponzi` | 7 |
| `bribery-corruption` | 5 |
| `money-laundering-aml` | 5 |
| `crypto-fraud-digital-assets` | 4 |
| `tax-fraud-hmrc` | 5 (HMRC / whistleblower GEO) |
| `procurement-fraud-public-sector` | 7 |
| `financial-statement-fraud` | 1, 7 |

### `/case-types/[slug]` (×10)

| Slug | Hub |
|------|-----|
| `sfo-fraud-investigation` | 1 |
| `poca-confiscation-defence` | 2 |
| `civil-fraud-recovery-proceedings` | 3 |
| `unexplained-wealth-orders` | 3 |
| `deferred-prosecution-agreement` | 1 |
| `fca-enforcement-investigation` | 5 |
| `hmrc-fraud-investigation` | 5 |
| `private-prosecution-fraud` | 3 |
| `money-laundering-proceedings` | 5 |
| `corporate-internal-investigation` | 6 |

### `/guides/[slug]` (×6)

| Slug | Hub |
|------|-----|
| `sfo-enforcement-update-2025` | 1 |
| `poca-confiscation-guide` | 2 |
| `civil-fraud-recovery-forensic-guide` | 3 |
| `dpa-financial-quantification-guide` | 1 |
| `crypto-fraud-forensic-guide` | 4 |
| `internal-investigation-lpp-guide` | 6 |

---

## 11. Technical SEO standards

| Requirement | Implementation |
|-------------|----------------|
| Rendering | Static generation (SSG) via Next.js App Router |
| Metadata | `export const metadata` per route; unique title + description |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:image` (1200×630) |
| Images | `next/image` with `sizes`; descriptive `alt` on informational images |
| Performance | LCP &lt; 2.5s mobile; minimal client JS on content pages |
| Mobile | 44px touch targets; no horizontal scroll 320px+ |
| URLs | Lowercase, hyphenated, no trailing slash inconsistency |
| 404 | Custom `not-found.tsx`; return HTTP 404 |
| Internal search | Optional WebSite `SearchAction` (site: query or `/faq`) |

### Indexation policy

| Include in sitemap | Exclude from sitemap |
|--------------------|----------------------|
| All hubs and leaf content pages | `/contact` |
| `/services`, `/experts` | `/thank-you`, `/privacy`, `/terms` |

---

## 12. Sitemap priorities

| URL pattern | Priority | changefreq |
|-------------|----------|------------|
| `/` | 1.0 | weekly |
| `/services` | 0.95 | monthly |
| `/fraud-forensic-accounting-explained` | 0.95 | monthly |
| `/who-we-help` | 0.93 | monthly |
| `/who-we-help/*` | 0.92 | monthly |
| `/fraud-types`, `/case-types` | 0.92 | monthly |
| `/what-is-a-fraud-forensic-accountant` | 0.90 | monthly |
| `/fraud-types/[slug]` | 0.90 | monthly |
| `/qualifications`, `/how-to-instruct`, `/fees` | 0.88 | monthly |
| `/case-types/[slug]` | 0.88 | monthly |
| `/faq` | 0.87 | monthly |
| `/guides` | 0.87 | weekly |
| `/guides/sfo-enforcement-update-2025` | 0.85 | weekly (during active SFO news cycle) |
| `/guides/[other]` | 0.80 | monthly |
| `/experts` | 0.80 | monthly |
| `/glossary` | 0.75 | monthly |

---

## 13. Measurement and KPIs

### Primary KPIs (90-day post-launch)

| Metric | Target | Tool |
|--------|--------|------|
| Non-branded impressions | Growth week-on-week for Tier 1 keywords | Search Console |
| Average position | Top 20 → Top 10 for “fraud forensic accountant UK” | Search Console |
| Organic clicks to `/contact` | ≥5% of organic sessions | GA4 |
| Form submissions | Baseline then +20% MoM | Formspree + GA4 event |
| Indexed pages | 45+ indexable URLs indexed | Search Console |

### Secondary KPIs

- Rich result impressions (FAQ, Article)
- Referring domains from §6 directories and publications
- Engagement time on `/fraud-forensic-accounting-explained` (GEO proxy)
- Bounce rate on audience pages &lt; 60%

### Reporting cadence

| Frequency | Activity |
|-----------|----------|
| Weekly | SFO/FCA news check; update enforcement guide if needed |
| Monthly | Competitor crawl (§7); keyword position export; content gap review |
| Quarterly | Refresh stats table on homepage; glossary audit; internal link audit |

---

## Document control

| Version | Date | Author | Notes |
|---------|------|--------|-------|
| 1.0 | 2026-06-02 | SEO planning agent | Initial architecture per site build spec |

**Related implementation:** Next.js App Router routes, `JsonLd` components, `sitemap.ts`, `middleware.ts` (apex redirect), root `layout.tsx` (hreflang, `lang`).

When routes or slugs change, update §2, §10, and §4 in the same PR as code changes.
