"use client";

import Script from "next/script";
import { useMemo } from "react";
import { getScriptsForChoices } from "@/lib/cookies/tracking-config";
import type { ConsentChoices } from "@/lib/cookies/types";

/**
 * Loads third-party scripts only after consent.
 * Necessary cookies do not load external trackers.
 */
export function TrackingScripts({
  choices,
  hasConsented,
}: {
  choices: ConsentChoices;
  hasConsented: boolean;
}) {
  const scripts = useMemo(() => {
    if (!hasConsented) return [];
    return getScriptsForChoices({
      analytics: choices.analytics,
      marketing: choices.marketing,
      preferences: choices.preferences,
    });
  }, [hasConsented, choices.analytics, choices.marketing, choices.preferences]);

  if (scripts.length === 0) return null;

  return (
    <>
      {scripts.map((script) => {
        const src = script.getExternalSrc?.();
        const inline = script.getInlineInit?.();
        if (!src && !inline) return null;

        return (
          <span key={script.id}>
            {src && (
              <Script
                id={`tracking-${script.id}-src`}
                src={src}
                strategy="afterInteractive"
              />
            )}
            {inline && (
              <Script
                id={`tracking-${script.id}-init`}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: inline }}
              />
            )}
          </span>
        );
      })}
    </>
  );
}
