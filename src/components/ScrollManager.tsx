import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to top on route change, or to hash target when present. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}
