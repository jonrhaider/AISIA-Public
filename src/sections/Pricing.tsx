import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { LiquidPanel } from '../components/ui/LiquidPanel'

interface Tier {
  name: string
  eyebrow: string
  price: string
  cadence: string
  accent: string
  featured?: boolean
  body: string
  features: string[]
  cta: string
  href: string
}

const TIERS: Tier[] = [
  {
    name: 'Explorer',
    eyebrow: 'Try the concept',
    price: '$0',
    cadence: 'forever',
    accent: '#22d3ee',
    body: 'Two domains, two guided threads, and the full canvas experience — free for as long as you want.',
    features: [
      '2 life domains of your choice',
      'Full living-canvas dashboard',
      'Weekly Review',
      'Local-only history',
    ],
    cta: 'Start free',
    href: '#waitlist',
  },
  {
    name: 'Complete',
    eyebrow: 'The whole life',
    price: '$14',
    cadence: 'per month',
    accent: '#a78bfa',
    featured: true,
    body: 'All eight domains, cross-domain signals, unlimited history, and priority extraction.',
    features: [
      'All 8 domains + guided threads',
      'Life Balance radar + attention scoring',
      'Cross-domain conflict detection',
      'Unlimited history & search',
      'Priority extraction pipeline',
    ],
    cta: 'Join waitlist',
    href: '#waitlist',
  },
  {
    name: 'Founding',
    eyebrow: 'Shape v1',
    price: '$99',
    cadence: 'per year · lifetime lock',
    accent: '#fb7185',
    body: 'Lock in founding pricing forever. Direct line to the team. Vote on the roadmap. First access to new domains and features.',
    features: [
      'Everything in Complete',
      'Lifetime founding rate',
      'Private Discord + founder line',
      'Roadmap voting',
      'First access to new reflection tools',
    ],
    cta: 'Apply for founding',
    href: '#waitlist',
  },
]

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      align="center"
      heading={
        <>
          Fair pricing.
          <br />
          <span className="text-gradient-aurora">No enterprise dance.</span>
        </>
      }
      intro="AISIA is a subscription that stays out of your way. No credit card required to explore. No hidden Enterprise tier. When it ships, this is what it costs."
    >
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="relative"
          >
            {tier.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div
                  className="chip-mono !bg-void/90"
                  style={{ borderColor: `${tier.accent}66`, color: tier.accent }}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Most popular</span>
                </div>
              </div>
            )}
            <LiquidPanel
              strong={tier.featured}
              glow={tier.featured ? tier.accent + '44' : `${tier.accent}22`}
              className={`h-full p-7 sm:p-8 flex flex-col ${tier.featured ? 'lg:scale-[1.02]' : ''}`}
            >
              <p
                className="font-mono text-[10px] uppercase tracking-[0.22em]"
                style={{ color: tier.accent, opacity: 0.85 }}
              >
                {tier.eyebrow}
              </p>
              <h3 className="font-display text-2xl font-bold text-white mt-2">
                {tier.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className="font-display text-5xl font-bold tabular-nums"
                  style={{ color: tier.featured ? tier.accent : 'white' }}
                >
                  {tier.price}
                </span>
                <span className="text-sm text-white/45 font-mono">
                  {tier.cadence}
                </span>
              </div>

              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                {tier.body}
              </p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: tier.accent }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-7 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] ${tier.featured ? 'text-void' : 'ghost-btn'}`}
                style={
                  tier.featured
                    ? {
                        background: `linear-gradient(135deg, ${tier.accent}, ${tier.accent}cc)`,
                        boxShadow: `0 0 28px ${tier.accent}55`,
                      }
                    : undefined
                }
              >
                {tier.cta}
              </a>
            </LiquidPanel>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs font-mono uppercase tracking-[0.18em] text-white/40">
        Pricing shown for launch · pre-launch access is invite-only via the waitlist
      </p>
    </Section>
  )
}
