import { Link } from 'react-router-dom'
import { BrandMark } from '../components/ui/BrandMark'
import { APP_URL } from '../lib/links'

const LINKS = {
  Product: [
    { label: 'Domains', href: '/#domains' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Join waitlist', href: '/#waitlist' },
  ],
  About: [
    { label: 'Why AISIA', href: '/about#reflection' },
    { label: 'The idea', href: '/about#concept' },
    { label: 'Guided threads', href: '/about#guides' },
    { label: 'Features', href: '/about#features' },
    { label: 'Questions', href: '/about#faq' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Sign in', href: APP_URL },
    { label: 'Contact', href: 'mailto:hello@aisia.app' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Security', href: '#security' },
  ],
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternal = href.startsWith('/') && !href.startsWith('//')
  const className = 'text-sm text-white/60 hover:text-white transition-colors'

  if (isInternal) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-10 mt-4">
      <div className="glow-line absolute top-0 inset-x-0" />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_repeat(4,1fr)] gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" aria-label="AISIA — home">
              <BrandMark size={32} showWord wordClassName="text-lg" />
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              The AI Self Improvement App — a life operating system for guided reflection.
              Eight domains, organized priorities, artifacts from conversation. Not professional
              advice.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Built with intent · 2026
            </p>
          </div>

          {(Object.keys(LINKS) as (keyof typeof LINKS)[]).map((col) => (
            <div key={col}>
              <p className="eyebrow mb-4">{col}</p>
              <ul className="space-y-2.5">
                {LINKS[col].map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} AISIA. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
            Your data is yours · No trackers on this site
          </p>
        </div>
      </div>
    </footer>
  )
}
