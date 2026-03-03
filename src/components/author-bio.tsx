'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Section, Container } from './container'

export default function AuthorBio() {
  return (
    <Section className="bg-brand-primary-dark" id="author">
      <Container size="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
              <span className="text-white/40 text-sm font-medium">
                Author Photo
              </span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About the Author
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
              Christopher W
            </h2>
            <div className="space-y-3 text-white/70 leading-relaxed">
              <p>
                Christopher is the founder of Christopher W Group, where he
                helps small businesses and solopreneurs integrate AI and
                automation into their day-to-day operations.
              </p>
              <p>
                He's spent years working with business owners who feel
                overwhelmed by technology — and helping them find simple,
                practical solutions that actually stick. <em>Adopting AI</em>{' '}
                is the book he wishes had existed when he started this work.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://christopherwgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent-hover font-medium transition-colors"
              >
                Visit ChristopherWGroup.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
