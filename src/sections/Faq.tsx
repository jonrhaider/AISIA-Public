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
    q: 'Is this just ChatGPT with a wrapper?',
    a: 'No. AISIA maintains eight separate guided threads with domain-specific memory, extraction rules, and canvases. Your conversations produce structured artifacts — insights, goals, actions, reminders — that persist per domain. The focus is reflection and organization, not open-ended answers.',
  },
  {
    q: 'Where does my data live?',
    a: "Your data is yours. During early access, everything runs locally or in your private account. We do not sell, train on, or share your content. At launch, you'll be able to export or delete everything with a single action.",
  },
  {
    q: 'When can I actually use it?',
    a: "The v2 prototype is complete internally. Public early access rolls out in waves through 2026 — waitlist first, founding members next, then general availability.",
  },
  {
    q: "What if I don't need all eight domains?",
    a: "Explorer lets you pick any two domains free forever. If you outgrow it, upgrading is one click. The point is reflection where you need it — not filling every lane.",
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
          The five things <span className="text-gradient-aurora">everyone asks</span>.
        </>
      }
      intro="If you have another, the waitlist form is also our fastest inbox."
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
