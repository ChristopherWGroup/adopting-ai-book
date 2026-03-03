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

  return (
    <Section className="bg-gradient-to-br from-brand-primary to-indigo-600" id="signup">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6">
            <Mail className="w-7 h-7 text-white" />
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Be the first to know
          </h2>
          <p className="text-white/70 text-lg mb-2 max-w-xl mx-auto">
            Sign up to get notified when <em>Adopting AI</em> launches — plus a
            free sample chapter and early-bird pricing.
          </p>
          <p className="text-white/50 text-sm mb-10">
            No spam. Unsubscribe any time.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex flex-col items-center gap-3 bg-white/10 rounded-2xl px-8 py-6 border border-white/20"
            >
              <CheckCircle className="w-10 h-10 text-brand-accent" />
              <p className="font-heading font-semibold text-white text-lg">
                You're on the list!
              </p>
              <p className="text-white/70 text-sm">
                We'll be in touch when the book is ready.
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
                className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:opacity-50 text-base"
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-heading font-semibold rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
            <p className="mt-3 text-red-300 text-sm">{errorMessage}</p>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
