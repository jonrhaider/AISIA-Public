import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { LiquidPanel } from './ui/LiquidPanel'

interface Turn {
  role: 'user' | 'assistant'
  text: string
}

const DEFAULT_TURNS: Turn[] = [
  {
    role: 'user',
    text: "Emma's swim class keeps colliding with Thursday family dinner and it's stressing everyone out.",
  },
  {
    role: 'assistant',
    text: "That tension has come up a few times now. What would an ideal week look like for family dinners — and what feels non-negotiable about swim? Let's name the trade-offs in your words first.",
  },
  {
    role: 'user',
    text: "We need at least one sit-down dinner together. Swim is non-negotiable for Emma this season.",
  },
]

export function ChatPreview({
  accent = '#a78bfa',
  glow = 'rgba(167,139,250,0.4)',
  guideLabel = 'Family thread',
  turns = DEFAULT_TURNS,
}: {
  accent?: string
  glow?: string
  guideLabel?: string
  turns?: Turn[]
}) {
  return (
    <LiquidPanel strong className="p-5 h-full flex flex-col" glow={glow}>
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/[0.06]">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${accent}20`, boxShadow: `0 0 18px ${glow}` }}
        >
          <span className="font-display text-sm font-bold" style={{ color: accent }}>
            AI
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{guideLabel}</p>
          <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">
            Guided reflection
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {turns.map((turn, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`flex ${turn.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                turn.role === 'user'
                  ? 'bg-white/[0.08] text-white/90 border border-white/[0.06] rounded-br-md'
                  : 'text-white/80 border-l-2 pl-4 pr-4 py-3 rounded-bl-md'
              }`}
              style={
                turn.role === 'assistant'
                  ? {
                      background: `${accent}0a`,
                      borderLeftColor: accent,
                    }
                  : undefined
              }
            >
              {turn.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.08] px-3 py-2.5">
        <span className="text-xs text-white/35">Continue reflecting…</span>
        <Send className="w-3.5 h-3.5 text-white/25 ml-auto" />
      </div>
    </LiquidPanel>
  )
}
