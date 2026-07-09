import { Link } from 'react-router-dom'
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
import { Section } from '../components/ui/Section'
import { LIFE_AREAS, type LifeArea } from '../data/domains'

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

function DomainCard({ area }: { area: LifeArea }) {
  const Icon = ICONS[area.icon] ?? Sparkles
  return (
    <article
      className="group relative w-[280px] sm:w-[300px] shrink-0 rounded-2xl liquid-glass p-6 overflow-hidden hover:border-white/20 transition-colors"
    >
      <div
        className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
        style={{ background: area.glow }}
      />
      <div
        className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: `${area.accent}18`,
          boxShadow: `0 0 22px ${area.glow}`,
        }}
      >
        <Icon className="w-[22px] h-[22px]" style={{ color: area.accent }} />
      </div>
      <h3 className="relative font-display text-lg font-semibold text-white leading-tight">
        {area.name}
      </h3>
      <p
        className="relative mt-1 font-mono text-[10px] uppercase tracking-[0.18em]"
        style={{ color: area.accent, opacity: 0.8 }}
      >
        {area.guideLabel}
      </p>
      <p className="relative mt-4 text-sm text-white/55 leading-relaxed">
        {area.description}
      </p>
      <div className="relative mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-wider text-white/35">
          {area.tagline}
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: area.accent, boxShadow: `0 0 10px ${area.glow}` }}
        />
      </div>
    </article>
  )
}

export function Domains() {
  // Duplicate the set so the CSS -50% translate loops seamlessly.
  const track = [...LIFE_AREAS, ...LIFE_AREAS]

  return (
    <Section
      id="domains"
      eyebrow="Eight life domains"
      heading={
        <>
          Eight domains for <span className="text-gradient-aurora">every</span> part of your life.
        </>
      }
      intro="Eight dedicated spaces — one per domain — each with its own thread, canvas, and priorities. Marriage, money, health, home, and the rest, organized separately."
    >
      <div
        className="relative left-1/2 w-[min(88vw,1600px)] -translate-x-1/2"
        aria-label="Eight life domains scrolling carousel"
      >
        <div className="domains-marquee domains-marquee-mask overflow-hidden motion-reduce:overflow-x-auto">
          <div className="domains-marquee-track py-1">
            {track.map((area, i) => (
              <DomainCard
                key={`${area.id}-${i < LIFE_AREAS.length ? 'a' : 'b'}`}
                area={area}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-white/50">
        Curious how each domain opens?{' '}
        <Link
          to="/about#guides"
          className="text-aurora-cyan/90 hover:text-aurora-cyan transition-colors underline underline-offset-4 decoration-aurora-cyan/30"
        >
          See guided threads on About
        </Link>
        .
      </p>
    </Section>
  )
}
