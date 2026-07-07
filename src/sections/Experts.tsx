import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HeartPulse,
  HeartHandshake,
  Briefcase,
  Landmark,
  Users,
  Home,
  Globe,
  Sparkles,
  Quote,
  type LucideIcon,
} from 'lucide-react'
import { Section } from '../components/ui/Section'
import { LIFE_AREAS, GUIDE_PROMPTS } from '../data/domains'

const ICONS: Record<string, LucideIcon> = {
  'heart-pulse': HeartPulse,
  'heart-handshake': HeartHandshake,
  briefcase: Briefcase,
  landmark: Landmark,
  users: Users,
  home: Home,
  globe: Globe,
  sparkles: Sparkles,
}

const ROTATE_MS = 5000

export function Experts() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = LIFE_AREAS[activeIndex]
  const ActiveIcon = ICONS[active.icon] ?? Sparkles

  useEffect(() => {
    const t = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % LIFE_AREAS.length)
    }, ROTATE_MS)
    return () => window.clearInterval(t)
  }, [])

  return (
    <Section
      id="guides"
      eyebrow="Guided threads"
      heading={
        <>
          Eight domains to <span className="text-gradient-aurora">stay organized</span>.
        </>
      }
      intro="Each domain opens with a reflective prompt — not a persona claiming credentials. The assistant helps you think through priorities and extract artifacts. It does not diagnose, prescribe, or replace a professional."
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl liquid-glass-strong p-8 sm:p-10 overflow-hidden min-h-[280px]"
        >
          <div
            className="absolute -top-32 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60 pointer-events-none"
            style={{ background: active.glow }}
          />
          <div
            className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ background: active.glow }}
          />

          <div className="relative flex items-start gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: `${active.accent}22`,
                boxShadow: `0 0 32px ${active.glow}`,
              }}
            >
              <ActiveIcon className="w-6 h-6" style={{ color: active.accent }} />
            </div>
            <div className="min-w-0">
              <p
                className="font-mono text-[11px] uppercase tracking-[0.22em]"
                style={{ color: active.accent, opacity: 0.85 }}
              >
                {active.name}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mt-1">
                {active.guideLabel}
              </h3>
            </div>
          </div>

          <div className="relative">
            <Quote
              className="w-8 h-8 -mb-2 opacity-30"
              style={{ color: active.accent }}
              strokeWidth={1.5}
            />
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-xl leading-relaxed text-white/85 font-display font-medium italic"
              >
                "{GUIDE_PROMPTS[active.id]}"
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
            {LIFE_AREAS.map((area, i) => {
              const Icon = ICONS[area.icon] ?? Sparkles
              const isActive = i === activeIndex
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`text-left rounded-xl border p-3 transition-all ${
                    isActive
                      ? 'liquid-glass-strong'
                      : 'liquid-glass hover:border-white/20'
                  }`}
                  style={
                    isActive
                      ? { borderColor: `${area.accent}55` }
                      : undefined
                  }
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `${area.accent}18`,
                        boxShadow: isActive ? `0 0 16px ${area.glow}` : undefined,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: area.accent }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white leading-tight truncate">
                        {area.guideLabel}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-white/40 truncate">
                        {area.name}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
          <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/35 text-center lg:text-left">
            Click one to preview · auto-rotates every {ROTATE_MS / 1000}s
          </p>
        </div>
      </div>
    </Section>
  )
}
