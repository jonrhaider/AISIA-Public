import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { OrbitalHero } from '../components/OrbitalHero'
import { subscriptionUrl } from '../lib/links'

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(167,139,250,0.08) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="chip-mono mb-6"
          >
            <Sparkles className="w-3 h-3 text-aurora-cyan" />
            <span>AI Self Improvement App</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[42px] sm:text-6xl lg:text-[68px] font-bold leading-[1.02] tracking-tight text-white"
          >
            Every part of your life —
            <br />
            <span className="text-gradient-aurora">in one clear place</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-lg"
          >
            <strong className="font-medium text-white/85">AISIA</strong> — the{' '}
            <strong className="font-medium text-white/85">AI Self Improvement App</strong> — is a
            life operating system for guided reflection. Think through your priorities with AI,
            extract insights and artifacts, and keep marriage, money, health, and everything else
            organized.{' '}
            <strong className="font-medium text-white/85">
              One subscription covers your household
            </strong>{' '}
            — you and your partner, with private threads and shared spaces.
          </motion.p>

          <motion.div
            id="signup"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 max-w-md"
          >
            <a
              href={subscriptionUrl()}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-medium text-void transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                boxShadow: '0 0 32px rgba(34,211,238,0.35), 0 8px 24px rgba(0,0,0,0.35)',
              }}
            >
              Start 14-day free trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-[11px] text-white/40 leading-relaxed">
              Household pricing · $15/mo or $99/yr founding after trial. Reflection and organization
              — not professional advice.{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-2 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex items-center gap-6 text-xs text-white/40 font-mono uppercase tracking-[0.18em]"
          >
            <a
              href="#how-it-works"
              className="flex items-center gap-1.5 hover:text-white/70 transition-colors"
            >
              <ArrowDown className="w-3 h-3" />
              How it works
            </a>
            <span className="hidden sm:inline">·</span>
            <Link
              to="/about"
              className="hidden sm:inline hover:text-white/70 transition-colors"
            >
              About AISIA
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center min-h-[380px] lg:min-h-[520px]"
        >
          <OrbitalHero size={480} />
        </motion.div>
      </div>
    </section>
  )
}
