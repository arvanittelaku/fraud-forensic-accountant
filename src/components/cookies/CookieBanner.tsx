"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type CookieBannerProps = {
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onCustomize: () => void;
};

export function CookieBanner({
  onAcceptAll,
  onRejectNonEssential,
  onCustomize,
}: CookieBannerProps) {
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    acceptRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="true"
      className="fixed inset-x-0 bottom-0 z-[100] animate-[slideUp_0.35s_ease-out] border-t border-white/10 bg-charcoal px-4 py-5 shadow-[0_-8px_32px_rgba(0,0,0,0.25)] sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="flex-1">
          <h2 id="cookie-banner-title" className="text-lg font-bold text-white">
            Your privacy matters
          </h2>
          <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/80">
            We use cookies to run this site securely, understand how it is used, and improve our
            services. You can accept all cookies, reject non-essential cookies, or customise your
            preferences. See our{" "}
            <Link href="/cookies" className="font-medium text-white underline hover:no-underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-white underline hover:no-underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:shrink-0">
          <button
            ref={acceptRef}
            type="button"
            onClick={onAcceptAll}
            className="min-h-[44px] rounded-[4px] bg-indigo-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-accent/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={onRejectNonEssential}
            className="min-h-[44px] rounded-[4px] border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={onCustomize}
            className="min-h-[44px] rounded-[4px] px-5 py-2.5 text-sm font-semibold text-white/90 underline-offset-2 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            Customize Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
