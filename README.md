# AISIA — Public Marketing Website

The public-facing site for **AISIA** — a life operating system with eight AI experts and a living canvas that fills itself from natural conversation.

Sibling of the `prototype-2/` app. Same brand, same tokens, same fonts. Different job: introduce visitors to the concept and convert them onto the waitlist.

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:5180](http://localhost:5180).

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run validate` | Run the build gate (used by the deliberate-strategy workflow) |

## What's on the page

One long single-page narrative, in this order:

1. **Nav** — brand mark, section anchors, "Sign in", "Join waitlist" CTA.
2. **Hero** — headline promise, sub-copy, animated eight-domain orbital, waitlist email form.
3. **Concept** — instead-of vs AISIA contrast, then the three-beat pitch (chat → extract → canvas).
4. **Domains** — all 8 life domains rendered with per-domain accent colors and expert titles.
5. **How it works** — the pipeline strip, then a live-looking chat + canvas side-by-side mock.
6. **Features** — six distinguishing capabilities including Living Canvas, Life Balance, Attention scoring, Cross-domain conflicts, Weekly Review, and "momentum, not streaks".
7. **Meet the experts** — rotating expert quote card driven by `EXPERT_GREETINGS`; click to preview any of the eight.
8. **Pricing** — three tiers: Explorer (free), Complete ($14/mo), Founding ($99/yr).
9. **FAQ** — five items covering the usual questions.
10. **Final CTA** — one big waitlist re-prompt with aurora wash.
11. **Footer** — brand mark, three link columns, privacy note.

## Waitlist behavior

The email form is real UI, but there is no backend. Submissions are stored in `localStorage["aisia_waitlist"]` as `[{ email, ts }]`. The success state shows the current email and lets you reset with a "Change" link.

To wire a real newsletter provider, replace the `saveEntry` call inside `src/components/WaitlistForm.tsx` with your API call (Resend, Loops, ConvertKit, etc.).

## Stack

- **Vite 6** + **React 18** + **TypeScript** (matches `prototype-2/`)
- **Tailwind CSS 3** with the AISIA tokens (`void`, `aurora.*`) and `liquid-glass` utilities
- **Framer Motion 11** for entrances, orbits, pipeline, expert rotation
- **Lucide React** for icons

Everything is dark-only. There is no theme toggle on the marketing site — the app has one; the site does not.

## Brand parity

Colors, fonts, glass utilities, and the favicon are ported verbatim from `prototype-2/` so the handoff from marketing → app feels like the same product. See `.cursor/rules/website-brand.mdc` for the exact tokens; a divergence there is a brand violation.

Copy for domain names, expert titles, and greetings lives in `src/data/domains.ts` — this mirrors `prototype-2/src/data/lifeAreas.ts`. If either file changes, both must change.

## Deploy

The site is a fully static build. `npm run build` produces `dist/` — drop it on any static host.

Recommended: **Cloudflare Pages** with the following build config:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

Also works on Vercel, Netlify, or a plain S3 + CloudFront setup.

## Structure

```
website/
├── .cursor/
│   ├── rules/website-brand.mdc         # brand-token enforcement rule
│   ├── skills/marketing-landing/       # section spec + copy voice skill
│   └── strategy/STRATEGY.md            # deliberate-strategy plan
├── public/
│   └── favicon.svg                     # canonical AISIA orbital mark
├── scripts/
│   └── validate-build.mjs              # build gate for the workflow
├── src/
│   ├── App.tsx                         # page composition
│   ├── main.tsx                        # entry + MotionConfig
│   ├── index.css                       # tokens + glass utilities
│   ├── components/
│   │   ├── ui/                         # AuroraMesh, LiquidPanel, GlowButton, BrandMark, Section
│   │   ├── OrbitalHero.tsx             # animated 8-domain orbit
│   │   ├── ChatPreview.tsx             # mock chat panel
│   │   ├── CanvasPreview.tsx           # mock bento canvas
│   │   └── WaitlistForm.tsx            # localStorage waitlist form
│   ├── sections/                       # one file per top-level page section
│   ├── data/domains.ts                 # mirror of prototype-2/src/data/lifeAreas.ts
│   └── lib/waitlist.ts                 # localStorage adapter
├── index.html                          # meta tags + font <link>
├── package.json
├── tailwind.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── vite.config.ts
```

## Assumptions & next steps

These assumptions were made during the deliberate-strategy build and are the fastest things to revisit if you want to course-correct:

- **Waitlist is local-only.** Wire a newsletter provider when you're ready to actually capture emails.
- **Sign-in link points to `/app`.** Repoint to your real app URL (Supabase auth, etc.).
- **Pricing is a launch plan, not live checkout.** Attach Stripe / Paddle when subscriptions open.
- **No blog, docs, or `/features`, `/pricing` sub-pages** — a single-page narrative converts better pre-launch. Split into routes when you have content that justifies it.
- **No analytics, no cookie banner, no third-party trackers** by design. Add if/when you decide you need them.

## Related

- **App:** `../prototype-2/` — the actual AISIA v2 prototype.
- **Strategy:** `.cursor/strategy/STRATEGY.md` — the full deliberate-strategy brief that produced this site.
