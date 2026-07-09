import { motion } from 'framer-motion'
import { MessageSquare, Brain, Layers, ArrowRight, Zap } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { LiquidPanel } from '../components/ui/LiquidPanel'
import { ChatPreview } from '../components/ChatPreview'
import { CanvasPreview } from '../components/CanvasPreview'

const STEPS = [
  {
    n: '01',
    icon: MessageSquare,
    accent: '#22d3ee',
    title: 'You reflect',
    body: 'Open the thread for the domain you want to organize. Talk through what matters. The assistant guides the conversation — it does not steer your conclusions.',
  },
  {
    n: '02',
    icon: Brain,
    accent: '#a78bfa',
    title: 'AISIA extracts',
    body: 'Your words become structured artifacts — insights, goals, actions, reminders, topics — with a confidence score on each extraction.',
  },
  {
    n: '03',
    icon: Layers,
    accent: '#fb7185',
    title: 'Your canvas holds it',
    body: 'Everything surfaced lands on a per-domain canvas you can revisit. What you do next is always your call.',
  },
]

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      heading={
        <>
          Reflect <span className="text-gradient-aurora">→</span> Extract{' '}
          <span className="text-gradient-aurora">→</span> Canvas.
        </>
      }
      intro="A three-step pipeline behind every message: reflect on your priorities, shape them into artifacts, and see them organized in one place. Reflection is the method — structure is what makes it stick."
    >
      <div className="mb-14">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex-1 flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="flex-1 min-w-0"
              >
                <LiquidPanel className="p-5 h-full" glow={`${step.accent}33`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${step.accent}20`,
                        boxShadow: `0 0 22px ${step.accent}44`,
                      }}
                    >
                      <step.icon className="w-4 h-4" style={{ color: step.accent }} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        Step {step.n}
                      </p>
                      <h3 className="font-display text-base font-semibold text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{step.body}</p>
                </LiquidPanel>
              </motion.div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="w-5 h-5 text-white/20 shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="chip-mono !bg-void/80 !border-aurora-cyan/40">
            <Zap className="w-3 h-3 text-aurora-cyan animate-pulse" />
            <span className="text-aurora-cyan">Live extraction</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          <ChatPreview />
          <CanvasPreview />
        </div>

        <p className="mt-6 text-center text-[11px] font-mono uppercase tracking-[0.2em] text-white/35">
          Illustrative mock — reflective prompts, not professional advice
        </p>
      </motion.div>
    </Section>
  )
}
