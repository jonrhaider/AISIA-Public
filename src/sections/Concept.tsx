import { motion } from 'framer-motion'
import { MessageSquare, Layers, Sparkles } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { LiquidPanel } from '../components/ui/LiquidPanel'

const CONTRASTS = [
  {
    label: 'Instead of',
    items: [
      'Priorities scattered across apps, notes, and memory',
      'Generic AI that answers instead of helping you organize',
      'Tools that prescribe what you should do',
      'One inbox for everything — context always bleeding',
    ],
    tone: 'muted',
  },
  {
    label: 'AISIA gives you',
    items: [
      'Eight domains — each with its own thread and canvas',
      'Artifacts extracted from your reflections',
      'A clear view of what matters in each part of life',
      'Signals when professional help may be worth seeking',
    ],
    tone: 'accent',
  },
] as const

export function Concept() {
  return (
    <Section
      id="concept"
      eyebrow="The idea"
      heading={
        <>
          Most tools add <em className="not-italic text-white/50">noise</em>.
          <br />
          AISIA helps you stay <span className="text-gradient-aurora">organized</span>.
        </>
      }
      intro="A full life has many moving parts — career, family, finances, health, home, and more. AISIA gives each domain a dedicated space to reflect with AI, capture what emerges, and keep your priorities visible. Self-improvement follows from that clarity — not from someone else&apos;s playbook."
    >
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {CONTRASTS.map((col) => (
          <LiquidPanel
            key={col.label}
            className={col.tone === 'accent' ? 'p-7 sm:p-8' : 'p-7 sm:p-8 opacity-90'}
            glow={col.tone === 'accent' ? 'rgba(34,211,238,0.3)' : undefined}
          >
            <p
              className={`eyebrow mb-5 ${col.tone === 'accent' ? 'text-aurora-cyan/80' : ''}`}
            >
              {col.label}
            </p>
            <ul className="space-y-4">
              {col.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`flex items-start gap-3 text-[15px] leading-relaxed ${col.tone === 'accent' ? 'text-white/85' : 'text-white/50'}`}
                >
                  <span
                    className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${col.tone === 'accent' ? 'bg-aurora-cyan' : 'bg-white/25'}`}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </LiquidPanel>
        ))}
      </div>

      <div className="mt-14 grid sm:grid-cols-3 gap-4">
        <ConceptTile
          icon={MessageSquare}
          title="Reflect in a thread"
          body="Talk through priorities in a domain-specific guided conversation. AI listens and follows up — no forms, no prescriptions."
          accent="#22d3ee"
        />
        <ConceptTile
          icon={Sparkles}
          title="Extract artifacts"
          body="Insights, goals, actions, reminders — structured from what you said, with confidence on each extraction."
          accent="#a78bfa"
        />
        <ConceptTile
          icon={Layers}
          title="Stay organized on canvas"
          body="Each domain gets a living dashboard. Your priorities, visible and revisitable. You decide what matters next."
          accent="#fb7185"
        />
      </div>
    </Section>
  )
}

function ConceptTile({
  icon: Icon,
  title,
  body,
  accent,
}: {
  icon: typeof MessageSquare
  title: string
  body: string
  accent: string
}) {
  return (
    <LiquidPanel className="p-6" glow={`${accent}33`}>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${accent}18`, boxShadow: `0 0 20px ${accent}33` }}
      >
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{body}</p>
    </LiquidPanel>
  )
}
