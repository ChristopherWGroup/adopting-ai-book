import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Section, Container } from '@/components/container'
import { ButtonColorful } from '@/components/ui/button-colorful'
import { AuroraBackground } from '@/components/ui/aurora-background'
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
      <AuroraBackground className="h-auto items-start justify-start pt-24 pb-20 sm:pt-36 sm:pb-28 bg-white">
        <Container>
          <div className="max-w-3xl">
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
                <button className="relative inline-flex items-center justify-center gap-2 h-14 px-8 text-lg bg-white text-zinc-900 font-sans font-medium rounded-full overflow-hidden border border-black/10 transition-all duration-200 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
                  <span className="relative">About the Book</span>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </AuroraBackground>

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

              {/* Book cover */}
              <div className="relative p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e3a5f_0%,_transparent_70%)] opacity-60" />
                <div className="relative">
                  <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/40 blur-xl rounded-full" />
                  <Image
                    src="/book-cover.jpg"
                    alt="Adopting AI book cover"
                    width={224}
                    height={288}
                    className="relative rounded-md shadow-[0_25px_50px_-10px_rgba(0,0,0,0.8)]"
                  />
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
