import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface LiquidPanelProps {
  children: ReactNode
  className?: string
  strong?: boolean
  glow?: string
  delay?: number
  syncing?: boolean
  as?: 'div' | 'section' | 'article'
}

export function LiquidPanel({
  children,
  className = '',
  strong = false,
  glow,
  delay = 0,
  syncing = false,
}: LiquidPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden ${strong ? 'liquid-glass-strong' : 'liquid-glass'} ${syncing ? 'sync-pulse' : ''} ${className}`}
    >
      {glow && (
        <>
          <div
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: glow }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full blur-2xl opacity-20 pointer-events-none"
            style={{ background: glow }}
          />
        </>
      )}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
