import { motion } from 'framer-motion'
import {
  Layers,
  Radar,
  AlertTriangle,
  CalendarCheck,
  Radio,
  TrendingUp,
} from 'lucide-react'
import { Section } from '../components/ui/Section'
import { LiquidPanel } from '../components/ui/LiquidPanel'

const FEATURES = [
  {
    icon: Layers,
    accent: '#22d3ee',
    title: 'Living Canvas',
    body: 'A per-domain bento dashboard — insights, goals, actions, reminders, topic cloud, weekly pulse. Artifacts from your threads, not assignments from the app.',
    stat: '6 surfaces',
    statLabel: 'per canvas',
  },
  {
    icon: Radar,
    accent: '#a78bfa',
    title: 'Life Balance Radar',
    body: 'See momentum across eight domains at a glance — where you have been reflecting, where you have been quiet, where tension is building.',
    stat: '8 axes',
    statLabel: 'live radar',
  },
  {
    icon: AlertTriangle,
    accent: '#fb7185',
    title: 'Attention signals',
    body: 'Stalled goals, overdue actions, urgent reminders — surfaced so nothing important slips while you are busy living.',
    stat: 'Auto',
    statLabel: 'priority queue',
  },
  {
    icon: Radio,
    accent: '#fbbf24',
    title: 'Professional-help flags',
    body: 'When a thread surfaces complexity — financial, legal, medical, relational — AISIA can flag that a qualified human may help, with targets for that first conversation.',
    stat: 'You choose',
    statLabel: 'when to seek help',
  },
  {
    icon: CalendarCheck,
    accent: '#34d399',
    title: 'Weekly Review',
    body: 'A guided end-of-week reflection: what moved, what stalled, what deserves another thread. A ritual, not a notification.',
    stat: '5 min',
    statLabel: 'end-of-week',
  },
  {
    icon: TrendingUp,
    accent: '#60a5fa',
    title: 'Momentum, not streaks',
    body: 'No guilt-based streaks. Momentum tracks whether reflection is happening — direction and action stay yours.',
    stat: '0',
    statLabel: 'streak counters',
  },
]

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="What makes it work"
      heading={
        <>
          Organization for your priorities,
          <br /> across <span className="text-gradient-aurora">every domain</span>.
        </>
      }
      intro="Reflection produces the insight; structure keeps it usable. These surfaces help you see what matters in each part of life, stay on top of priorities, and know when a human professional belongs in the loop."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <LiquidPanel className="p-6 h-full" glow={`${f.accent}22`}>
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${f.accent}18`,
                    boxShadow: `0 0 22px ${f.accent}44`,
                  }}
                >
                  <f.icon className="w-5 h-5" style={{ color: f.accent }} />
                </div>
                <div className="text-right">
                  <p
                    className="font-mono text-lg font-semibold leading-none tabular-nums"
                    style={{ color: f.accent }}
                  >
                    {f.stat}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/40 mt-1">
                    {f.statLabel}
                  </p>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2 leading-tight">
                {f.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.body}</p>
            </LiquidPanel>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
