import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Section, Container } from '@/components/container'
import { Button } from '@/components/button'
import BlogPreview from '@/components/blog-preview'

export const metadata: Metadata = {
  title: 'Adopting AI | Practical AI Guidance for Business Owners',
  description:
    'Practical, no-jargon guidance on bringing AI into your business — articles, tools, and a book to help small business owners and solopreneurs work smarter.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-brand-primary-dark via-brand-primary to-indigo-500 py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              AI for the businesses actually running things
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10">
              Practical, no-jargon guidance on bringing AI into your business —
              from someone who works with small business owners every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog">
                <Button size="lg" variant="accent">
                  Browse Resources
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white/40 text-white hover:bg-white hover:text-brand-primary"
                >
                  About the Book
                </Button>
              </Link>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface-light to-transparent" />
      </div>

      {/* Featured: The Book */}
      <Section className="bg-surface-light">
        <Container>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Book info */}
              <div className="p-8 sm:p-12">
                <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                  Coming Soon
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-dark leading-tight mb-4">
                  Adopting AI
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  A practical guide for business owners who want a clear
                  framework for bringing AI into their workflows — not just
                  another list of tools to try.
                </p>
                <Link href="/book">
                  <Button variant="primary">
                    Learn more about the book <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {/* Book cover mockup */}
              <div className="bg-gradient-to-br from-brand-primary to-indigo-600 p-12 flex items-center justify-center">
                <div className="relative w-48 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center p-6 shadow-2xl">
                  <BookOpen className="w-10 h-10 text-brand-accent mb-4" />
                  <p className="font-heading font-bold text-white text-center text-base leading-snug mb-3">
                    Adopting AI
                  </p>
                  <p className="text-white/50 text-xs text-center leading-relaxed">
                    A Guide for Business Owners
                  </p>
                  <div className="mt-auto w-full h-px bg-white/10" />
                  <p className="text-white/40 text-xs mt-3">Christopher W. Group</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Resources preview */}
      <BlogPreview />
    </>
  )
}
