import { AboutIntro } from '../sections/AboutIntro'
import { Reflection } from '../sections/Reflection'
import { Concept } from '../sections/Concept'
import { Experts } from '../sections/Experts'
import { Features } from '../sections/Features'
import { Faq } from '../sections/Faq'
import { FinalCta } from '../sections/FinalCta'

export function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Reflection />
      <Concept />
      <Experts />
      <Features />
      <Faq />
      <FinalCta />
    </>
  )
}
