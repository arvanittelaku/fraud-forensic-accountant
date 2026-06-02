import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BottomCTA } from "@/components/BottomCTA";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="The page you are looking for does not exist, has been moved, or the URL may be incorrect."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "404" }]}
      />
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-7xl font-bold tracking-tight text-indigo-accent" aria-hidden="true">
            404
          </p>
          <p className="mt-4 text-lg text-body">
            Use the links below to find fraud forensic accounting resources, or return to the homepage.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <Link
              href="/services"
              className="flex min-h-[44px] items-center justify-center rounded-[8px] border border-border bg-white px-4 py-3 text-sm font-medium text-heading shadow-sm hover:border-indigo-accent/30"
            >
              Services
            </Link>
            <Link
              href="/fraud-types"
              className="flex min-h-[44px] items-center justify-center rounded-[8px] border border-border bg-white px-4 py-3 text-sm font-medium text-heading shadow-sm hover:border-indigo-accent/30"
            >
              Fraud Types
            </Link>
            <Link
              href="/case-types"
              className="flex min-h-[44px] items-center justify-center rounded-[8px] border border-border bg-white px-4 py-3 text-sm font-medium text-heading shadow-sm hover:border-indigo-accent/30"
            >
              Case Types
            </Link>
            <Link
              href="/who-we-help"
              className="flex min-h-[44px] items-center justify-center rounded-[8px] border border-border bg-white px-4 py-3 text-sm font-medium text-heading shadow-sm hover:border-indigo-accent/30"
            >
              Who We Help
            </Link>
            <Link
              href="/guides"
              className="flex min-h-[44px] items-center justify-center rounded-[8px] border border-border bg-white px-4 py-3 text-sm font-medium text-heading shadow-sm hover:border-indigo-accent/30 sm:col-span-2"
            >
              Guides & Resources
            </Link>
          </div>
          <Link
            href="/"
            className="mt-10 inline-flex min-h-[44px] items-center rounded-[4px] bg-indigo-accent px-8 py-3 font-semibold text-white hover:bg-indigo-accent/90"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
      <BottomCTA buttonText="Contact Us" />
    </>
  );
}
