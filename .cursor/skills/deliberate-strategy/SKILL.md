---
name: deliberate-strategy
description: >-
  Strategy-first execution for non-trivial Cursor tasks. Plans deliberately,
  creates project toolkit (rules, skills, scripts), defines workflow nodes with
  success criteria, and runs build-assess-refine loops until each node passes.
  Use for new projects, multi-step builds, refactors, migrations, research, or
  when the user says strategy first, plan before build, or deliberate strategy.
---

# Deliberate Strategy

**Macro pattern:** Strategy → Toolkit → Execute workflow nodes with refinement loops.

Do not write product code until Phase 1 (strategy brief) and Phase 2 (initial toolkit slice) are complete, unless the user explicitly says to skip planning.

## When to use

- New project, multi-step build, refactor, migration, research, automation
- Ambiguous scope or high rework risk
- User asks for strategy, planning, or deliberate execution

## When not to use

- One-line fix, typo, single factual question, trivial config tweak
- User explicitly says skip planning

For trivial tasks: brief mental alignment check, then proceed.

---

## Phase 0 — Align

1. Restate the user's **explicit request** and **likely implicit goals**.
2. Adopt the relevant **expert lens** — see [references/expert-strategy-template.md](references/expert-strategy-template.md).
3. Run **alignment critique** — see [references/alignment-critique-checklist.md](references/alignment-critique-checklist.md).
4. Ask one clarifying question only if a wrong assumption would cause meaningful rework. Otherwise state assumptions and proceed.

---

## Phase 1 — Strategy brief

1. Copy [templates/STRATEGY.md](templates/STRATEGY.md) to **`.cursor/strategy/STRATEGY.md`** in the project.
2. Fill in: User Target, Expert Lens, Alignment Critique, Capability Plan, **Workflow Graph** (nodes with success criteria).
3. Do not proceed to product code without this file.

Update `.cursor/strategy/STRATEGY.md` at every node exit and when scope changes.

---

## Phase 2 — Toolkit (mandatory minimum)

Before the first build slice, create the toolkit items required for this task type. "Minimum" means **at least these** — not zero.

| Task signal | Required before first build |
|---|---|
| Any non-trivial task | Phase-gate checklist (below) + strategy brief |
| UI / visual quality bar | Task design rule or skill + browser/visual validation in Assess step |
| Repeatable validation | `scripts/*.mjs` with pass/fail exit code |
| Domain judgment | Task skill via `/create-skill` → `.cursor/skills/<name>/` |
| Persistent conventions | Task rule via `/create-rule` → `.cursor/rules/<name>.mdc` |

**Tooling decisions:** Read [references/skill-vs-script-decision.md](references/skill-vs-script-decision.md).

**Creating task artifacts:**
- Use **`/create-skill`** for task-specific skills — do not maintain a local skill template.
- Use **`/create-rule`** for persistent project conventions.
- Prefer **`scripts/*.mjs`** for deterministic validation; Python only when materially better.

Do not create rules, skills, or scripts speculatively. Each item must map to a real need in the Capability Plan.

### Phase-gate checklist (inline)

Before first build slice, confirm:

- [ ] `.cursor/strategy/STRATEGY.md` exists with workflow nodes defined
- [ ] Each node has success criteria and validation method
- [ ] Capability Plan lists concrete toolkit items (not "none")
- [ ] Required toolkit items for this task type are created or scheduled for Node 1

---

## Phase 3 — Workflow graph and refinement loop

Define nodes in `.cursor/strategy/STRATEGY.md`. Execute **one node at a time**. Do not advance until the current node's success criteria pass.

### Per-node protocol

For each workflow node:

1. **Build** — Implement only this node's scope. No scope creep.
2. **Assess** — Run the node's validation method. Report **pass** or **fail** against each success criterion.
3. **Propose refinements** — If fail: list gaps vs criteria; propose specific changes. Do not silently patch and advance.
4. **Rebuild / Re-assess** — Apply refinements and re-run Assess.
5. **Exit gate** — Log result in STRATEGY.md Refinement Log. Only then move to the next node.

**Max iterations:** 3 refinement loops per node, then escalate to the user with gaps and options.

### Node flow

```
Enter node → Build → Assess → Criteria met?
  No  → Propose refinements → Build → Assess → …
  Yes → Log checkpoint → Next node (or Done)
```

### Checkpoint report (required at each node exit)

- What changed
- What was validated (pass/fail evidence)
- Open assumptions / risks
- Next node

---

## Phase 4 — Done

Task is complete only when:

- Deliverable satisfies the explicit request
- Strongly implied requirements are addressed or consciously deferred
- All workflow nodes show **Status: passed** in STRATEGY.md
- Validation has been run; limitations stated if not
- Toolkit items are minimal, relevant, and documented in Capability Plan
- Final alignment critique performed (see checklist — Final Done Check)
- Remaining assumptions and next steps stated to the user

---

## Cursor integrations

| Need | Use |
|---|---|
| Visual / UI success criteria | Browser MCP: snapshot, screenshot, verify in Assess step |
| Recurring assess cycle | `/loop` skill — e.g. re-check build after interval or event |
| Task-specific judgment | `/create-skill` |
| Persistent conventions | `/create-rule` |
| Pass/fail gate | `scripts/*.mjs` with non-zero exit on failure |

---

## References (load on demand)

- [alignment-critique-checklist.md](references/alignment-critique-checklist.md) — scope, minimalism, assumptions, refinement loops
- [expert-strategy-template.md](references/expert-strategy-template.md) — mission, expert persona, quality bar
- [skill-vs-script-decision.md](references/skill-vs-script-decision.md) — rule vs skill vs script; Node vs Python

## Template

- [templates/STRATEGY.md](templates/STRATEGY.md) — copy to `.cursor/strategy/STRATEGY.md`
