import { Hero } from '../sections/Hero'
import { Domains } from '../sections/Domains'
import { HowItWorks } from '../sections/HowItWorks'
import { Pricing } from '../sections/Pricing'
import { FinalCta } from '../sections/FinalCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Domains />
      <Pricing />
      <FinalCta />
    </>
  )
}
