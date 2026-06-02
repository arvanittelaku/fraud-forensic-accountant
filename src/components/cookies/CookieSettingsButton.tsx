"use client";

import { useCookieConsentOptional } from "./CookieConsentProvider";

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  const consent = useCookieConsentOptional();

  if (!consent) return null;

  return (
    <button
      type="button"
      onClick={consent.openPreferences}
      className={`text-left hover:text-white focus:outline-none focus:underline ${className}`}
    >
      Cookie Settings
    </button>
  );
}
