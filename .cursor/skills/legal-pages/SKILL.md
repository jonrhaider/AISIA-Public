---
name: legal-pages
description: >-
  Author and edit AISIA marketing legal pages (privacy, terms, security).
  Load when creating or updating src/pages/*Legal*, src/content/*, LegalPage,
  or footer Legal links.
---

# Legal Pages (AISIA Marketing Site)

## When to use

- Adding or editing `/privacy`, `/terms`, `/security`, or other legal routes
- Updating footer Legal links
- Changing data practices that affect public copy (waitlist, fonts, analytics, hosting)

## Entity facts (do not invent)

- **Legal entity:** HaiBuilt Inc
- **Address:** 2108 N ST #4268, Sacramento, CA 95816, USA
- **Privacy contact:** aisia.io@haibuilt.com
- **Audience:** US emphasis
- **Hosting:** Cloudflare Pages
- **Fonts:** Self-hosted via `@fontsource/*` — no Google Fonts CDN
- **No 18+ statement** required on marketing legal pages

## Voice

- Plain language, confident, honest — same family as `marketing-landing`, not dense legalese
- Short paragraphs; numbered sections for scanability
- Say what you do **and** what you do not do
- Never contradict footer tagline ("Your data is yours · No trackers on this site") or waitlist microcopy

## Required structure

Every legal document in `src/content/` exports a `LegalDocument`:

- `title`, `lastUpdated` (human date), `intro`
- Optional `disclaimer` when draft awaits counsel review
- `sections[]` with `id`, `title`, `paragraphs`, optional `bullets`

Render via `LegalPage` — do not duplicate layout per page.

## Scope boundaries

| Page | Covers |
|------|--------|
| Privacy | Marketing site data: waitlist localStorage, Cloudflare logs, email contact |
| Terms | Site use, disclaimers, acceptable use, IP, liability, governing law |
| Security | How we protect the marketing site — HTTPS, hosting, minimization, vulnerability reporting |

**Marketing site ≠ AISIA app.** If the app collects accounts or conversation data, say so and point to a separate policy when it exists.

## Claims alignment checklist (run before ship)

- [ ] Waitlist behavior matches `src/lib/waitlist.ts` (localStorage today)
- [ ] No analytics/tracker claims if none in `package.json` dependencies
- [ ] No "no third parties" if any third-party script or CDN is added
- [ ] Fonts loaded only from `@fontsource/*` (see `src/lib/fonts.ts`)
- [ ] Footer Legal `href` values are real routes, not `#` anchors
- [ ] `lastUpdated` bumped on material edits
- [ ] Counsel review noted if policy text changed materially

## Validation

```bash
node scripts/validate-legal-links.mjs
npm run validate
```

## Anti-patterns

- Copy-paste policies claiming cookies/analytics the site does not use
- Placeholder `#privacy` links in production footer
- Mixing app AI-processing details into marketing-site policy before the app ships
- Agent-drafted text shipped without `disclaimer` and counsel review flag
