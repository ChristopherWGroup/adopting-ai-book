'use client'

import { motion } from 'framer-motion'
import {
  Map,
  Wrench,
  MessageSquare,
  TrendingUp,
  Shield,
  Rocket,
} from 'lucide-react'
import { Section, Container } from './container'

const lessons = [
  {
    icon: Map,
    title: 'Build Your AI Roadmap',
    description:
      'Cut through the noise and identify exactly which AI tools belong in your business — and in what order.',
  },
  {
    icon: Wrench,
    title: 'Practical Tool Walkthroughs',
    description:
      'Step-by-step guides to the AI tools that actually move the needle for solopreneurs and small teams.',
  },
  {
    icon: MessageSquare,
    title: 'Write Better Prompts',
    description:
      'Learn the prompt-writing fundamentals that get you useful, on-brand output instead of generic fluff.',
  },
  {
    icon: TrendingUp,
    title: 'Automate Repetitive Work',
    description:
      'Identify the tasks eating your week and build simple AI-powered workflows to handle them.',
  },
  {
    icon: Shield,
    title: 'Use AI Responsibly',
    description:
      'Understand what to trust, what to verify, and how to maintain quality control when AI is part of your workflow.',
  },
  {
    icon: Rocket,
    title: 'Scale Without Hiring',
    description:
      'Discover how to grow your capacity and output using AI — without growing your payroll.',
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
            What you'll learn
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            <em>Adopting AI</em> is a step-by-step guide written specifically
            for business owners — no computer science degree required.
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
