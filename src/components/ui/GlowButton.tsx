import { motion } from 'framer-motion'
import type { ReactNode, MouseEventHandler } from 'react'

interface GlowButtonProps {
  children: ReactNode
  accent?: string
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  href?: string
  ariaLabel?: string
}

export function GlowButton({
  children,
  accent = '#22d3ee',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  type = 'button',
  onClick,
  href,
  ariaLabel,
}: GlowButtonProps) {
  const isGhost = variant === 'ghost'
  const padding = size === 'lg' ? 'px-6 py-3.5 text-[15px]' : 'px-4 py-2.5 text-sm'

  const commonClass = `relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ${padding} ${isGhost ? 'ghost-btn' : 'text-void'} ${className}`

  const style = isGhost
    ? undefined
    : {
        background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
        boxShadow: `0 0 32px ${accent}44, 0 8px 24px rgba(0,0,0,0.35)`,
      }

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        className={commonClass}
        style={style}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={commonClass}
      style={style}
    >
      {children}
    </motion.button>
  )
}
