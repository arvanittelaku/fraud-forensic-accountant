import { services } from "./services";
import { fraudTypes } from "./fraud-types";
import { caseTypes } from "./case-types";

export const serviceNavLinks = services.map((s) => ({
  href: `/services/${s.id}`,
  label: s.title,
}));

export const fraudTypeNavLinks = fraudTypes.map((f) => ({
  href: `/fraud-types/${f.slug}`,
  label: f.title,
}));

export const caseTypeNavLinks = caseTypes.map((c) => ({
  href: `/case-types/${c.slug}`,
  label: c.title,
}));

export const resourcesNavLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];
