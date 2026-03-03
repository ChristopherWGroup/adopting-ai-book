'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section, Container } from './container'

const highlights = [
  'Written for business owners, not developers',
  'Practical examples from real small business workflows',
  'No jargon — plain language throughout',
  'Actionable checklists and templates included',
  'Covers the most impactful tools available today',
]

export default function AboutBook() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-dark mb-6">
              About the book
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                AI is no longer just for big tech companies. Today, a
                solopreneur with the right tools can do the work of a small
                team — and a small business can compete at a level that simply
                wasn't possible five years ago.
              </p>
              <p>
                But most AI content is written by and for technologists. It
                assumes you want to understand how the models work, not just
                how to use them. <strong className="text-text-dark">Adopting AI</strong> is
                different. It's written for the person running their own show —
                the owner, the operator, the person doing everything.
              </p>
              <p>
                This book gives you a clear, repeatable framework for
                identifying where AI belongs in your business, choosing the
                right tools, and building workflows that save you real hours
                every week.
              </p>
            </div>
          </motion.div>

          {/* Highlights list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface-light rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-heading font-semibold text-lg text-text-dark mb-6">
              What makes this book different
            </h3>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-text-muted text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
