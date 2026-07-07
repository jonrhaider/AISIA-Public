# Rule/Skill vs Script Decision Guide

Before creating any project-local artifact, use this guide to choose the right
form. The wrong choice creates either brittle automation or vague guidance —
both are worse than nothing.

**Cursor locations:**
- Rules → `.cursor/rules/<name>.mdc` (via `/create-rule`)
- Skills → `.cursor/skills/<name>/SKILL.md` (via `/create-skill`)
- Scripts → `scripts/*.mjs` (Node.js default) or `scripts/*.py` (when materially better)

---

## The Core Question

**Will this work vary by context and require judgment, or must it produce the
same output reliably every time?**

If judgment: create an LLM rule or skill.
If repeatability: create a deterministic script.

---

## Create an LLM Rule or Skill When

The work requires reasoning that changes based on context, intent, or
trade-offs that cannot be pre-computed:

- Domain heuristics (e.g., "prefer composition over inheritance in this
  codebase").
- Architecture conventions the agent must follow when making decisions.
- Quality and review checklists that guide judgment during evaluation.
- Writing voice, tone, or editorial constraints.
- Design principles that apply to multiple related decisions.
- Multi-step workflows where each step depends on the result of the previous
  one in ways that cannot be scripted.
- Project norms that future agents or contributors need to understand.

A good rule tells a future agent: when to use it, what to do, what to avoid,
and how to know it worked.

---

## Create a Deterministic Script When

The work must produce the same result every time, regardless of which model
runs it or how it interprets the request:

- Parsing, transforming, or generating structured files (JSON, YAML, CSV,
  Markdown, HTML).
- Validating schemas, links, routes, manifests, asset lists, or dependencies.
- Computing metrics, diffs, inventories, coverage reports, or summaries.
- Batch file operations (rename, move, generate, scaffold).
- Repeated test setup or fixture generation.
- Any check where silent variation between runs would be a bug.
- Any operation where you need a clear pass/fail result to gate the next step.

---

## Script Language: Node.js vs Python

### Default to Node.js (.mjs) when

- The project is web, JS, TS, HTML, CSS, or JSON-based.
- The task involves Markdown, package metadata, npm ecosystem, or browser
  tooling.
- You need file orchestration, AST transforms, schema validation, or build
  output checks.
- A reliable npm package already exists for the task.
- The project has no Python dependency at all.

### Fall back to Python (.py) only when

- The project is already Python-based (setup.py, pyproject.toml, etc.).
- The task requires mature Python ecosystems: pandas, numpy, scipy, ML
  frameworks, openpyxl, pdfplumber, Pillow, Jupyter, etc.
- Working with binary formats (PDFs, Word docs, Excel sheets, images) where
  Python libraries are materially better than Node alternatives.
- The user has expressed a preference for Python.

### Do not create a script when

- An existing project command already solves the problem (e.g., `npm test`,
  `eslint`, `tsc --noEmit`).
- A well-known CLI tool does exactly this job reliably (e.g., `prettier`,
  `jsonlint`, `htmlhint`).
- A simple shell one-liner is sufficient and will be understood by anyone
  reading it.

---

## Decision Table

| Situation | Create |
|---|---|
| Agent needs to follow a convention when making decisions | LLM rule (`.cursor/rules/`) |
| Agent needs to review or evaluate output against criteria | LLM skill (`.cursor/skills/`) |
| Agent needs to generate or transform files identically each run | Script |
| Agent needs to validate a schema, manifest, or asset list | Script |
| A future agent needs to understand project norms | LLM rule |
| A CI step needs a pass/fail result | Script |
| The work involves subjective quality judgment | LLM skill |
| The work involves computing or counting something | Script |

---

## Quality Bar for Each Form

**A good LLM rule or skill:**
- States when to use it in the first two sentences.
- Lists what to do and what to avoid.
- Gives a concrete validation method.
- Is short enough to be read in full before applying it.

**A good deterministic script:**
- Accepts clear inputs via CLI args or stdin.
- Prints an unambiguous result or pass/fail output.
- Exits non-zero with an informative error message when it fails.
- Can be run in CI without modification.
- Requires no manual interpretation of its output.
