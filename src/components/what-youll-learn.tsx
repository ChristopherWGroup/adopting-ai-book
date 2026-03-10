'use client'

import { motion } from 'framer-motion'
import {
  UserCheck,
  HelpCircle,
  Wrench,
  BarChart2,
  ShieldCheck,
  Map,
} from 'lucide-react'
import { Section, Container } from './container'

const lessons = [
  {
    icon: UserCheck,
    title: 'The Smart Intern Model',
    description:
      'A clear mental model for what AI actually is — and isn\'t. Capable, fast, endlessly available, but requiring oversight. Once you have this framing, every tool decision becomes clearer.',
  },
  {
    icon: HelpCircle,
    title: 'Ask the Right Question',
    description:
      '"Should I use AI?" is the wrong question. The businesses getting ahead ask "Where can AI give me leverage?" That reframe points you toward specific, actionable answers instead of a philosophical debate.',
  },
  {
    icon: Wrench,
    title: 'Fix the Foundation First',
    description:
      'Most AI failures aren\'t about AI. They\'re about process gaps the technology runs straight into. Learn how to prepare your business before touching any tools — and avoid the mistakes that sink most adoption efforts.',
  },
  {
    icon: Map,
    title: 'Map Where Value Lives',
    description:
      'Not every task is worth automating. Learn how to identify the work in your business where AI creates real, measurable time savings — and where it\'s more trouble than it\'s worth.',
  },
  {
    icon: BarChart2,
    title: 'Measure Real Impact',
    description:
      'Feeling productive and being productive are different things. This book shows you how to set baselines before you start and measure impact honestly — so you know what\'s working and what\'s not.',
  },
  {
    icon: ShieldCheck,
    title: 'Use AI Responsibly',
    description:
      'Data privacy, hallucinations, overreliance, unintended bias — the risks are real but manageable. Learn the practical guardrails every small business needs before something goes wrong.',
  },
]

const ease = [0.25, 0.46, 0.45, 0.94]

export default function WhatYoullLearn() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-[40px] sm:text-[52px] text-text-dark tracking-tighter leading-tight mb-4">
            What you&apos;ll learn
          </h2>
          <p className="text-text-muted text-lg font-light max-w-2xl mx-auto">
            <em>Adopting AI</em> is built around ten chapters that take you from
            &ldquo;I know I should be doing something&rdquo; to a concrete adoption strategy
            that fits your actual business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="relative flex flex-col p-8 rounded-3xl bg-surface-light overflow-hidden hover:bg-[#efeff1] transition-colors duration-300"
            >
              {/* Background number */}
              <span className="absolute top-4 right-5 font-heading font-bold text-[64px] leading-none text-black/[0.04] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#1d1d1f] mb-5 shrink-0 relative z-10">
                <lesson.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-text-dark mb-2 tracking-tight relative z-10">
                {lesson.title}
              </h3>
              <p className="text-text-muted text-sm font-light leading-relaxed relative z-10">
                {lesson.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
