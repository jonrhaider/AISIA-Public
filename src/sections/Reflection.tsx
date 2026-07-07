import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { LiquidPanel } from '../components/ui/LiquidPanel'
import { BrandMark } from '../components/ui/BrandMark'

export function Reflection() {
  return (
    <Section
      id="reflection"
      eyebrow="Why AISIA"
      heading={
        <>
          Reflection is how{' '}
          <span className="text-gradient-aurora">self-improvement</span> starts.
        </>
      }
      intro={
        <>
          <strong className="font-medium text-white/85">AISIA</strong> stands for{' '}
          <strong className="font-medium text-white/85">AI Self Improvement App</strong>. The name
          is a palindrome — it reads the same forward and backward — and the wordmark&apos;s center{' '}
          <strong className="font-medium text-white/85">S</strong> is flipped horizontally. Both are
          deliberate: we believe understanding yourself comes from looking again, and that organized
          reflection is the path to meaningful self-improvement.
        </>
      }
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center lg:items-start"
        >
          <LiquidPanel className="p-8 sm:p-10 w-full max-w-md mx-auto lg:mx-0" glow="rgba(34,211,238,0.2)">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <BrandMark size={48} showWord wordClassName="text-3xl" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                Palindrome · mirrored S · reflection before correction
              </p>
            </div>
          </LiquidPanel>

          <p className="mt-6 text-sm text-white/55 leading-relaxed max-w-md text-center lg:text-left">
            A neat tool for people who want their priorities visible — marriage, money, health, home,
            and the rest — with AI helping you reflect, extract structure, and stay organized across
            every domain that matters.
          </p>

          <blockquote className="relative mt-8 pl-6 border-l-2 border-aurora-cyan/50 max-w-md w-full text-left">
            <p className="font-display text-lg sm:text-xl text-white/85 leading-relaxed italic">
              He who knows others is wise. He who knows himself is enlightened.
            </p>
            <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              ~ Lao Tzu
            </footer>
          </blockquote>
        </motion.div>

        <div className="space-y-5">
          <LiquidPanel className="p-7 sm:p-8" glow="rgba(167,139,250,0.25)">
            <p className="eyebrow mb-4 text-aurora-violet/80">What it is</p>
            <p className="text-[15px] sm:text-base text-white/80 leading-relaxed">
              A life operating system with eight guided threads — one per domain — and a living
              canvas for each. Talk through what matters; AISIA extracts{' '}
              <strong className="font-medium text-white">insights</strong> and{' '}
              <strong className="font-medium text-white">artifacts</strong> (goals, actions,
              reminders, topics) so your priorities stay organized and easy to revisit. You choose
              what to act on.
            </p>
          </LiquidPanel>

          <LiquidPanel className="p-7 sm:p-8">
            <p className="eyebrow mb-4">What it is not</p>
            <p className="text-[15px] sm:text-base text-white/65 leading-relaxed">
              AISIA does <strong className="font-medium text-white/90">not</strong> provide
              professional advice — medical, legal, financial, therapeutic, or otherwise. When a
              domain may need a qualified human, it can help you see that clearly and arrive with{' '}
              <strong className="font-medium text-white/90">defined priorities and language</strong>{' '}
              for that conversation.
            </p>
          </LiquidPanel>
        </div>
      </div>
    </Section>
  )
}
