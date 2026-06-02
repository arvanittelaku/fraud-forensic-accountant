# Fraud Forensic Accountant

Lead-generation website for [fraudforensicaccountant.com](https://www.fraudforensicaccountant.com).

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Static generation (no custom backend)
- Formspree contact form

## Setup

```bash
npm install
cp .env.example .env.local
# Copy .env.example to .env.local and set Google Sheets + webhook vars
npm run dev
```

## Build

```bash
npm run build
npm start
```

`npm run build` runs `seo:generate` first to refresh `public/sitemap.xml` and `public/robots.txt`.

## SEO files

```bash
npm run seo:generate   # Regenerate sitemap.xml + robots.txt
npm run seo:verify     # Ensure sitemap matches URL inventory
```

See [docs/SEO-GENERATION.md](docs/SEO-GENERATION.md) for how URL inventory, generation, and CI checks work.

## Environment

See `.env.example` for required variables.
