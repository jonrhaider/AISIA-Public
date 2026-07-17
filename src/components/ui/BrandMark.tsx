interface BrandMarkProps {
  size?: number
  className?: string
  showWord?: boolean
  wordClassName?: string
}

/**
 * The canonical AISIA brand mark: dark rounded rectangle with a cyan orbit,
 * cyan core, and three orbital dots in violet, rose, and amber.
 * Enlarged, not redrawn, from prototype-2/public/favicon.svg.
 */
export function BrandMark({
  size = 28,
  className = '',
  showWord = false,
  wordClassName = '',
}: BrandMarkProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#030712" />
        <rect
          width="32"
          height="32"
          rx="8"
          fill="url(#brand-mark-glow)"
          opacity="0.35"
        />
        <circle
          cx="16"
          cy="16"
          r="8"
          stroke="#22d3ee"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <circle cx="16" cy="16" r="3" fill="#22d3ee" />
        <circle cx="16" cy="8" r="1.5" fill="#a78bfa" />
        <circle cx="23" cy="20" r="1.5" fill="#fb7185" />
        <circle cx="9" cy="20" r="1.5" fill="#fbbf24" />
        <defs>
          <radialGradient
            id="brand-mark-glow"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {showWord && (
        <span
          className={`font-display font-bold tracking-tight text-white ${wordClassName}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          AISIA
        </span>
      )}
    </div>
  )
}
