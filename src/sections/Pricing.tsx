import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { LiquidPanel } from '../components/ui/LiquidPanel'
import { subscriptionUrl, type SubscriptionPlan } from '../lib/links'

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
  plan?: SubscriptionPlan
  note?: string
}

const HOUSEHOLD_FEATURES = [
  'All 8 domains + guided threads for both partners',
  'Shared household canvas + personal private spaces',
  'You choose what stays private vs. what goes shared',
  'Life Balance radar + attention scoring',
  'Cross-domain conflict detection',
  'Unlimited history & search',
]

const TIERS: Tier[] = [
  {
    name: 'Free trial',
    eyebrow: 'Start here',
    price: '$0',
    cadence: 'for 14 days',
    accent: '#22d3ee',
    body: 'Every household gets a 14-day free trial — full access for you and your partner. Explore every domain, set up your shared canvas, and see how AISIA fits your life before you subscribe.',
    features: [
      '14 days · full household access',
      'Both partners included from day one',
      'All 8 domains + shared canvas',
      'Personal private threads + shared spaces',
      'No charge until the trial ends',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Monthly household',
    eyebrow: 'Pay as you go',
    price: '$15',
    cadence: 'per month · household',
    accent: '#a78bfa',
    featured: true,
    body: 'One subscription for your household — shared access with your significant other, with privacy separation built in. Cancel anytime.',
    features: HOUSEHOLD_FEATURES,
    cta: 'Start free trial',
    plan: 'monthly',
  },
  {
    name: 'Founding annual',
    eyebrow: 'Limited founding offer',
    price: '$99',
    cadence: 'per year · household',
    accent: '#fb7185',
    body: 'Lock in founding household pricing for life. Subscribe during this promotional window and your rate stays $99/year — even after the offer ends for everyone else.',
    features: [
      ...HOUSEHOLD_FEATURES,
      'Lifetime $99/year rate for your household',
      'Direct line to the team during early access',
      'Roadmap input + first access to new tools',
    ],
    cta: 'Start free trial',
    plan: 'yearly_founding',
    note: 'After this founding window closes, new households will pay $150/year. Yours stays $99.',
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
          <span className="text-gradient-aurora">Built for households.</span>
        </>
      }
      intro="AISIA is priced per household — not per person. Start with a 14-day free trial, then choose monthly or founding annual. Founding members are the first households to subscribe — locking in the lowest rate ever offered ($99/year for life), with direct input on the roadmap. No Enterprise tier. No per-seat math."
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

              <div className="mt-5 flex items-baseline gap-2 flex-wrap">
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

              {tier.note && (
                <p className="mt-5 text-xs text-white/45 leading-relaxed border-t border-white/[0.06] pt-4">
                  {tier.note}
                </p>
              )}

              <a
                href={subscriptionUrl(tier.plan)}
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

      <p className="mt-10 text-center text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
        <span className="text-white/70 font-medium">Joint household pricing</span> means one
        subscription covers you and your significant other — with separate private threads and a
        shared canvas you both control. You decide what stays personal and what you bring into
        the household view.
      </p>

      <p className="mt-4 text-center text-xs font-mono uppercase tracking-[0.18em] text-white/40">
        14-day free trial · card required at checkout · cancel anytime in billing settings
      </p>
    </Section>
  )
}
