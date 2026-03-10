'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Section, Container } from './container'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function AuthorBio() {
  return (
    <Section className="bg-surface-light" id="author">
      <Container size="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden relative">
              <Image
                src="/author image.jpeg"
                alt="Christopher W. Group"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="md:col-span-2"
          >
            <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
              About the Author
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-dark tracking-tight mb-4">
              Christopher W. Group
            </h2>
            <div className="space-y-3 text-text-muted font-light leading-relaxed">
              <p>
                Christopher W. Group is the founder of the consultancy at
                ChristopherWGroup.com, where he helps small businesses and
                solopreneurs integrate AI and automation into their day-to-day
                operations. He&apos;s worked with business owners across industries
                — from consulting firms and service businesses to retailers and
                solo operators — helping them cut through the noise and find
                what actually works.
              </p>
              <p>
                He&apos;s seen the same story repeat: a business owner hears
                about AI, tries a few tools, gets mixed results, and concludes
                it&apos;s not ready for businesses like theirs. <em>Adopting AI</em>{' '}
                is the book he puts in their hands instead. It&apos;s the guide he
                wishes had existed when he started this work — practical,
                honest, and written for people running real businesses, not
                reading tech blogs.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://christopherwgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-dark font-medium transition-colors text-sm"
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
