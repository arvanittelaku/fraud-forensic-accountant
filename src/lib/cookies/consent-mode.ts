/**
 * Google Consent Mode v2 — updates gtag when user changes preferences.
 * Default denied state is set before any Google script loads.
 */

import type { ConsentChoices } from "./types";

type GtagConsentParams = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  functionality_storage: "granted" | "denied";
  personalization_storage: "granted" | "denied";
};

function choicesToGtagConsent(choices: ConsentChoices): GtagConsentParams {
  const analytics = choices.analytics ? "granted" : "denied";
  const marketing = choices.marketing ? "granted" : "denied";
  const preferences = choices.preferences ? "granted" : "denied";

  return {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    functionality_storage: preferences,
    personalization_storage: preferences,
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Call once before loading Google tags (inline in layout head). */
export function getDefaultConsentInlineScript(): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied',
      'wait_for_update': 500
    });
  `.trim();
}

/** Update consent when user accepts/rejects/customizes (client only). */
export function applyGoogleConsentMode(choices: ConsentChoices): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", choicesToGtagConsent(choices));
}
