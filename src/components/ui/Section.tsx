import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  eyebrow?: string
  heading?: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
  innerClassName?: string
  align?: 'left' | 'center'
}

export function Section({
  id,
  eyebrow,
  heading,
  intro,
  children,
  className = '',
  innerClassName = '',
  align = 'left',
}: SectionProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {(eyebrow || heading || intro) && (
          <header className={`mb-12 sm:mb-16 max-w-3xl ${alignClass}`}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {heading && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                {heading}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
                {intro}
              </p>
            )}
          </header>
        )}
        <div className={innerClassName}>{children}</div>
      </div>
    </section>
  )
}
