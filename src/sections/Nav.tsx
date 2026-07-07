import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { BrandMark } from '../components/ui/BrandMark'
import { APP_URL } from '../lib/links'

type NavLink = { label: string; to: string }

const HOME_LINKS: NavLink[] = [
  { label: 'Domains', to: '/#domains' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'About', to: '/about' },
]

const ABOUT_LINKS: NavLink[] = [
  { label: 'Why AISIA', to: '/about#reflection' },
  { label: 'The idea', to: '/about#concept' },
  { label: 'Guided threads', to: '/about#guides' },
  { label: 'Features', to: '/about#features' },
  { label: 'Questions', to: '/about#faq' },
]

export function Nav() {
  const { pathname } = useLocation()
  const isAbout = pathname.startsWith('/about')
  const links = isAbout ? ABOUT_LINKS : HOME_LINKS

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-2xl bg-void/70 border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="AISIA — home">
          <BrandMark size={30} showWord wordClassName="text-[17px]" />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={APP_URL}
            className="text-sm text-white/60 hover:text-white transition-colors px-3 py-2"
          >
            Sign in
          </a>
          <Link
            to="/#waitlist"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-void transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              boxShadow: '0 0 24px rgba(34,211,238,0.35)',
            }}
          >
            Join waitlist
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.05]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/[0.06] bg-void/90 backdrop-blur-2xl"
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/[0.05]"
              >
                {link.label}
              </Link>
            ))}
            {!isAbout && (
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/[0.05]"
              >
                About
              </Link>
            )}
            {isAbout && (
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/[0.05]"
              >
                Home
              </Link>
            )}
            <div className="mt-2 flex items-center gap-2">
              <a
                href={APP_URL}
                className="flex-1 text-center px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg border border-white/10"
              >
                Sign in
              </a>
              <Link
                to="/#waitlist"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-3 py-2.5 text-sm font-medium text-void rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                }}
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
