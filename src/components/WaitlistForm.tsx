import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { currentEntry, isValidEmail, saveEntry, clearEntry } from '../lib/waitlist'

interface WaitlistFormProps {
  id?: string
  variant?: 'hero' | 'inline'
  className?: string
}

export function WaitlistForm({ id, variant = 'hero', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const existing = currentEntry()
    if (existing) {
      setEmail(existing.email)
      setState('success')
    }
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('That email address looks off. Try again?')
      setState('error')
      return
    }
    setState('submitting')
    setError(null)
    // Simulate a short network hop so the CTA feels alive.
    window.setTimeout(() => {
      saveEntry(email)
      setState('success')
    }, 620)
  }

  const handleReset = () => {
    clearEntry()
    setEmail('')
    setState('idle')
    setError(null)
  }

  const isHero = variant === 'hero'
  const inputBase =
    'w-full rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/30 focus:border-aurora-cyan/50 transition-all font-sans'
  const inputSize = isHero ? 'text-base px-4 py-3.5' : 'text-sm px-4 py-3'

  return (
    <div id={id} className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="liquid-glass rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-aurora-cyan/20 border border-aurora-cyan/40 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-aurora-cyan" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/85 font-medium">You're on the list.</p>
              <p className="text-xs text-white/50 truncate">
                We'll reach out to {email} when your access opens.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] font-mono uppercase tracking-wider text-white/40 hover:text-white/70 transition-colors shrink-0"
            >
              Change
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`flex flex-col sm:flex-row gap-2.5 ${isHero ? 'sm:gap-3' : ''}`}
            noValidate
          >
            <label className="sr-only" htmlFor={`${id ?? 'waitlist'}-email`}>
              Email address
            </label>
            <input
              id={`${id ?? 'waitlist'}-email`}
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@yourdomain.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (state === 'error') setState('idle')
              }}
              disabled={state === 'submitting'}
              className={`${inputBase} ${inputSize} flex-1 min-w-0`}
              aria-invalid={state === 'error'}
              aria-describedby={state === 'error' ? `${id ?? 'waitlist'}-error` : undefined}
            />
            <motion.button
              type="submit"
              disabled={state === 'submitting'}
              whileHover={state === 'submitting' ? undefined : { scale: 1.02 }}
              whileTap={state === 'submitting' ? undefined : { scale: 0.98 }}
              className={`shrink-0 inline-flex items-center justify-center gap-2 rounded-xl font-medium text-void transition-all duration-300 ${isHero ? 'px-6 py-3.5 text-[15px]' : 'px-5 py-3 text-sm'}`}
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                boxShadow: '0 0 32px rgba(34,211,238,0.35), 0 8px 24px rgba(0,0,0,0.35)',
              }}
            >
              {state === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending</span>
                </>
              ) : (
                <>
                  <span>Join waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
      {state === 'error' && error && (
        <p
          id={`${id ?? 'waitlist'}-error`}
          className="mt-2 text-xs font-mono text-aurora-rose"
          role="alert"
        >
          {error}
        </p>
      )}
      {state !== 'success' && (
        <p className="mt-3 text-[11px] text-white/40 leading-relaxed">
          No spam. Just launch news + early access.{' '}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-white/60 transition-colors">
            Privacy Policy
          </Link>
        </p>
      )}
    </div>
  )
}
