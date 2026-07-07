import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { OrbitalHero } from '../components/OrbitalHero'
import { WaitlistForm } from '../components/WaitlistForm'

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
            Your life,
            <br />
            <span className="text-gradient-aurora">organized</span> across
            eight domains.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-lg"
          >
            <strong className="font-medium text-white/85">AISIA</strong> — the{' '}
            <strong className="font-medium text-white/85">AI Self Improvement App</strong> — is a
            life operating system for guided reflection. Use AI to think through your priorities,
            extract insights and artifacts, and keep each part of your life in one clear place. Not
            direction. Not professional advice.
          </motion.p>

          <motion.div
            id="waitlist"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 max-w-md"
          >
            <WaitlistForm id="hero-waitlist" variant="hero" />
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
