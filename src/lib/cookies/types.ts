/** Cookie categories aligned with GDPR / ePrivacy practice. */
export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export type ConsentChoices = Record<CookieCategory, boolean>;

export type StoredConsent = {
  version: number;
  choices: ConsentChoices;
  /** ISO timestamp when consent was saved */
  consentedAt: string;
  /** ISO timestamp when consent expires */
  expiresAt: string;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "ffa_cookie_consent_v1";
/** Consent validity: 12 months (GDPR common practice). */
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const DEFAULT_DENIED: ConsentChoices = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL: ConsentChoices = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export const REJECT_NON_ESSENTIAL: ConsentChoices = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export type CookieCategoryMeta = {
  id: CookieCategory;
  title: string;
  description: string;
  required: boolean;
};

export const COOKIE_CATEGORIES: CookieCategoryMeta[] = [
  {
    id: "necessary",
    title: "Necessary Cookies",
    description:
      "Required for the site to function (security, consent storage, form submission). Always active.",
    required: true,
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Help us understand how visitors use the site (e.g. Google Analytics, Hotjar). Data is aggregated where possible.",
    required: false,
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Used to measure ad performance and deliver relevant messaging (e.g. Meta Pixel, LinkedIn Insight Tag).",
    required: false,
  },
  {
    id: "preferences",
    title: "Preferences",
    description: "Remember your choices and improve your experience on return visits.",
    required: false,
  },
];
