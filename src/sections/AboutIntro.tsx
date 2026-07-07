import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AboutIntro() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-8 sm:pt-40 sm:pb-12 overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to home
          </Link>

          <p className="eyebrow mb-4">About AISIA</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">
            Philosophy, structure, and{' '}
            <span className="text-gradient-aurora">how it works</span>.
          </h1>
          <p className="mt-6 text-lg text-white/65 leading-relaxed">
            The home page is the promise — organized priorities across eight life domains. Here we
            go deeper: why reflection comes first, what makes AISIA different, how each domain
            works, and the questions people ask before they join.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
