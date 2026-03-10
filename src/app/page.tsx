import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, Container } from '@/components/container'
import { Button } from '@/components/button'
import { ButtonColorful } from '@/components/ui/button-colorful'
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
      <div className="relative bg-white pt-24 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        {/* Subtle radial gradient decoration */}
        <div className="pointer-events-none absolute -top-32 -right-48 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_#dbeafe_0%,_transparent_65%)] opacity-50" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_#f0f4ff_0%,_transparent_70%)] opacity-40" />
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-brand-primary text-sm font-medium bg-brand-primary/8 px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
              Practical AI guidance for business owners
            </span>
            <h1 className="font-heading font-bold text-[52px] sm:text-[68px] lg:text-[84px] text-text-dark leading-none tracking-tighter mb-6">
              AI for the businesses actually running things.
            </h1>
            <p className="text-text-muted text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Practical, no-jargon guidance on bringing AI into your business —
              from someone who works with small business owners every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog">
                <ButtonColorful label="Browse Resources" className="h-14 px-8 text-lg" />
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
          <div className="bg-[#1a1a1e] rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Book info */}
              <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full mb-6 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                  Coming Soon
                </span>
                <h2 className="font-heading font-bold text-[32px] sm:text-[44px] text-white leading-tight tracking-tighter mb-4">
                  Adopting AI
                </h2>
                <p className="text-white/55 text-lg font-light leading-relaxed mb-8">
                  A practical guide for business owners who want a clear
                  framework for bringing AI into their workflows — not just
                  another list of tools to try.
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 text-brand-primary font-medium text-sm hover:gap-2.5 transition-all"
                >
                  Learn more about the book <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Book cover mockup */}
              <div className="relative p-12 flex items-center justify-center overflow-hidden">
                {/* Subtle glow behind book */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e3a5f_0%,_transparent_70%)] opacity-60" />
                {/* Book */}
                <div className="relative">
                  {/* Book shadow */}
                  <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/40 blur-xl rounded-full" />
                  {/* Book spine */}
                  <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-[#111] to-[#2a2a2a] rounded-l-sm" />
                  {/* Book cover */}
                  <div className="relative w-48 h-64 sm:w-56 sm:h-72 bg-gradient-to-br from-[#1a2744] via-[#1e3060] to-[#0f1a35] rounded-r-md rounded-l-none border border-white/[0.08] flex flex-col p-7 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.8)]">
                    {/* Decorative line */}
                    <div className="w-8 h-px bg-brand-primary/70 mb-6" />
                    <p className="font-heading font-bold text-white text-xl leading-tight mb-2 tracking-tight">
                      Adopting<br />AI
                    </p>
                    <p className="text-white/40 text-[11px] leading-relaxed">
                      A Guide for Business Owners
                    </p>
                    <div className="mt-auto">
                      <div className="w-full h-px bg-white/10 mb-3" />
                      <p className="text-white/30 text-[10px]">Christopher W. Group</p>
                    </div>
                  </div>
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
