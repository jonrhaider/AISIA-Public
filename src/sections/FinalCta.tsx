import { motion } from 'framer-motion'
import { WaitlistForm } from '../components/WaitlistForm'

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
          {/* Aurora wash behind */}
          <div
            className="absolute inset-0 opacity-70 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.22), transparent 70%), radial-gradient(ellipse 60% 60% at 100% 100%, rgba(167,139,250,0.18), transparent 70%), radial-gradient(ellipse 60% 60% at 0% 100%, rgba(251,113,133,0.14), transparent 70%)',
            }}
          />
          <div className="glow-line absolute top-0 inset-x-0" />

          <div className="relative">
            <p className="eyebrow mb-5">Early access</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Stay organized across{' '}
              <span className="text-gradient-aurora">your whole life</span>.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-white/65 text-base sm:text-lg leading-relaxed">
              Join the waitlist for AISIA — the AI Self Improvement App. Reflect with structure,
              keep your priorities visible, and improve on your own terms. Not advice. Not direction.
            </p>

            <div className="mt-10 max-w-md mx-auto">
              <WaitlistForm id="cta-waitlist" variant="hero" />
            </div>

            <p className="mt-8 text-[11px] font-mono uppercase tracking-[0.22em] text-white/40">
              No credit card · No spam · Cancel anytime after launch
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
