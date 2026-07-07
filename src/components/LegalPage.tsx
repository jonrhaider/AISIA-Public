import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export interface LegalSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export interface LegalDocument {
  title: string
  lastUpdated: string
  intro: string
  disclaimer?: string
  sections: LegalSection[]
}

interface LegalPageProps {
  document: LegalDocument
}

export function LegalPage({ document }: LegalPageProps) {
  return (
    <article className="relative pt-28 pb-24">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to home
        </Link>

        <header className="mb-10">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {document.title}
          </h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Last updated {document.lastUpdated}
          </p>
        </header>

        {document.disclaimer && (
          <div className="liquid-glass rounded-xl px-5 py-4 mb-10 border-aurora-amber/20">
            <p className="text-sm text-white/70 leading-relaxed">{document.disclaimer}</p>
          </div>
        )}

        <div className="liquid-glass-strong rounded-2xl px-6 sm:px-8 py-8 sm:py-10">
          <p className="text-base text-white/75 leading-relaxed mb-10">{document.intro}</p>

          <div className="space-y-10">
            {document.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-[15px] text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-[15px] text-white/70 leading-relaxed">
                      {section.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
