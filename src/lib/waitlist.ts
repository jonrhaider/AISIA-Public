const STORAGE_KEY = 'aisia_waitlist'

export interface WaitlistEntry {
  email: string
  ts: number
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function getEntries(): WaitlistEntry[] {
  if (!isBrowser()) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveEntry(email: string): WaitlistEntry {
  const entry: WaitlistEntry = { email: email.trim().toLowerCase(), ts: Date.now() }
  if (!isBrowser()) return entry
  const list = getEntries()
  const dedup = list.filter((e) => e.email !== entry.email)
  dedup.push(entry)
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(dedup))
  } catch {
    /* ignore quota errors */
  }
  return entry
}

export function currentEntry(): WaitlistEntry | null {
  if (!isBrowser()) return null
  const list = getEntries()
  return list.length > 0 ? list[list.length - 1] : null
}

export function clearEntry(): void {
  if (!isBrowser()) return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}
