import Link from "next/link";
import type { InternalLink } from "@/lib/seo/internal-links";

export function InternalLinkGrid({
  title = "Related pages",
  links,
  columns = 2,
  className = "",
}: {
  title?: string;
  links: InternalLink[];
  columns?: 1 | 2 | 3;
  className?: string;
}) {
  const colClass =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 1
        ? "grid-cols-1"
        : "sm:grid-cols-2";

  return (
    <nav aria-label={title} className={`mt-10 border-t border-border pt-8 ${className}`}>
      <h2 className="!mt-0 text-xl font-bold text-heading">{title}</h2>
      <ul className={`mt-4 grid gap-2 ${colClass}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex min-h-[44px] items-center rounded-[4px] border border-border px-3 py-2 text-sm text-body transition hover:border-indigo-accent/40 hover:text-indigo-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
