#!/usr/bin/env node
// Validates that footer legal links resolve to real routes (not placeholder anchors).

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const footerPath = resolve(root, 'src/sections/Footer.tsx')
const appPath = resolve(root, 'src/App.tsx')

function fail(message) {
  console.error(`[validate-legal-links] FAIL — ${message}`)
  process.exit(1)
}

if (!existsSync(footerPath)) fail('Footer.tsx not found')
if (!existsSync(appPath)) fail('App.tsx not found')

const footer = readFileSync(footerPath, 'utf8')
const app = readFileSync(appPath, 'utf8')

const required = [
  { label: 'Privacy', href: '/privacy', route: '/privacy' },
  { label: 'Terms', href: '/terms', route: '/terms' },
  { label: 'Security', href: '/security', route: '/security' },
]

for (const { label, href, route } of required) {
  if (!footer.includes(`href: '${href}'`) && !footer.includes(`href: "${href}"`)) {
    fail(`Footer "${label}" link must point to ${href}`)
  }

  const routePattern = new RegExp(`path=["']${route.replace('/', '\\/')}["']`)
  if (!routePattern.test(app)) {
    fail(`App.tsx missing route for ${route} (required by Footer "${label}")`)
  }
}

if (/href:\s*['"]#(privacy|terms|security)['"]/.test(footer)) {
  fail('Footer still contains placeholder #privacy / #terms / #security anchors')
}

console.log('[validate-legal-links] PASS — required legal routes wired')
process.exit(0)
