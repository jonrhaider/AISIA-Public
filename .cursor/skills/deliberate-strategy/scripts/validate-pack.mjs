#!/usr/bin/env node
/**
 * Validates the deliberate-strategy Cursor pack structure.
 * Exit 0 = pass, 1 = fail
 */
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const required = [
  'AGENTS.md',
  'README.md',
  '.cursor/rules/deliberate-strategy-first.mdc',
  '.cursor/skills/deliberate-strategy/SKILL.md',
  '.cursor/skills/deliberate-strategy/templates/STRATEGY.md',
  '.cursor/skills/deliberate-strategy/references/alignment-critique-checklist.md',
  '.cursor/skills/deliberate-strategy/references/expert-strategy-template.md',
  '.cursor/skills/deliberate-strategy/references/skill-vs-script-decision.md',
]

const forbidden = [
  'deliberate-strategy-bootstrap/SKILL.md',
  'deliberate-strategy-bootstrap/PORTABLE_RULE.md',
  'deliberate-strategy-bootstrap/cursor-rule.mdc',
]

const missing = required.filter((p) => !existsSync(join(root, p)))
const stale = forbidden.filter((p) => existsSync(join(root, p)))

let failed = false

if (missing.length) {
  console.error('FAIL: Missing required files:')
  missing.forEach((p) => console.error(`  - ${p}`))
  failed = true
}

if (stale.length) {
  console.error('FAIL: Legacy files still present:')
  stale.forEach((p) => console.error(`  - ${p}`))
  failed = true
}

// Check skill content for key protocol terms
const skillPath = join(root, '.cursor/skills/deliberate-strategy/SKILL.md')
if (existsSync(skillPath)) {
  const { readFileSync } = await import('node:fs')
  const skill = readFileSync(skillPath, 'utf8')
  const terms = [
    'refinement loop',
    'Exit gate',
    'Phase 2 — Toolkit',
    '.cursor/strategy/STRATEGY.md',
    '/create-skill',
  ]
  const missingTerms = terms.filter((t) => !skill.includes(t))
  if (missingTerms.length) {
    console.error('FAIL: SKILL.md missing required terms:')
    missingTerms.forEach((t) => console.error(`  - ${t}`))
    failed = true
  }
}

if (failed) {
  process.exit(1)
}

console.log('PASS: Deliberate strategy pack structure valid')
console.log(`  ${required.length} required files present`)
console.log('  No legacy deliberate-strategy-bootstrap files')
console.log('  SKILL.md contains refinement loop protocol')
