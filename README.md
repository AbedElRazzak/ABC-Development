# ABC Development - Next.js Site

A multi-route, Apple-styled rebuild of the ABC Development site, positioning
Commerce OS as the flagship platform alongside custom websites, WordPress,
Shopify, app development, backend development, CMS, payment gateway
integrations, data migration, and hosting.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Environment

Create `.env.local` from `.env.example` and set:

```bash
BREVO_API_KEY=xkeysib-your_api_key_here
BREVO_SENDER_EMAIL=hello@yourdomain.com
BREVO_SENDER_NAME=ABC Development
CONTACT_TO_EMAIL=abc.development.lb@outlook.com
```

`CONTACT_TO_EMAIL` already defaults to `abc.development.lb@outlook.com`.

## Routes

- `/` - home, with the Commerce OS hub diagram and a services preview
- `/services` - full services index
- `/services/[slug]` - one detail page per service (see `lib/services-data.ts`)
- `/about`
- `/contact` - contact form that sends directly through the Brevo API route

## Structure

- `lib/services-data.ts` - single source of truth for every service (name,
  capabilities, process steps, tech stack). Add a new service here and a page
  is generated automatically via `generateStaticParams`.
- `components/` - shared UI: nav, footer, hero, hub diagram, cards, icons.
- `app/globals.css` - design tokens (light/dark CSS variables) shared across
  Tailwind and hand-written CSS.

## Notes

- Add `BREVO_API_KEY` and `BREVO_SENDER_EMAIL` to `.env.local` before testing
  contact form delivery. The sender email must be verified in Brevo.
- Dark mode persists via `localStorage` and applies before hydration (no
  flash) via the inline script in `app/layout.tsx`.
- All icons are hand-drawn inline SVGs in `components/icons.tsx` - no icon
  package dependency.
- Update the phone number, email, and social links in `components/Navbar.tsx`,
  `components/Footer.tsx`, and `app/contact/page.tsx`.
