# Strategy Brief — Privacy Policy (AISIA Public Website)

<!-- Deliberate-strategy Phase 0–1 for: research + considerations before building legal pages.
     Product code starts only after Phase 2 toolkit gate passes. -->

## User Target

- **Explicit request:** Use deliberate-strategy to identify all research and considerations needed to build a strong privacy policy into the front-end webpage.
- **Likely implicit goals:**
  - Replace dead footer links (`#privacy`, `#terms`, `#security`) with real, trustworthy legal content.
  - Align marketing copy ("Your data is yours · No trackers on this site") with accurate legal disclosure.
  - Establish a privacy posture that matches AISIA's sensitive product positioning (marriage, money, health, family) even though the marketing site only collects a waitlist email today.
  - Create a foundation that survives waitlist-backend wiring, analytics decisions, and eventual app launch without a full rewrite.
  - Ship readable, on-brand legal pages — not generic boilerplate that contradicts the site's voice.
- **Non-goals / avoid (unless user later requests):**
  - Providing legal advice or drafting final binding language without qualified legal review.
  - Building a cookie-consent CMP before there is anything that requires consent.
  - Scope creep into full Terms of Service, Security whitepaper, or app-product privacy policy in the first slice (may cross-link and defer).
  - Analytics, newsletter provider integration, or backend waitlist — research only for how they affect policy text.
- **Constraints:**
  - Static Vite + React site at repo root (`src/`, React Router: `/`, `/about`).
  - Current data practices documented in README: waitlist → `localStorage["aisia_waitlist"]`; no analytics; no cookie banner by design.
  - Brand: dark-only marketing site per `website-brand.mdc` and `marketing-landing` skill.
  - Footer already exposes Legal column — implementation must wire real routes.

---

## Expert Lens

- **Relevant expert role(s):** Privacy-minded product counsel (startup SaaS); technical privacy engineer (data-flow mapping); conversion-focused UX writer (legal pages people actually read).
- **What they care about most:**
  1. **Truth in advertising** — every public claim (footer tagline, waitlist microcopy, FAQ) must match disclosed practices.
  2. **Scope clarity** — marketing site policy vs future AISIA app policy; what this page covers and what it does not.
  3. **Data minimization** — describe only what is collected; avoid over-collecting to fill a template.
  4. **Jurisdiction fit** — GDPR/UK GDPR, CCPA/CPRA, CAN-SPAM, COPPA as applicable to actual users and entity.
  5. **Maintainability** — `last updated` date, version notes, checklist when practices change (fonts, analytics, waitlist API).
- **Common failure modes:**
  - Copy-paste privacy policy that claims cookies/analytics the site does not use.
  - Policy says "we don't share data" while loading Google Fonts (IP address sent to Google).
  - Dead or placeholder legal links — worse than no links (signals negligence for a trust-sensitive product).
  - Single monolithic policy mixing marketing site, waitlist vendor, and in-app AI processing before those systems exist.
  - Illegible legal wall on dark UI — users bounce; regulators still care about accessibility of notices.
  - No process for updating policy when waitlist moves off `localStorage`.
- **Quality bar:**
  - `/privacy` route exists, linked from footer, passes build, readable on mobile.
  - Policy sections map 1:1 to an audited data-inventory (no orphan claims).
  - Marketing claims audit: footer + waitlist + FAQ checked against policy — zero contradictions.
  - Documented open legal questions flagged for human counsel review before production deploy.
- **What the user probably means but did not spell out:**
  - "Strong" = credible for a product handling life-domain reflection, not just legally checkbox-compliant.
  - They may also need Terms and Security pages soon (footer already links them) — privacy work should not block those but should define boundaries.
  - Lawyer review is expected before treating text as binding.

---

## Alignment Critique

- **What am I assuming?**
  - AISIA is a US-based early-stage product (`hello@aisia.app`); primary audience English-speaking, possibly global.
  - First deliverable is the **marketing website** privacy policy, not the full in-app policy (app is `prototype-2`, pre-auth).
  - "Strong" prioritizes accuracy + trust alignment over maximal legal verbosity.
  - User wants the **research map** now; implementation is a follow-on task after business facts are gathered.
- **Directly requested vs implied vs invented:**
  - **Direct:** Identify research and considerations via deliberate-strategy.
  - **Implied:** Audit current site data flows; plan workflow for building the page; toolkit for future execution.
  - **Invented (deferred):** Specific jurisdiction choice, exact retention periods, DPO appointment, EU representative — need business input.
- **What would be overbuilding?**
  - OneTrust / Cookiebot integration while no non-essential cookies exist.
  - Separate policies per US state before having meaningful traffic or nexus.
  - MDX legal CMS before three static pages exist.
- **Clarification needed before final policy text:**
  - One question worth asking later (not blocking research): **legal entity name, jurisdiction of incorporation, and primary contact for privacy requests** — wrong answers break GDPR/CCPA sections.

---

## Research & Considerations Inventory

Use this as the master checklist before drafting or coding. Mark each item **Resolved / Open / N/A** during Node 1 (Data audit).

### A. Business & legal scope

| # | Research item | Why it matters | Current signal | Status |
|---|---------------|----------------|----------------|--------|
| A1 | Legal entity name, address, jurisdiction | Required in virtually every privacy policy | HaiBuilt Inc, 2108 N ST #4268, Sacramento, CA 95816, USA | **Resolved** |
| A2 | Which users/geographies are in scope (EU, UK, CA, US states) | Determines GDPR, UK GDPR, PIPEDA, CCPA/CPRA sections | US emphasis; CCPA section included | **Resolved** |
| A3 | Is AISIA 18+ only? (COPPA) | Children's privacy rules if minors could sign up | No 18+ statement required; generic children section | **Resolved** |
| A4 | Marketing site only vs site + waitlist backend vs full app | Avoid claiming practices for systems that do not exist yet | Site is static; app separate | Partial |
| A5 | Will a qualified attorney review before launch? | Sets expectations for draft vs production-ready | Assumed yes — flag in deliverable | Open |
| A6 | Relationship to Terms of Service and Security page | Footer links all three; scope boundaries | `#terms`, `#security` also dead | Open |

### B. Data inventory — marketing site (technical audit)

| # | Data / processing | Where | Sent to third party? | Policy implication | Status |
|---|-------------------|-------|----------------------|-------------------|--------|
| B1 | Waitlist email + timestamp | `localStorage["aisia_waitlist"]` via `src/lib/waitlist.ts` | No (client-only) | Disclose local storage; clarify not transmitted yet; future update when API added | Resolved |
| B2 | Email validation | Client-side regex only | No | Low risk; no server logs from form | Resolved |
| B3 | Brand fonts (DM Sans, Syne, IBM Plex Mono) | `src/lib/fonts.ts` via `@fontsource/*` | No | Self-hosted; aligns with "No trackers" tagline | **Resolved** |
| B4 | Hosting / CDN logs | Cloudflare Pages | Provider processes IP, request metadata | Disclosed in policy §6 | **Resolved** |
| B5 | Analytics / ads / pixels | None in codebase | No | Policy should state none; document if added later | Resolved |
| B6 | Tracking cookies | None (react-router `cookie` dep is not site-set) | No | No cookie banner today; note essential vs non-essential if cookies added | Resolved |
| B7 | `mailto:hello@aisia.app` | User-initiated email client | User's email provider | Not collection by AISIA until user sends | Resolved |
| B8 | Sign-in link (`APP_URL`) | Nav/footer → external app origin | Leaves marketing site | Policy should clarify separate app terms when live | Partial |
| B9 | Open Graph / meta tags | `index.html` | No PII | No collection; social previews only | Resolved |
| B10 | Framer Motion / Lucide / React | Bundled first-party JS | No | No third-party data sharing from libs themselves | Resolved |

**Resolution (B3):** User chose **self-host fonts** via `@fontsource/*`. Google Fonts links removed from `index.html`.

### C. Future-state practices (document now, implement later)

| # | Planned change | Policy impact |
|---|----------------|---------------|
| C1 | Waitlist → Resend / Loops / ConvertKit / Supabase | New processor; DPA; purpose (marketing email); retention; unsubscribe |
| C2 | Analytics (Plausible, PostHog, GA, etc.) | Consent in EU/UK; update footer tagline; cookie banner maybe |
| C3 | App launch (`prototype-2`) with auth + AI chat | Separate or appended policy: account data, conversation content, AI subprocessors, sensitive-domain data |
| C4 | Payment (Stripe) | PCI scope; payment processor disclosure |
| C5 | Email launch notifications | CAN-SPAM compliance; GDPR lawful basis (consent vs legitimate interest) |

### D. Regulatory frameworks to evaluate

| Framework | Trigger | Key sections to research |
|-----------|---------|--------------------------|
| **GDPR / UK GDPR** | EU/UK visitors | Lawful basis, rights (access/erase/portability), DPA with processors, international transfers, privacy contact |
| **CCPA/CPRA** | California residents + thresholds | "Sale/share" definitions, opt-out link, categories of PI collected |
| **CAN-SPAM** | Marketing emails from waitlist | Consent, unsubscribe, physical address in emails |
| **COPPA** | Users under 13 | Age gate or 18+ statement |
| **ePrivacy / cookie rules** | Non-essential cookies or similar tech | Consent banner requirements (EU) |
| **PIPEDA** | Canadian users | Comparable notice + consent principles |

*Research deliverable:* For each applicable framework, list required **policy sections** and **site UX elements** (e.g., "Do Not Sell" link for CPRA if applicable).

### E. User rights & operational readiness

| # | Consideration | Research question |
|---|---------------|-------------------|
| E1 | Privacy request inbox | Is `hello@aisia.app` the official channel? SLA for response? |
| E2 | Data deletion | How to delete waitlist emails today (no backend)? Future process? |
| E3 | Data export | Required for GDPR; likely N/A until accounts exist |
| E4 | Breach notification | Internal playbook — not on marketing page but affects Security page cross-link |
| E5 | Subprocessor list | Google (fonts), host, future email vendor — maintain a table |

### F. Copy & claims alignment audit

| Location | Claim | Must match policy |
|----------|-------|-------------------|
| `Footer.tsx` | "Your data is yours · No trackers on this site" | Define "trackers"; address Google Fonts or self-host |
| `WaitlistForm.tsx` | "No spam. Just launch news + early access." | Email use purpose + opt-out path when backend exists |
| `WaitlistForm.tsx` | Success: "We'll reach out to {email}" | Lawful basis for contact; retention |
| `Faq.tsx` | Not professional advice | Disclaimer consistency (not privacy, but trust bundle) |
| `marketing-landing` skill | "No cookie banner (we don't set tracking cookies)" | Still true; localStorage is not a cookie but should be disclosed |
| `README.md` | No analytics by design | Policy affirmation |

### G. Front-end implementation considerations (for build phase)

| # | Decision | Options | Recommendation to research |
|---|----------|---------|--------------------------|
| G1 | URL structure | `/privacy`, `/legal/privacy`, anchor on home | `/privacy` — matches footer mental model; add `/terms`, `/security` later |
| G2 | Page template | Dedicated `LegalPage.tsx` layout vs one-off | Shared legal layout: title, `last updated`, prose styles, back link |
| G3 | Typography / readability | Long prose on dark `void` background | Research contrast for body text; consider slightly elevated surface for legal content |
| G4 | Navigation | Footer-only vs also linked from waitlist | Consider subtle "Privacy" link near waitlist submit (common pattern; increases consent transparency) |
| G5 | SEO | `noindex` on legal pages? | Usually index is fine; research if preferred |
| G6 | Routing | React Router route in `App.tsx` | Mirror `/about` pattern |
| G7 | Content format | TSX inline, Markdown import, or static HTML | Markdown → component keeps legal edits out of layout code |
| G8 | Versioning | `lastUpdated` constant + changelog in strategy or frontmatter | Required for trust |
| G9 | i18n | English only for now? | Assume en-US unless user says otherwise |
| G10 | Accessibility | Heading hierarchy, skip link, readable line length | axe check in Assess step |
| G11 | Print / share | Optional print stylesheet | Low priority |

### H. Content authoring approach

| Approach | Pros | Cons |
|----------|------|------|
| Lawyer-drafted custom | Best fit for AISIA's sensitive domains | Cost, time |
| Startup template + counsel review | Faster | May need heavy edits |
| Generator (Termly, iubenda, etc.) | Structured | Ongoing cost; generic tone |
| Agent-drafted + **mandatory** counsel review | Fast first draft | Not binding until reviewed |

**Non-negotiable:** Agent-generated policy text is a **draft for review**, not legal advice.

### I. Security page boundary (footer `#security`)

Research whether Security page covers: TLS, hosting provider, vulnerability reporting, data encryption — while Privacy covers: what is collected, why, who sees it, rights. Cross-link both.

### J. Validation & maintenance

| # | Consideration |
|---|---------------|
| J1 | Checklist when adding any third-party script |
| J2 | Annual policy review trigger |
| J3 | Automated check: footer Legal links resolve (not `#`) |
| J4 | Automated check: forbidden claims vs `package.json` / grep for analytics SDKs |

---

## Capability Plan

*Scheduled for Phase 2 — not created until user approves moving to build.*

- **Skills to create** (`.cursor/skills/<name>/SKILL.md`):
  - [ ] `legal-pages` — voice, structure, section requirements, claims-alignment checklist, when to escalate to counsel for AISIA marketing + future app legal content.

- **Rules to create** (`.cursor/rules/<name>.mdc`):
  - [ ] `legal-pages.mdc` — auto-attach on `src/pages/*Legal*`, `src/content/legal/**`: typography, required frontmatter (`lastUpdated`), footer link sync, no contradictory marketing claims.

- **Scripts to create** (`scripts/*.mjs`):
  - [ ] `validate-legal-links.mjs` — assert footer Legal hrefs are real routes; fail on `#privacy`-style placeholders; optionally grep for known tracker SDKs.

- **Existing tools to reuse:**
  - `marketing-landing` skill — tone alignment (confident, not corporate-legalese; honest about limits).
  - `website-brand.mdc` — visual consistency for legal pages.
  - `scripts/validate-build.mjs` — build gate after pages added.

- **Things not worth tooling:**
  - Full policy diff engine.
  - Cookie scanner SaaS integration pre-launch.

---

## Toolkit Gate Log

| Planned artifact | Target path | Status | Created? |
|------------------|-------------|--------|----------|
| Skill: legal-pages | `.cursor/skills/legal-pages/SKILL.md` | created | yes |
| Rule: legal-pages | `.cursor/rules/legal-pages.mdc` | created | yes |
| Script: validate-legal-links | `scripts/validate-legal-links.mjs` | created | yes |

**Phase 2 gate:** PASSED.

---

## Workflow Graph

| Node | Entry condition | Build actions | Success criteria | Validation method | On fail → | Status |
|------|-----------------|---------------|------------------|-------------------|-----------|--------|
| 0 — Toolkit | Strategy brief done; user approves build | Create `legal-pages` skill, rule, `validate-legal-links.mjs` | ≥1 skill on disk; gate log updated | Confirm files exist | Fix toolkit | passed |
| 1 — Data & claims audit | Node 0 passed | Complete tables A–J; resolve B3 (fonts); confirm host; document open items A1–A3 | Inventory 100% rows have status; claims audit has no unaddressed conflicts | Checklist review in this file | Refine (max 3) | passed |
| 2 — Policy draft | Node 1 passed; business facts supplied | Draft privacy policy (counsel-review disclaimer); scope = marketing site + waitlist | All B-rows reflected in draft | Skill checklist + human read | Refine (max 3) | passed |
| 3 — Privacy page UI | Node 2 passed | `/privacy` route, `LegalPage` layout, footer + waitlist links | Footer Privacy → `/privacy` works; on-brand | `npm run validate` | Refine (max 3) | passed |
| 4 — Counsel & launch gate | Node 3 passed | User/legal review; fix contradictions | Sign-off in Refinement Log | Manual sign-off | Escalate | pending |

**Decisions resolved:** A1 HaiBuilt Inc; A2 US emphasis; B3 self-host fonts; B4 Cloudflare Pages; A3 no 18+ statement.

---

## Refinement Log

### Research phase (current)

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | Site audited; research tables A–J drafted | Business facts A1–A3 open; deploy host B4 open; fonts conflict B3 flagged | User to supply entity/jurisdiction; decide font strategy before draft | Research complete |

---

## Checkpoint Log

| Checkpoint | Node | What changed | Validated | Open risks | Next |
|------------|------|--------------|-----------|------------|------|
| Start | — | Strategy brief created at `.cursor/strategy/STRATEGY-privacy-policy.md` | — | No legal entity info | User review research inventory |
| Research | — | Full checklist A–J; B3 fonts conflict identified | Codebase grep + file read | Policy text blocked on A1, A2, B3 decision | Approve Phase 2 toolkit + Node 1 audit |

---

## Project Done (research phase)

- [x] Explicit request met — research and considerations identified in structured inventory
- [x] Expert lens and alignment critique completed
- [x] Current site data flows audited (B-table)
- [x] Critical conflict flagged (footer "no trackers" vs Google Fonts)
- [x] Workflow graph defined for subsequent build
- [ ] Phase 2 toolkit — deferred until user approves build
- [ ] Business inputs A1–A3 — required before policy draft
- [ ] Attorney review — required before production deploy

### Remaining assumptions

1. English-only, marketing-site-scoped policy for v1.
2. Terms and Security pages are out of scope for first build slice but should share `LegalPage` layout when added.
3. Self-hosting fonts is the likely best path to honor the footer promise — confirm with user.

### Suggested next steps for user

1. Provide **legal entity name, address, and jurisdiction** (A1).
2. Confirm **target geographies** (A2) and **minimum age** (A3).
3. Decide **Google Fonts: self-host vs disclose** (B3).
4. Confirm **production host** (B4) for subprocessor disclosure.
5. Say **go** to create Phase 2 toolkit and begin Node 1 formal audit + Node 3 UI build.
