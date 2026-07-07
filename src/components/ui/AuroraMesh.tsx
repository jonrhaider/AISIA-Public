import { motion } from 'framer-motion'

export function AuroraMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[8%] left-[12%] w-[640px] h-[640px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.11) 0%, transparent 65%)',
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[4%] right-[8%] w-[720px] h-[720px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.09) 0%, transparent 65%)',
        }}
        animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[45%] right-[28%] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(251,113,133,0.07) 0%, transparent 65%)',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
