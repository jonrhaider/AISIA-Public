import { motion } from 'framer-motion'
import {
  HeartPulse,
  HeartHandshake,
  Briefcase,
  Landmark,
  Users,
  Home,
  Globe,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { LIFE_AREAS } from '../data/domains'

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

/**
 * The signature visual for the hero: eight life-domain nodes orbiting a
 * central AISIA core. Two counter-rotating rings, pure CSS + SVG, respects
 * reduced-motion via the global MotionConfig.
 */
export function OrbitalHero({ size = 420 }: { size?: number }) {
  const radiusOuter = size * 0.44
  const radiusInner = size * 0.28

  // Split the 8 domains: 5 outer, 3 inner for visual variety
  const outer = LIFE_AREAS.slice(0, 5)
  const inner = LIFE_AREAS.slice(5)

  return (
    <div
      className="relative select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(167,139,250,0.14) 40%, transparent 70%)',
        }}
      />

      {/* Outer dashed ring */}
      <div
        className="absolute rounded-full border border-dashed border-white/10"
        style={{
          inset: `${(size - radiusOuter * 2) / 2}px`,
        }}
      />
      {/* Inner dashed ring */}
      <div
        className="absolute rounded-full border border-dashed border-white/8"
        style={{
          inset: `${(size - radiusInner * 2) / 2}px`,
        }}
      />

      {/* Outer rotating group */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: 'linear', repeat: Infinity }}
      >
        {outer.map((area, i) => {
          const angle = (i / outer.length) * Math.PI * 2 - Math.PI / 2
          const x = size / 2 + Math.cos(angle) * radiusOuter
          const y = size / 2 + Math.sin(angle) * radiusOuter
          const Icon = ICONS[area.icon] ?? Sparkles
          return (
            <motion.div
              key={area.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
              animate={{ rotate: -360 }}
              transition={{ duration: 90, ease: 'linear', repeat: Infinity }}
            >
              <DomainOrb accent={area.accent} glow={area.glow} icon={Icon} />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Inner counter-rotating group */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        {inner.map((area, i) => {
          const angle = (i / inner.length) * Math.PI * 2 + Math.PI / 6
          const x = size / 2 + Math.cos(angle) * radiusInner
          const y = size / 2 + Math.sin(angle) * radiusInner
          const Icon = ICONS[area.icon] ?? Sparkles
          return (
            <motion.div
              key={area.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
            >
              <DomainOrb accent={area.accent} glow={area.glow} icon={Icon} small />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(34,211,238,0.55) 0%, transparent 70%)',
              width: size * 0.34,
              height: size * 0.34,
              left: -size * 0.17,
              top: -size * 0.17,
            }}
          />
          <div
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full liquid-glass-strong flex flex-col items-center justify-center"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), rgba(167,139,250,0.2) 50%, rgba(3,7,18,0.85) 100%)',
              boxShadow:
                '0 0 60px rgba(34,211,238,0.4), inset 0 0 30px rgba(167,139,250,0.2)',
            }}
          >
            <span className="font-display text-xl font-bold text-white leading-none tracking-tight">
              AI<span className="inline-block scale-x-[-1]">S</span>IA
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-white/50">
              Core
            </span>
          </div>
          {/* Sync pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-aurora-cyan/40 pointer-events-none"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 2.4, ease: 'easeOut', repeat: Infinity }}
            style={{ width: size * 0.32, height: size * 0.32, left: -size * 0.16, top: -size * 0.16 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

function DomainOrb({
  accent,
  glow,
  icon: Icon,
  small = false,
}: {
  accent: string
  glow: string
  icon: LucideIcon
  small?: boolean
}) {
  const dim = small ? 40 : 48
  const iconSize = small ? 16 : 20
  return (
    <div
      className="rounded-2xl liquid-glass-strong flex items-center justify-center transition-transform hover:scale-110"
      style={{
        width: dim,
        height: dim,
        background: `${accent}18`,
        boxShadow: `0 0 24px ${glow}, inset 0 0 12px ${accent}22`,
      }}
    >
      <Icon width={iconSize} height={iconSize} style={{ color: accent }} />
    </div>
  )
}
