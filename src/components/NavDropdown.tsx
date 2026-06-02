"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type NavLink = { href: string; label: string };

export function NavDropdown({
  label,
  href,
  links,
  onNavigate,
}: {
  label: string;
  href?: string;
  links: NavLink[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center">
        {href ? (
          <Link
            href={href}
            className="rounded-l-[4px] px-2 py-2 text-sm text-body hover:bg-section-alt hover:text-charcoal"
          >
            {label}
          </Link>
        ) : (
          <span className="px-2 py-2 text-sm text-body">{label}</span>
        )}
        <button
          type="button"
          className={`min-h-[44px] min-w-[36px] rounded-r-[4px] px-1 py-2 text-body hover:bg-section-alt hover:text-charcoal ${!href ? "rounded-l-[4px] pl-2" : ""}`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`${label} menu`}
          onClick={() => setOpen(!open)}
        >
          <svg
            className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 max-h-[min(70vh,24rem)] min-w-[16rem] overflow-y-auto rounded-[8px] border border-border bg-white py-2 shadow-[var(--shadow-card)]"
        >
          {links.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-body hover:bg-section-alt hover:text-charcoal"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function MobileNavGroup({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: NavLink[];
  onNavigate?: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      <button
        type="button"
        className="flex min-h-[44px] w-full items-center justify-between rounded-[4px] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-charcoal hover:bg-section-alt"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
        <svg
          className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <ul className="mt-1 space-y-1 pl-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-[44px] items-center rounded-[4px] px-3 py-2 text-sm text-body hover:bg-section-alt"
                onClick={onNavigate}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
