# Strategy Brief — AISIA Public Marketing Website

## User Target

- **Explicit request:** Review `prototype-2/` to understand AISIA's features, intent, visual style, colors, and logo, then build a public-facing website in `website/` to introduce visitors to the app and convert them to sign-ups.
- **Likely implicit goals:**
  - Above-the-fold "wow" that mirrors the futuristic liquid-glass aesthetic of the app so visitors feel the sophistication instantly.
  - Clearly communicate the novel concept: **eight life domains, each with a dedicated AI expert and a living canvas that populates from natural conversation** — this is unusual and needs a compelling narrative.
  - Show the product working (chat → extract → canvas pipeline) without requiring a live backend.
  - Capture emails via a waitlist form since the app is pre-launch (README says auth/Supabase not yet wired).
  - Convey trustworthiness and seriousness (this handles marriage, finance, family) — not toy-AI energy.
- **Non-goals / avoid:**
  - Real backend, auth, blog CMS, payment processing.
  - Copying every prototype-2 screen verbatim (the site is marketing, not a demo of the app).
  - Generic AI-startup landing tropes (rainbow gradients on white, "Powered by GPT" badges, purple-on-white cliche).
  - Feature-list dumping without a story.
- **Constraints:**
  - Lives under `website/` peer to `prototype-2/` (isolated project).
  - Static build (deployable to Cloudflare Pages / Vercel / Netlify without a server).
  - Brand-consistent with `prototype-2` — same fonts, colors, motion easing, glass motifs so the marketing → app handoff feels seamless.
  - Runs locally with `npm install && npm run dev`; ships with `npm run build`.

---

## Expert Lens

- **Relevant expert role(s):** Senior landing-page conversion designer (Linear / Vercel / Superhuman / Motion / Rewind AI caliber); brand-driven React/motion engineer; SaaS growth copywriter.
- **What they care about most:**
  - **Hierarchy of promise** — hero headline sells the outcome ("Your life, organized by eight experts"), not the tech.
  - **Visual credibility in the first 3 seconds** — the aurora + liquid glass + Syne display type should hit before the user reads any word.
  - **A single primary CTA** repeated at logical checkpoints (hero, after concept, after features, after pricing, footer).
  - **Show, don't tell** — animated mock-ups of the chat → canvas pipeline and the eight-domain orbit.
  - **Trust density** — expert titles, "your data is yours" statements, no dark patterns.
- **Common failure modes:**
  - Marketing site that looks nothing like the app (breaks trust on first login).
  - Overloaded hero with 6 CTAs, product screenshots, and a video that autoplays.
  - Generic three-column feature grid with clip-art icons.
  - Buried pricing that forces "Contact sales".
  - Sluggish scroll-jacked animations that stutter on mid-range laptops.
- **Quality bar:**
  - Opening viewport: aurora mesh + Syne headline + animated eight-domain orbit + single glowing CTA — feels 2026.
  - Every section has a clear job (Concept → How it works → Domains → Features → Pricing → CTA) and no orphan sections.
  - Waitlist email capture works locally (stores to `localStorage` with a success state) — proves the funnel end-to-end.
  - 60 fps scroll on a mid-tier machine; no CLS from web fonts.
- **What the user probably means but did not spell out:**
  - Want a *single-page* narrative (marketing best practice for pre-launch SaaS) rather than a multi-page site.
  - Want the "logo/favicon" to be treated as brand — reuse and enlarge the orbital-dot mark from `prototype-2/public/favicon.svg`.
  - Want a "See the app" link that opens the prototype (dev-only anchor, and a "Coming soon" once shipped).

---

## Alignment Critique

- **What am I assuming?**
  - Stack: **Vite + React 18 + TypeScript + Tailwind 3 + Framer Motion + Lucide** — matches `prototype-2` so tokens, glass utilities, and mental model port directly.
  - Single-page site with anchor sections and one waitlist form (no backend); "Sign in" nav link goes to the app URL (placeholder `/app`).
  - Framing = **Early Access / Join the Waitlist** (prototype-2 README lists auth as "Next steps not in this slice").
  - Pricing shown as *concept* tiers (Free, Pro, Founding Member) with waitlist CTA rather than checkout.
- **Which inferences are directly requested vs strongly implied vs invented?**
  - **Directly requested:** Review `prototype-2`, reflect its visual style, produce a public site under `website/`, aim for sign-ups.
  - **Strongly implied:** Single-page narrative; brand-consistent stack; waitlist funnel; deployable static build.
  - **Invented (deferred):** Real newsletter provider, blog, docs site, i18n, dark/light toggle (site is dark-only to match the brand's default), video hero, testimonials (we have none yet — will be **omitted** rather than faked).
- **What would be overbuilding?**
  - Full CMS, ISR, MDX blog, analytics dashboards, A/B testing framework.
  - Multi-page routing for `/pricing`, `/features`, `/blog` — a single-page anchor site converts better at pre-launch.
  - 3D WebGL hero — a well-tuned CSS/SVG orbit and Framer Motion aurora hit the wow bar at 1% of the maintenance cost.
- **What clarification is necessary before proceeding?**
  - None strictly required. Proceeding with the assumptions above and calling them out in the delivered README so the user can course-correct with one message.

---

## Capability Plan

- **Skills to create** (`.cursor/skills/<name>/SKILL.md`) — **minimum 1 required:**
  - [x] `marketing-landing` — captures the narrative flow, copywriting voice, section spec, and brand-consistency check used when authoring or editing any page section.

- **Rules to create** (`.cursor/rules/<name>.mdc`):
  - [x] `website-brand.mdc` — pins the design tokens (colors, fonts, motion easing, glass utilities, favicon usage) that any marketing component must obey.

- **Scripts to create** (`scripts/*.mjs`):
  - [x] `validate-build.mjs` — runs `vite build` and exits non-zero on failure (Node 6 gate).

- **Existing tools/libraries to reuse:**
  - `prototype-2/public/favicon.svg` (orbital mark) — copied and enlarged as brand mark.
  - Design tokens (`void`, `aurora.cyan/violet/rose/amber`) and utilities (`liquid-glass`, `text-gradient-aurora`, `sync-pulse`, aurora-mesh background) from `prototype-2/tailwind.config.js` and `prototype-2/src/index.css`.
  - Component patterns from `prototype-2/src/components/ui/{LiquidPanel,GlowButton,AuroraMesh}.tsx` and `SyncPipeline.tsx` — reimplemented locally so the site has no dependency on the app project.
  - Copy source: `prototype-2/src/data/lifeAreas.ts` (LIFE_AREAS + EXPERT_GREETINGS) for domain/expert content on the site.
- **Things not worth tooling:**
  - Waitlist form persistence beyond `localStorage`.
  - Icon system beyond Lucide.
  - Custom Tailwind plugin — inline `@layer components` styles are enough.

---

## Toolkit Gate Log

| Planned artifact | Target path | Status | Created? |
|------------------|-------------|--------|----------|
| Skill: marketing-landing | `website/.cursor/skills/marketing-landing/SKILL.md` | created | yes |
| Rule: website-brand | `website/.cursor/rules/website-brand.mdc` | created | yes |
| Script: validate-build | `website/scripts/validate-build.mjs` | created | yes |

**Phase 2 gate:** ≥1 task-specific skill row shows `created` + file exists on disk before Node 1 build. **PASSED.**

---

## Workflow Graph

| Node | Entry condition | Build actions | Success criteria | Validation method | On fail → | Status |
|------|-----------------|---------------|------------------|-------------------|-----------|--------|
| 0 — Toolkit | Strategy brief done | Create marketing-landing skill, website-brand rule, validate-build script | ≥1 task skill on disk; gate log updated | List paths; confirm files | Fix missing toolkit | passed |
| 1 — Scaffold & Design System | Node 0 passed | `package.json`, Vite/TS/Tailwind config, `index.css` with tokens, `AuroraMesh`, `LiquidPanel`, `GlowButton`, fonts, favicon | `npm install` + `npm run build` pass; page shows aurora+glass shell | `scripts/validate-build.mjs` | Refine (max 3) | passed |
| 2 — Hero + Nav + Waitlist | Node 1 passed | Top nav, hero (headline, sub, orbital animation, waitlist email form, "See the app" link), sticky CTA glimpse | Above-the-fold sells vision; email submit shows success state; no CLS | Build + browser snapshot | Refine (max 3) | passed |
| 3 — Concept + Domains + Experts | Node 2 passed | "Why AISIA" problem/solution; 8 life-domain grid using LIFE_AREAS; expert-lineup section with per-domain accent glow | All 8 domains rendered with correct accent color + expert title | Build + browser | Refine (max 3) | passed |
| 4 — Feature Deep Dives | Node 3 passed | Living Canvas mock (bento preview), Chat→Extract→Canvas animated pipeline, Life Balance / Attention scoring, Cross-domain conflict callout | Each feature has a self-explanatory visual mock, not just text | Build + browser | Refine (max 3) | passed |
| 5 — Pricing + FAQ + Footer | Node 4 passed | 3-tier pricing (Free / Pro / Founding), 5-item FAQ, final CTA band, footer with brand + links | Pricing legible; FAQ collapses; footer echoes brand mark | Build + browser | Refine (max 3) | passed |
| 6 — Validate & Ship | Node 5 passed | Run validate-build; browser walkthrough; write README | `validate-build.mjs` exits 0; README documents run/build/deploy | Script + manual | Refine (max 3) | passed |

**Status values:** `pending` | `in_progress` | `passed` | `deferred` | `blocked`

---

## Refinement Log

### Node 0 — Toolkit

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | Skill, rule, script created on disk | — | — | Pass |

### Node 1 — Scaffold & Design System

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | 142 packages installed; `npm run build` → 324kB JS / 26kB CSS gzipped; aurora + fonts + tokens present | — | — | Pass |

### Node 2 — Hero + Nav + Waitlist

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | Hero renders: Syne headline with aurora-gradient "eight experts", 8-domain orbital core, waitlist email input + gradient submit; sticky nav; mobile menu | — | — | Pass |
| 2 | End-to-end waitlist funnel verified: input → "Sending" spinner → success card w/ email + Change reset link | — | — | Pass |

### Node 3 — Concept + Domains + Experts

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | Concept: "Instead of" vs "AISIA gives you" contrast + 3-tile pipeline preview. Domains grid: all 8 with correct per-domain accents + expert titles + hover glow. Experts: auto-rotating quote card + clickable grid | — | — | Pass |

### Node 4 — Feature Deep Dives

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | Pipeline strip (3 steps w/ arrows) + live-looking Chat/Canvas split mock (Family Coach turns + bento canvas with momentum, weekly-pulse bars, insights, goals, actions, reminders). Features grid: 6 cards including anti-streak stance | — | — | Pass |

### Node 5 — Pricing + FAQ + Footer

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | 3 tiers (Explorer/Complete/Founding) with per-tier accent + "Most popular" chip; FAQ 5-item accordion (first open by default) with expand/collapse; Final CTA aurora-wash panel; footer w/ brand mark + 3 link columns + privacy note | — | — | Pass |

### Node 6 — Validate & Ship

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | `node scripts/validate-build.mjs` → PASS (dist/index.html present); browser walkthrough covered hero → domains → pipeline → pricing → experts → CTA → footer; waitlist funnel verified; README documents scripts, structure, assumptions, deploy | — | — | Pass |

---

## Checkpoint Log

| Checkpoint | Node | What changed | Validated | Open risks | Next |
|------------|------|--------------|-----------|------------|------|
| Start | — | Strategy brief created | — | Assumptions unconfirmed by user | Node 0 — Toolkit |
| Toolkit ready | 0 | Skill + rule + script on disk | file list | — | Node 1 |
| Scaffold shipped | 1 | Vite/TS/Tailwind/Framer/Lucide wired, tokens + fonts + favicon + AuroraMesh present | `npm run build` clean | — | Node 2 |
| Funnel shipped | 2 | Nav (sticky, mobile), Hero (orbit + waitlist), waitlist localStorage adapter | build + browser + form submit | — | Node 3 |
| Concept + Domains + Experts shipped | 3, 3.5 | Concept contrast, 8-domain grid, rotating expert card | build + browser | — | Node 4 |
| Story sections shipped | 4 | Chat/Canvas mocks, pipeline strip, 6-card feature grid | build + browser | — | Node 5 |
| Conversion tail shipped | 5 | Pricing 3 tiers, FAQ accordion, Final CTA, Footer | build + browser | — | Node 6 |
| Ship | 6 | README + validate-build gate | `npm run validate` PASS | Waitlist is local-only; sign-in link is placeholder | — |

---

## Project Done

- [x] Node 0 passed — task skills exist under `.cursor/skills/marketing-landing/`
- [x] All build nodes **Status: passed** (Nodes 1–6)
- [x] Final alignment critique completed (see below)
- [x] Deliverable satisfies explicit request (public site introducing AISIA + waitlist CTA)
- [x] Limitations and next steps documented in `website/README.md`

### Final alignment critique

- **Direct request met:** Reviewed `prototype-2/` (design system, life-areas taxonomy, favicon/orbital mark, expert model, chat→canvas pipeline) and produced a public marketing site under `website/` that reuses the same tokens, fonts, and visual language.
- **Implicit goals met:** Above-the-fold hits the "wow" bar (aurora + Syne headline + animated orbital core); one primary CTA (Join waitlist) is repeated at hero, nav, pricing, and final CTA; three-beat narrative (chat → extract → canvas) is shown with a live-looking mock, not just described; waitlist funnel is real UI end-to-end (`localStorage` mock).
- **Nothing overbuilt:** No blog, no CMS, no auth, no third-party trackers, no cookie banner, no analytics, no light-mode toggle — matches the strategy's "not worth tooling" list.
- **Assumptions to revisit:** Waitlist backend, sign-in `/app` link target, real pricing/checkout wiring, and any future multi-page split — all documented in `README.md` under "Assumptions & next steps".
