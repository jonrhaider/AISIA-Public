import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { subscriptionUrl } from '../lib/links'

export function FinalCta() {
  return (
    <section id="join" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl liquid-glass-strong overflow-hidden p-10 sm:p-16 text-center"
        >
          <div
            className="absolute inset-0 opacity-70 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.22), transparent 70%), radial-gradient(ellipse 60% 60% at 100% 100%, rgba(167,139,250,0.18), transparent 70%), radial-gradient(ellipse 60% 60% at 0% 100%, rgba(251,113,133,0.14), transparent 70%)',
            }}
          />
          <div className="glow-line absolute top-0 inset-x-0" />

          <div className="relative">
            <p className="eyebrow mb-5">Get started</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Stay organized across{' '}
              <span className="text-gradient-aurora">your whole life</span>.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-white/65 text-base sm:text-lg leading-relaxed">
              Start your 14-day free household trial. Reflect with structure, keep priorities
              visible across eight domains, and improve on your own terms.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={subscriptionUrl()}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-[15px] font-medium text-void transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                  boxShadow: '0 0 32px rgba(34,211,238,0.35), 0 8px 24px rgba(0,0,0,0.35)',
                }}
              >
                Start 14-day free trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={subscriptionUrl('yearly_founding')}
                className="ghost-btn inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-medium"
              >
                Lock in $99/yr founding
              </a>
            </div>

            <p className="mt-8 text-[11px] font-mono uppercase tracking-[0.22em] text-white/40">
              14-day free trial · cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
