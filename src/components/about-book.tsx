'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section, Container } from './container'

const highlights = [
  'Built around the "Smart Intern" model — a mental framework that makes AI immediately practical',
  'Covers preparation and process before tools, because that\'s where most adoptions fail',
  'Honest about risk: hallucinations, data privacy, overreliance, and what to do about each',
  'Three adoption paths mapped out — DIY, internal champion, or outside expertise — with real trade-offs',
  'Research-backed throughout, but written for business owners, not researchers',
  'Written by someone who works with small businesses every day, not a tech journalist',
]

const ease = [0.25, 0.46, 0.45, 0.94]

export default function AboutBook() {
  return (
    <Section className="bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-heading font-bold text-[40px] sm:text-[52px] text-white tracking-tighter leading-tight mb-6">
              About the book
            </h2>
            <div className="space-y-4 text-white/60 font-light leading-relaxed">
              <p>
                AI adoption doesn&apos;t fail because the technology doesn&apos;t work.
                It fails because business owners jump to tools before they&apos;ve
                fixed the underlying processes those tools will run on. Or they
                measure success by how the tool <em>feels</em> rather than what
                it actually produces. Or they skip the governance steps that
                would have caught the problem before it became a client complaint.
              </p>
              <p>
                <strong className="text-white font-semibold">Adopting AI</strong> is built
                around a simple idea: you don&apos;t need to understand how AI works
                to use it well. You need a clear framework for where it belongs
                in your business, how to choose the right tools, and how to
                measure whether they&apos;re actually working.
              </p>
              <p>
                Think of AI as the smartest intern you&apos;ve ever hired. Capable,
                fast, available around the clock — and requiring oversight.
                This book shows you how to direct that intern effectively,
                without becoming a technology expert.
              </p>
            </div>
          </motion.div>

          {/* Highlights list */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="bg-white/[0.04] rounded-3xl p-8 border border-white/[0.08] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 rounded-full bg-brand-primary" />
              <h3 className="font-heading font-semibold text-lg text-white tracking-tight">
                What makes this book different
              </h3>
            </div>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-white/65 text-sm font-light leading-relaxed">
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
