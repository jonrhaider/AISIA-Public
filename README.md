# AISIA — Public Marketing Website

The public-facing site for **AISIA** — a life operating system with eight AI experts and a living canvas that fills itself from natural conversation.

Sibling of the `prototype-2/` app. Same brand, same tokens, same fonts. Different job: introduce visitors to the concept and convert them to a free trial in the AISIA app.

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

### Home (`/`)

1. **Nav** — brand mark, section anchors, "Start free trial" CTA.
2. **Hero** — headline promise, sub-copy, animated eight-domain orbital, trial CTA.
3. **How it works** — Reflect → Extract → Canvas pipeline, then a chat + canvas mock.
4. **Domains** — all 8 life domains in an infinite carousel with per-domain accent colors.
5. **Pricing** — free trial, monthly household, founding annual tiers.
6. **Final CTA** — trial and founding pricing re-prompt with aurora wash.
7. **Footer** — brand mark, link columns, privacy note.

### About (`/about`)

Philosophy, concept, guided threads, features, FAQ, and final CTA.

## Trial signup behavior

All conversion CTAs link to the AISIA app subscription flow via `subscriptionUrl()` in `src/lib/links.ts`:

```
{VITE_APP_URL}/subscription?subscribe=1[&plan=monthly|yearly_founding]
```

The marketing site does not capture emails or process payments — trial signup happens in the app. Set `VITE_APP_URL` in production (e.g. `https://app.aisia.io`) so CTAs do not default to `http://localhost:5180`.

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
│   │   └── CanvasPreview.tsx           # mock bento canvas
│   ├── sections/                       # one file per top-level page section
│   ├── data/domains.ts                 # mirror of prototype-2/src/data/lifeAreas.ts
│   └── lib/links.ts                    # app subscription URL helper
├── index.html                          # meta tags + font <link>
├── package.json
├── tailwind.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── vite.config.ts
```

## Assumptions & next steps

These assumptions were made during the deliberate-strategy build and are the fastest things to revisit if you want to course-correct:

- **Trial CTAs link to the app.** Set `VITE_APP_URL` in production so CTAs point to the real app subscription page.
- **Pricing is live checkout in the app.** The marketing site describes tiers; billing happens at `/subscription` in the AISIA app.
- **No blog, docs, or `/features`, `/pricing` sub-pages** — a single-page narrative converts better pre-launch. Split into routes when you have content that justifies it.
- **No analytics, no cookie banner, no third-party trackers** by design. Add if/when you decide you need them.

## Related

- **App:** `../prototype-2/` — the actual AISIA v2 prototype.
- **Strategy:** `.cursor/strategy/STRATEGY.md` — the full deliberate-strategy brief that produced this site.
