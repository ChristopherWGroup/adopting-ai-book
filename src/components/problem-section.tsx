'use client'

import { motion } from 'framer-motion'
import { HelpCircle, Zap, ShieldOff } from 'lucide-react'
import { Section, Container } from './container'

const problems = [
  {
    icon: HelpCircle,
    title: "You don't know where to start",
    description:
      'The AI landscape moves fast. New tools appear daily, and it\'s hard to know which ones actually matter for your business — and which are just hype.',
  },
  {
    icon: Zap,
    title: "It feels overwhelming and technical",
    description:
      'Most AI content is written for developers and tech teams. As a business owner, you just need to know: will this save me time, and how do I actually use it?',
  },
  {
    icon: ShieldOff,
    title: "You're worried about doing it wrong",
    description:
      'What if AI produces bad work? What if your clients notice? What if you make costly mistakes? These fears keep many business owners on the sidelines.',
  },
]

export default function ProblemSection() {
  return (
    <Section className="bg-white" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-dark mb-4">
            Sound familiar?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Most small business owners want to use AI — they just don't know how to
            start, or they've tried and felt lost. You're not alone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start p-6 rounded-2xl bg-surface-light border border-gray-100"
            >
              <div className="p-3 bg-brand-primary/10 rounded-xl mb-4">
                <problem.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-dark mb-2">
                {problem.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
