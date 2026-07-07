# Alignment Critique Checklist

Use this checklist before the execution workflow begins, at each checkpoint
during execution, at **each refinement loop iteration**, and any time scope
appears to be expanding.

The goal is not to block progress. It is to catch invented requirements,
generic best practices that do not fit this project, and decisions that drift
from what the user actually asked for.

---

## Before Execution

Work through each question. For any goal, requirement, or plan item that fails
a question, either remove it, defer it, or explicitly note the assumption and
its risk.

### Toolkit gate (before first product code)

- [ ] Does `.cursor/strategy/STRATEGY.md` exist?
- [ ] Does at least one **task-specific** skill exist on disk at `.cursor/skills/<name>/SKILL.md` (not only `deliberate-strategy`)?
- [ ] Is the Toolkit Gate Log in STRATEGY.md updated with `created` status and real paths?
- [ ] Am I about to write product code before Phase 2 (toolkit authoring) is complete?
- [ ] Did I list skills in Capability Plan without actually creating the files? (Violation — stop and create them.)

### Scope alignment

- [ ] Have I restated the user's explicit request in my own words?
- [ ] Is each inferred goal directly requested, strongly implied by context,
  or invented?
- [ ] Is there anything on the plan that the user did not ask for, even if it
  seems like a good idea?
- [ ] What would make the user say "that is not what I meant"?

### Minimalism check

- [ ] What is the smallest complete version that satisfies the request?
- [ ] Am I solving a problem the user actually has, or a problem I imagine
  they might have?
- [ ] Am I adding features, tooling, process, or abstractions that increase
  complexity without improving the outcome?
- [ ] Would a senior practitioner in this domain call any part of this
  over-engineered for the stated goal?

### Assumption audit

- [ ] What assumptions am I making about the user's stack, environment, or
  preferences that they did not state?
- [ ] Which assumptions, if wrong, would require meaningful rework?
- [ ] Have I asked exactly one clarifying question for any assumption that
  fails the rework test, or stated the assumption explicitly if proceeding?

### Expert lens check

- [ ] Have I applied the relevant expert lens for this task?
- [ ] Have I identified the most common failure modes for this type of work?
- [ ] Does the plan address those failure modes, or at least acknowledge them?
- [ ] Am I optimizing for a generic best practice instead of this user's
  specific situation?

---

## At Each Refinement Loop Iteration

After each **Assess** step within a workflow node (pass or fail):

- [ ] Did I run the validation method defined for this node (not skip or substitute)?
- [ ] Did I report pass/fail against **each** success criterion with evidence?
- [ ] If fail: did I propose specific refinements before rebuilding (not silent patch)?
- [ ] Am I advancing to the next node only because criteria passed (not because "good enough")?
- [ ] Is iteration count logged in STRATEGY.md Refinement Log?
- [ ] At 3 failed iterations: am I escalating to the user instead of looping again?

---

## At Each Checkpoint During Execution

After each workflow node completes (exit gate passed), run the shorter runtime critique:

- [ ] Is the current direction still aligned with the user's explicit request?
- [ ] Has scope grown beyond what was planned? If so, is the growth justified
  or should it be deferred?
- [ ] Did I create any tool, rule, or script speculatively rather than because
  a real need appeared?
- [ ] What assumption or risk still exists going into the next node?
- [ ] Is there anything to flag to the user before continuing?

---

## Final Done Check

Before calling a task complete:

- [ ] Does the deliverable satisfy the explicit request?
- [ ] Are strongly implied requirements addressed, or explicitly deferred with
  a stated reason?
- [ ] Has validation been run, or is the reason it could not be run stated?
- [ ] Are created rules, skills, and scripts minimal and relevant?
- [ ] Do all workflow nodes show **Status: passed** in STRATEGY.md?
- [ ] Have remaining assumptions, limitations, and next steps been documented?
