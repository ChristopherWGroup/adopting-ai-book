'use client'

import { motion } from 'framer-motion'
import { Radio, BarChart2, ShieldAlert } from 'lucide-react'
import { Section, Container } from './container'

const problems = [
  {
    icon: Radio,
    title: 'The noise is deafening',
    description:
      "New tools appear daily. Every newsletter declares the next thing you can't afford to miss. Most of it is hype. Sorting signal from noise — and figuring out what actually belongs in your business — is a full-time job you didn't sign up for.",
  },
  {
    icon: BarChart2,
    title: "You've tried it, but nothing's really changed",
    description:
      "You've experimented with ChatGPT, maybe a few other tools. Some things felt useful. But feeling more productive and actually being more productive are different things. Most businesses go from experimenting straight to assuming — and that's where real adoption stalls.",
  },
  {
    icon: ShieldAlert,
    title: "You're not sure what responsible use looks like",
    description:
      "AI makes things up with complete confidence. Customer data flows into tools you haven't fully vetted. You're not sure what guardrails you need — or whether you need them at all. The risks are real, but they're manageable when you know what to watch for.",
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
            Most small business owners aren&apos;t failing at AI because they&apos;re not
            trying. They&apos;re failing because nobody gave them a clear framework
            for doing it right.
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
