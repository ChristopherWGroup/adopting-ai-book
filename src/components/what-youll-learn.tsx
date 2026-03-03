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

export default function WhatYoullLearn() {
  return (
    <Section className="bg-surface-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-dark mb-4">
            What you&apos;ll learn
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            <em>Adopting AI</em> is built around ten chapters that take you from
            &ldquo;I know I should be doing something&rdquo; to a concrete adoption strategy
            that fits your actual business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 p-2.5 bg-brand-primary/10 rounded-xl h-fit group-hover:bg-brand-primary/20 transition-colors">
                <lesson.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text-dark mb-1">
                  {lesson.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {lesson.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
