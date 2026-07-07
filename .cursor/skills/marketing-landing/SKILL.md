---
description: Author and edit sections of the AISIA public marketing website. Load whenever editing files under website/src, adding a new landing section, adjusting copy, or wiring the waitlist CTA. Enforces narrative flow, tone, section spec, and brand parity with prototype-2.
---

# Marketing Landing — AISIA Public Site

## When to use

- Adding a new section to the landing page or replacing an existing one.
- Rewriting hero, feature, or CTA copy.
- Editing waitlist form UI/UX.
- Reviewing whether a page section is on-brand for AISIA.

## Do not use for

- Editing the actual app in `prototype-2/` (that project has its own skills).
- Backend/newsletter wiring (out of scope; waitlist is local-only).

---

## Site structure (two pages)

### Home (`/`) — promise + conversion

Crisp, focused on value proposition and CTA. Sections in order:

1. **Nav** — Domains, How it works, Pricing, About · Join waitlist
2. **Hero** — organization promise + waitlist
3. **Domains** — eight-domain grid (visual proof); link to About for guided threads
4. **How it works** — Reflect → Extract → Canvas pipeline
5. **Pricing**
6. **Final CTA**

### About (`/about`) — philosophy + depth

1. **About intro** — page header + back link
2. **Reflection** — Why AISIA (palindrome, self-improvement, what it is / is not)
3. **Concept** — The idea (noise vs organized)
4. **Guided threads** (`#guides`) — rotating prompts per domain (moved from home to avoid duplicating Domains grid)
5. **Features** — What makes it work
6. **FAQ** — Questions
7. **Final CTA**

Do **not** duplicate the Domains grid and Guided threads on the same page.

### Messaging pillars (always enforce)

- **Lead with organization** — AISIA helps people stay organized on priorities across eight life domains.
- **Self-improvement through reflection** — reflection is the method; structure makes it stick. Not crisis or spiral framing.
- **AISIA = AI Self Improvement App** — spell out the acronym in Hero and Reflection at least once.
- **Palindrome + flipped S** — deliberate brand story in Reflection; not a heritage logo.
- **Not professional advice** — artifacts and flags for when a human belongs in the loop.
- **Avoid** — "get out of your head," "think out loud," "inner monologue," spiral/mental-health-negative framing, "eight experts," advisory persona titles.

---

## Copy voice

- **Confident, not hyped.** Say what it does, not that it's "revolutionary."
- **Life-domain specific.** Use concrete language ("your marriage," "next month's rent") over abstract ("optimize your life").
- **Second person.** Address the reader as "you"; refer to the product as "AISIA" (all caps) or "your life operating system".
- **Short lines.** Hero sub ≤ ~45 words (acronym + promise). Feature body ≤ 40 words each.
- **No jargon.** Avoid "LLM", "RAG", "prompt engineering" in visible copy — technical readers will infer.
- **Never fake proof.** No testimonials, no logos of companies not using us, no fake counters.

### Approved phrasings

- Hero headline: "Your life, organized across eight domains."
- Eyebrow: "AI Self Improvement App"
- Tagline options: "The AI Self Improvement App." · "A life operating system for guided reflection." · "Reflect. Extract. Stay organized."
- Product noun: "life operating system" (lowercase in prose, Title Case only in headings).
- The pipeline: "Reflect → Extract → Canvas" (with real arrows in text; use `→` glyph, not "->").

---

## Section spec (must satisfy before marking a section done)

Every section on the landing page must satisfy **all four**:

1. **Purpose** — one crisp job (see Narrative flow). If a section is doing two jobs, split or drop.
2. **Visual anchor** — at least one deliberate visual (orbital diagram, bento mock, gradient device, pipeline animation). No text-only walls.
3. **Rhythm** — vertical spacing uses the site's `Section` container (see `src/components/ui/Section.tsx` once created); each section pairs a Syne display heading, IBM Plex Mono eyebrow, and DM Sans body.
4. **CTA continuity** — if the section is >1 viewport tall, it repeats the primary CTA or an anchor to `#waitlist`.

---

## Brand parity (with `prototype-2`)

The marketing site and the app must feel like siblings. Enforce:

- **Colors:** `void #030712` background; aurora accents `cyan #22d3ee`, `violet #a78bfa`, `rose #fb7185`, `amber #fbbf24`; per-domain accents come from `LIFE_AREAS` (do not invent new colors).
- **Fonts:** `Syne` (display), `DM Sans` (body), `IBM Plex Mono` (data/eyebrows/labels). Load once in `index.html` via Google Fonts, same weights as prototype-2.
- **Glass:** `.liquid-glass` and `.liquid-glass-strong` utilities identical to prototype-2's `index.css`.
- **Motion easing:** entrance `[0.22, 1, 0.36, 1]`, duration 300–600 ms UI, 800 ms+ for the pipeline reveal.
- **Favicon / brand mark:** the SVG from `prototype-2/public/favicon.svg` (dark rect, cyan center circle, orbital dots) is the canonical mark. Enlarge (not redraw) for the site's brand mark.

Full details: `.cursor/rules/website-brand.mdc` (auto-attached when editing `src/**`).

---

## Waitlist rules

- Single input: email + "Join waitlist" button. No phone, name, or role.
- Client-side email validation only.
- On submit: store `{ email, ts }` in `localStorage["aisia_waitlist"]` (array), disable form, show success message: "You're on the list. Check your inbox — we'll reach out."
- Provide a subtle reset link in the success state (`Change email`) so multiple submissions during dev don't require devtools.
- No third-party analytics or trackers.

---

## Anti-patterns (do not do)

- Autoplay video hero.
- Pricing "Contact us" or hidden Enterprise tier.
- Testimonial cards with placeholder faces.
- Logo cloud of companies not using AISIA.
- Cookie banner (we don't set tracking cookies).
- Popup email capture on scroll.
- Section headings all-caps ALL THE WAY DOWN (only eyebrow labels are uppercase mono).
- Emoji in headings or body copy.
- Purple-on-white "AI" gradient clichés.

---

## Files owned by this skill

- `src/App.tsx` — page composition.
- `src/sections/*.tsx` — one file per section from the Narrative flow.
- `src/components/ui/*.tsx` — reusable glass/aurora/button/section primitives.
- `src/data/domains.ts` — mirrors `prototype-2/src/data/lifeAreas.ts`; `GUIDE_PROMPTS` and `guideLabel` (reflection-first, not advisory).

---

## Ready-to-use section checklist

Before marking a section "done" during Node 2–5:

- [ ] Purpose is one sentence and matches the Narrative flow slot.
- [ ] Has a visual anchor (not text-only).
- [ ] Uses `Section` container for consistent padding.
- [ ] Heading in Syne, eyebrow in IBM Plex Mono uppercase, body in DM Sans.
- [ ] Any accent colors come from tokens or `LIFE_AREAS`.
- [ ] Motion respects `prefers-reduced-motion` (Framer Motion respects this by default when using `MotionConfig reducedMotion="user"`).
- [ ] Waitlist anchor `#waitlist` is reachable within one section click.
