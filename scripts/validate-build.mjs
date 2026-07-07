#!/usr/bin/env node
// Build gate for the AISIA marketing website.
// Runs `vite build` and exits non-zero on failure so it can be used as a
// deliberate-strategy Node validation method or a pre-deploy check.

import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { existsSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')

const distDir = resolve(projectRoot, 'dist')

console.log('[validate-build] project:', projectRoot)

const child = spawn('npm', ['run', 'build'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

child.on('exit', (code) => {
  if (code !== 0) {
    console.error(`[validate-build] FAIL — build exited with ${code}`)
    process.exit(code ?? 1)
  }

  if (!existsSync(distDir)) {
    console.error('[validate-build] FAIL — dist/ was not produced')
    process.exit(1)
  }

  const indexHtml = resolve(distDir, 'index.html')
  if (!existsSync(indexHtml)) {
    console.error('[validate-build] FAIL — dist/index.html missing')
    process.exit(1)
  }

  console.log('[validate-build] PASS — dist/index.html present')
  process.exit(0)
})
