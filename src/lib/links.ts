/** AISIA app origin — set VITE_APP_URL in production (e.g. https://app.aisia.io). */
export const APP_URL = import.meta.env.VITE_APP_URL ?? 'http://localhost:5180'

export type SubscriptionPlan = 'monthly' | 'yearly_founding'

/**
 * Send visitors to the app. Auth, trial eligibility, and billing all live there —
 * the marketing site does not host sign-in or subscription logic.
 */
export function subscriptionUrl(plan?: SubscriptionPlan): string {
  const url = new URL('/subscription', APP_URL)
  url.searchParams.set('subscribe', '1')
  if (plan) url.searchParams.set('plan', plan)
  return url.toString()
}
