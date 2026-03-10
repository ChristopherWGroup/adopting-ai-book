'use client'

import { motion } from 'framer-motion'
import { Radio, BarChart2, ShieldAlert } from 'lucide-react'
import { Section, Container } from './container'

const ease = [0.25, 0.46, 0.45, 0.94]

const problems = [
  {
    icon: Radio,
    title: 'The noise is deafening',
    description:
      "New tools appear daily. Every newsletter declares the next thing you can't afford to miss. Most of it is hype. Sorting signal from noise — and figuring out what actually belongs in your business — is a full-time job you didn't sign up for.",
    accent: 'bg-amber-500',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
  },
  {
    icon: BarChart2,
    title: "You've tried it, but nothing's really changed",
    description:
      "You've experimented with ChatGPT, maybe a few other tools. Some things felt useful. But feeling more productive and actually being more productive are different things. Most businesses go from experimenting straight to assuming — and that's where real adoption stalls.",
    accent: 'bg-brand-primary',
    iconBg: 'bg-blue-50',
    iconColor: 'text-brand-primary',
  },
  {
    icon: ShieldAlert,
    title: "You're not sure what responsible use looks like",
    description:
      "AI makes things up with complete confidence. Customer data flows into tools you haven't fully vetted. You're not sure what guardrails you need — or whether you need them at all. The risks are real, but they're manageable when you know what to watch for.",
    accent: 'bg-rose-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-700',
  },
]

export default function ProblemSection() {
  return (
    <Section className="bg-surface-light" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-[40px] sm:text-[52px] text-text-dark tracking-tighter leading-tight mb-4">
            Sound familiar?
          </h2>
          <p className="text-text-muted text-lg font-light max-w-2xl mx-auto">
            Most small business owners aren&apos;t failing at AI because they&apos;re not
            trying. They&apos;re failing because nobody gave them a clear framework
            for doing it right.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col items-start p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm hover:shadow-md hover:shadow-black/5 transition-all duration-300 overflow-hidden relative"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${problem.accent}`} />
              <div className={`p-3 ${problem.iconBg} rounded-2xl mb-5`}>
                <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-dark mb-3 tracking-tight">
                {problem.title}
              </h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
