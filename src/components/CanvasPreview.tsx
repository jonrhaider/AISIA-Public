import { motion } from 'framer-motion'
import { Lightbulb, Target, CheckSquare, Bell, TrendingUp } from 'lucide-react'
import { LiquidPanel } from './ui/LiquidPanel'

/**
 * A miniature bento-canvas mock used in the "How it works" and "Features"
 * sections to make the "living canvas" story tangible without needing the app.
 * Not connected to real data — purely a visual demonstration.
 */
export function CanvasPreview({
  accent = '#a78bfa',
  glow = 'rgba(167,139,250,0.4)',
  domainName = 'Family & Parenting',
  guideLabel = 'Family thread',
}: {
  accent?: string
  glow?: string
  domainName?: string
  guideLabel?: string
}) {
  const insights = [
    'Bedtime routine breaks down after 8:30pm — earlier wind-down needed',
    "Emma's swim class conflicts with weekly family dinner",
  ]
  const goals = [{ name: 'Weekly one-on-one with each kid', progress: 68 }]
  const actions = [
    { text: 'Move Thursday dinner to Wednesday', done: false },
    { text: 'Schedule school parent conference', done: true },
  ]
  const reminders = [{ text: 'Emma parent-teacher · Thu 4pm', urgent: true }]

  return (
    <LiquidPanel strong className="p-5" glow={glow}>
      {/* Canvas header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
            {guideLabel}
          </p>
          <h3 className="font-display text-lg font-semibold text-white mt-0.5">
            {domainName} · Canvas
          </h3>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider"
          style={{ background: `${accent}18`, color: accent }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accent }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          Live sync
        </div>
      </div>

      {/* Momentum + pulse mini chart */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <MomentumCard accent={accent} value={72} label="Momentum" />
        <PulseCard accent={accent} />
      </div>

      {/* Insights + Goals row */}
      <div className="grid sm:grid-cols-2 gap-3">
        <MiniCard
          icon={Lightbulb}
          title="Insights"
          count={insights.length}
          accent={accent}
        >
          <ul className="space-y-1.5">
            {insights.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="text-[11px] leading-snug text-white/65 border-l-2 pl-2"
                style={{ borderColor: `${accent}55` }}
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </MiniCard>

        <MiniCard icon={Target} title="Goals" count={goals.length} accent={accent}>
          {goals.map((g) => (
            <div key={g.name}>
              <p className="text-[11px] text-white/75 leading-snug mb-1.5">{g.name}</p>
              <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${accent}, ${accent}aa)`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${g.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
              <p className="text-[9px] font-mono text-white/35 mt-1">
                {g.progress}% complete
              </p>
            </div>
          ))}
        </MiniCard>
      </div>

      {/* Actions + Reminders row */}
      <div className="grid sm:grid-cols-2 gap-3 mt-3">
        <MiniCard
          icon={CheckSquare}
          title="Actions"
          count={actions.length}
          accent={accent}
        >
          <ul className="space-y-1.5">
            {actions.map((a) => (
              <li
                key={a.text}
                className="flex items-start gap-2 text-[11px] leading-snug text-white/70"
              >
                <span
                  className={`mt-[3px] w-3 h-3 rounded border shrink-0 flex items-center justify-center ${
                    a.done ? '' : 'border-white/25'
                  }`}
                  style={
                    a.done
                      ? { background: accent, borderColor: accent }
                      : undefined
                  }
                >
                  {a.done && <span className="text-void text-[8px]">✓</span>}
                </span>
                <span className={a.done ? 'line-through opacity-50' : ''}>
                  {a.text}
                </span>
              </li>
            ))}
          </ul>
        </MiniCard>

        <MiniCard
          icon={Bell}
          title="Reminders"
          count={reminders.length}
          accent={accent}
        >
          <ul className="space-y-1.5">
            {reminders.map((r) => (
              <li
                key={r.text}
                className={`flex justify-between items-center text-[11px] rounded-lg border px-2 py-1.5 ${
                  r.urgent
                    ? 'border-aurora-rose/25 bg-aurora-rose/[0.05]'
                    : 'border-white/[0.06]'
                }`}
              >
                <span className="text-white/70">{r.text}</span>
                {r.urgent && (
                  <span className="text-[9px] font-mono uppercase tracking-wider text-aurora-rose">
                    Urgent
                  </span>
                )}
              </li>
            ))}
          </ul>
        </MiniCard>
      </div>
    </LiquidPanel>
  )
}

function MomentumCard({
  accent,
  value,
  label,
}: {
  accent: string
  value: number
  label: string
}) {
  return (
    <div className="col-span-1 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2.5">
      <div className="flex items-center gap-1.5 mb-1">
        <TrendingUp className="w-3 h-3" style={{ color: accent }} />
        <p className="text-[9px] font-mono uppercase tracking-wider text-white/40">
          {label}
        </p>
      </div>
      <p
        className="font-mono text-2xl font-semibold tabular-nums leading-none"
        style={{ color: accent }}
      >
        {value}
      </p>
    </div>
  )
}

function PulseCard({ accent }: { accent: string }) {
  const bars = [40, 55, 48, 72, 60, 78, 82]
  return (
    <div className="col-span-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2.5">
      <p className="text-[9px] font-mono uppercase tracking-wider text-white/40 mb-2">
        Weekly pulse
      </p>
      <div className="flex items-end gap-1 h-10">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
            className="flex-1 rounded-sm"
            style={{
              background: `linear-gradient(180deg, ${accent} 0%, ${accent}44 100%)`,
              minHeight: 4,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function MiniCard({
  icon: Icon,
  title,
  count,
  accent,
  children,
}: {
  icon: typeof Lightbulb
  title: string
  count: number
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3">
      <div className="flex items-center gap-1.5 mb-2.5">
        <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
        <span className="text-xs font-semibold text-white/85">{title}</span>
        <span className="ml-auto text-[10px] font-mono text-white/30 tabular-nums">
          {count}
        </span>
      </div>
      {children}
    </div>
  )
}
