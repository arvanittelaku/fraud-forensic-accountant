/**
 * Third-party tracking IDs from public env vars.
 * Scripts are only injected after consent via TrackingScripts.tsx.
 */

export type TrackingScriptId =
  | "google-analytics"
  | "google-tag-manager"
  | "meta-pixel"
  | "linkedin-insight"
  | "hotjar";

export type TrackingScriptConfig = {
  id: TrackingScriptId;
  category: "analytics" | "marketing" | "preferences";
  /** Returns inline script body or null if env not configured */
  getInlineInit?: () => string | null;
  getExternalSrc?: () => string | null;
};

export const TRACKING_CONFIG: TrackingScriptConfig[] = [
  {
    id: "google-analytics",
    category: "analytics",
    getExternalSrc: () => {
      const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      return id ? `https://www.googletagmanager.com/gtag/js?id=${id}` : null;
    },
    getInlineInit: () => {
      const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (!id) return null;
      return `
        gtag('js', new Date());
        gtag('config', '${id}', { anonymize_ip: true });
      `.trim();
    },
  },
  {
    id: "google-tag-manager",
    category: "analytics",
    getInlineInit: () => {
      const id = process.env.NEXT_PUBLIC_GTM_ID;
      if (!id) return null;
      return `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${id}');
      `.trim();
    },
  },
  {
    id: "meta-pixel",
    category: "marketing",
    getInlineInit: () => {
      const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
      if (!id) return null;
      return `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${id}');
        fbq('track', 'PageView');
      `.trim();
    },
  },
  {
    id: "linkedin-insight",
    category: "marketing",
    getInlineInit: () => {
      const id = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
      if (!id) return null;
      return `
        _linkedin_partner_id = "${id}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
        })(window.lintrk);
      `.trim();
    },
  },
  {
    id: "hotjar",
    category: "analytics",
    getInlineInit: () => {
      const id = process.env.NEXT_PUBLIC_HOTJAR_ID;
      if (!id) return null;
      return `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${id},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `.trim();
    },
  },
];

export function getScriptsForChoices(
  choices: { analytics: boolean; marketing: boolean; preferences: boolean }
): TrackingScriptConfig[] {
  return TRACKING_CONFIG.filter((script) => {
    if (script.category === "analytics" && choices.analytics) return true;
    if (script.category === "marketing" && choices.marketing) return true;
    if (script.category === "preferences" && choices.preferences) return true;
    return false;
  });
}
