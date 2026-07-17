import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Section } from '../components/ui/Section'

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Does AISIA give professional advice?',
    a: 'No. AISIA is a reflection and organization system — it helps you articulate priorities, extract structure from conversation, and keep each domain in one clear place. It does not provide medical, legal, financial, therapeutic, or other professional advice. When a thread surfaces an area where qualified help may be useful, the system can flag it and help you define what to bring to that conversation.',
  },
  {
    q: 'Is this for individuals or couples?',
    a: 'One household subscription covers you and your partner — each person gets private threads plus shared spaces. Solo users are welcome; you do not need a partner to subscribe.',
  },
  {
    q: 'Is the app available now?',
    a: 'Yes, for early access via the 14-day free trial. Start from any CTA on this site — you will land in the AISIA app to set up your household. Features continue to roll out in waves through 2026.',
  },
  {
    q: 'Is this just ChatGPT with a wrapper?',
    a: 'No. AISIA maintains eight separate guided threads with domain-specific memory, extraction rules, and canvases. Your conversations produce structured artifacts — insights, goals, actions, reminders — that persist per domain. The focus is reflection and organization, not open-ended answers.',
  },
  {
    q: 'How is this different from Day One or Notion?',
    a: 'Day One and Notion give you a blank page. AISIA gives you domain-specific guided threads, AI extraction into artifacts, a per-domain canvas, and cross-domain conflict detection — reflection with structure, not a journal or wiki.',
  },
  {
    q: 'Where does my data live?',
    a: "Your data is yours. During early access, everything runs in your private account. We do not sell, train on, or share your content. We do not use your conversations to train AI models. You can export or delete everything with a single action.",
  },
  {
    q: 'When can I actually use it?',
    a: 'Start a 14-day free trial from any CTA — you will land in the AISIA app to set up your household. Early access continues through 2026; founding annual pricing is available now.',
  },
  {
    q: "What if I don't need all eight domains?",
    a: 'AISIA is organized around eight life domains, but you do not have to use every lane on day one. Household pricing covers both partners either way — start where reflection matters most and grow into the rest over time.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section
      id="faq"
      eyebrow="Questions"
      heading={
        <>
          Common <span className="text-gradient-aurora">questions</span>.
        </>
      }
      intro="Have another? Email us at aisia.io@haibuilt.com."
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="rounded-2xl liquid-glass overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-display text-base sm:text-lg font-semibold text-white">
                  {item.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                    isOpen
                      ? 'bg-aurora-cyan/15 border-aurora-cyan/40 text-aurora-cyan'
                      : 'border-white/10 text-white/50'
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-[15px] leading-relaxed text-white/65">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
