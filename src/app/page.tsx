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
      <div className="bg-white pt-24 pb-20 sm:pt-36 sm:pb-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-[52px] sm:text-[64px] lg:text-[80px] text-text-dark leading-none tracking-tighter mb-6">
              AI for the businesses actually running things.
            </h1>
            <p className="text-text-muted text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Practical, no-jargon guidance on bringing AI into your business —
              from someone who works with small business owners every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog">
                <Button size="lg" variant="primary">
                  Browse Resources
                </Button>
              </Link>
              <Link href="/book">
                <Button size="lg" variant="secondary">
                  About the Book
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Featured: The Book */}
      <Section className="bg-surface-light">
        <Container>
          <div className="bg-surface-light rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Book info */}
              <div className="p-8 sm:p-12">
                <span className="inline-block bg-[#1d1d1f] text-white text-xs px-3 py-1 rounded-full mb-6">
                  Coming Soon
                </span>
                <h2 className="font-heading font-bold text-[32px] sm:text-[40px] text-text-dark leading-tight tracking-tighter mb-4">
                  Adopting AI
                </h2>
                <p className="text-text-muted text-lg font-light leading-relaxed mb-6">
                  A practical guide for business owners who want a clear
                  framework for bringing AI into their workflows — not just
                  another list of tools to try.
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 text-brand-primary font-medium text-sm hover:underline transition-colors"
                >
                  Learn more about the book <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Book cover mockup */}
              <div className="bg-[#1d1d1f] p-12 flex items-center justify-center">
                <div className="relative w-48 h-64 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 shadow-2xl">
                  <BookOpen className="w-10 h-10 text-white/30 mb-4" />
                  <p className="font-heading font-bold text-white text-center text-base leading-snug mb-3">
                    Adopting AI
                  </p>
                  <p className="text-white/40 text-xs text-center leading-relaxed">
                    A Guide for Business Owners
                  </p>
                  <div className="mt-auto w-full h-px bg-white/10" />
                  <p className="text-white/30 text-xs mt-3">Christopher W. Group</p>
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
