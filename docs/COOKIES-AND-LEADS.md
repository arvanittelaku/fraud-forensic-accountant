# Cookie consent & lead capture

## Cookie consent

- Provider: `src/components/cookies/CookieConsentProvider.tsx`
- Storage: `localStorage` key `ffa_cookie_consent_v1`, 12-month expiry
- Google Consent Mode v2 defaults to **denied** in `layout.tsx` before any tag loads
- Tracking scripts load only after consent via `TrackingScripts.tsx`

### Public env vars (optional)

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=
NEXT_PUBLIC_HOTJAR_ID=
```

### User actions

- **Accept All** / **Reject Non-Essential** / **Customize Preferences**
- **Cookie Settings** in the footer reopens the modal anytime

Policy: `/cookies`

---

## Contact form & leads

### Flow

1. User submits `/contact` form
2. Browser `POST /api/submit-lead` (JSON)
3. Server appends a row to Google Sheets (if configured)
4. Server `POST`s to `Lead_notification_url` webhook with:

| Key | Value |
|-----|--------|
| Full Name | `fullName` |
| Email | `email` |
| Phone Number | `phone` |
| Brand name | `Fraud Forensic Accountant` |

### Environment variables (server-side)

```
Lead_notification_url=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=
GOOGLE_SHEET_TAB_NAME=Sheet16
```

Copy `.env.example` to `.env.local` (local) or set in Netlify/Vercel dashboard.

**Never commit real keys to Git.**

### Google Sheet headers (row 1)

`Timestamp | Brand | Full Name | Email | Phone | Organisation | Role | Case Category | Fraud Type | Fraud Value | Urgent | Message | Company Email`

Share the spreadsheet with the service account email as **Editor**.

### Netlify

- `netlify/functions/submit-lead.js` — webhook-only fallback
- With `@netlify/plugin-nextjs`, use the Next.js API route for Sheets + webhook

### Company email

Displayed on the contact form and used in sheet column: `info@fraudforensicaccountant.com`
