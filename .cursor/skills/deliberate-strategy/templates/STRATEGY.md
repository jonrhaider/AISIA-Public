# Strategy Brief

<!-- Copy from .cursor/skills/deliberate-strategy/templates/STRATEGY.md
     to .cursor/strategy/STRATEGY.md at task start.
     Phase 2 is NOT complete until Toolkit Gate Log shows created files on disk. -->

## User Target

- **Explicit request:**
- **Likely implicit goals:**
- **Non-goals / avoid:**
- **Constraints:**

---

## Expert Lens

<!-- Expand using references/expert-strategy-template.md if helpful -->

- **Relevant expert role(s):**
- **What they care about most:**
- **Common failure modes:**
- **Quality bar:**
- **What the user probably means but did not spell out:**

---

## Alignment Critique

- **What am I assuming?**
- **Which inferences are directly requested vs strongly implied vs invented?**
- **What would be overbuilding?**
- **What clarification is necessary before proceeding?**

---

## Capability Plan

<!-- Every non-trivial task: list at least ONE skill to create under .cursor/skills/.
     "None" is not valid. Planning without creating files is a protocol violation. -->

- **Skills to create** (`.cursor/skills/<name>/SKILL.md`) — **minimum 1 required:**
  - [ ] `<name>` — [what judgment/workflow it captures]
  - [ ] `<name>` — [optional additional]

- **Rules to create** (`.cursor/rules/<name>.mdc` via `/create-rule` or direct write):
  - [ ] `<name>` — [what convention it enforces]

- **Scripts to create** (`scripts/*.mjs`):
  - [ ] `<name>` — [what it validates]

- **Existing tools/libraries to reuse:**
- **Things not worth tooling:**

---

## Toolkit Gate Log

<!-- Update as files are CREATED ON DISK. Phase 2 exits when all planned items are created. -->

| Planned artifact | Target path | Status | Created? |
|------------------|-------------|--------|----------|
| Skill: [name] | `.cursor/skills/[name]/SKILL.md` | pending | no |
| Rule: [name] | `.cursor/rules/[name].mdc` | pending | no |
| Script: [name] | `scripts/[name].mjs` | pending | no |

**Status values:** `pending` | `created` | `deferred (reason)`

**Phase 2 gate:** ≥1 task-specific skill row shows `created` + file exists on disk before Node 1 build.

---

## Workflow Graph

<!-- Node 1 must NOT start until Toolkit Gate Log passes Phase 2 gate. -->

| Node | Entry condition | Build actions | Success criteria | Validation method | On fail → | Status |
|------|-----------------|---------------|------------------|-------------------|-----------|--------|
| 0 — Toolkit | Strategy brief done | Create `.cursor/skills/`, rules, scripts from Capability Plan | ≥1 task skill on disk; gate log updated | List paths; confirm files exist | Fix missing toolkit | pending |
| 1 — [Name] | **Node 0 passed** | | | | Refine loop (max 3) | pending |
| 2 — [Name] | Node 1 passed | | | | Refine loop (max 3) | pending |

**Status values:** `pending` | `in_progress` | `passed` | `deferred` | `blocked`

---

## Refinement Log

### Node 0 — Toolkit

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | | | | |

### Node 1 — [Name]

| Iter | Assess result | Gaps vs criteria | Refinements proposed | Pass/Fail |
|------|---------------|------------------|----------------------|-----------|
| 1 | | | | |

---

## Checkpoint Log

| Checkpoint | Node | What changed | Validated | Open risks | Next |
|------------|------|--------------|-----------|------------|------|
| Start | — | Strategy brief created | — | | Node 0 — Toolkit |
| | 0 | | Toolkit files on disk | | Node 1 |

---

## Project Done

- [ ] Node 0 passed — task skills exist under `.cursor/skills/`
- [ ] All build nodes **Status: passed**
- [ ] Final alignment critique completed
- [ ] Limitations and next steps documented
