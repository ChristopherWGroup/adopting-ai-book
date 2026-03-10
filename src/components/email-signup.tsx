'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'
import { Section, Container } from './container'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setEmail('')
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const ease = [0.25, 0.46, 0.45, 0.94]

  return (
    <Section className="bg-black" id="signup">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 mb-6">
            <Mail className="w-7 h-7 text-white/60" />
          </div>

          <h2 className="font-heading font-bold text-[40px] sm:text-[52px] text-white tracking-tighter leading-tight mb-4">
            Be the first to know
          </h2>
          <p className="text-white/50 text-lg font-light mb-2 max-w-xl mx-auto">
            Get notified when <em>Adopting AI</em> launches, and join a weekly newsletter with practical advice on how small business owners and solopreneurs can put AI to work in their businesses.
          </p>
          <p className="text-white/30 text-sm mb-10">
            No spam. Unsubscribe any time.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex flex-col items-center gap-3 bg-white/5 rounded-3xl px-8 py-6 border border-white/10"
            >
              <CheckCircle className="w-10 h-10 text-brand-primary" />
              <p className="font-heading font-semibold text-white text-lg">
                {"Thanks for subscribing!"}
              </p>
              <p className="text-white/50 text-sm text-center">
                {"Please check your email to confirm your subscription. If you don't receive an email within 10 minutes, check your spam folder."}
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-1 px-5 py-3.5 rounded-full bg-white/15 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent disabled:opacity-50 text-base"
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-white font-sans font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing up…
                  </>
                ) : (
                  'Notify Me'
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-red-400 text-sm">{errorMessage}</p>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
