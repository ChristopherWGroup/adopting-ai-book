import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Section, Container } from '@/components/container'
import { Card } from '@/components/card'
import { getAllPosts } from '@/lib/posts'
import { sections } from '@/lib/sections'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Practical AI guidance for small business owners and solopreneurs — articles, tips, and tools to help you adopt AI with confidence.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Header */}
      <div className="bg-white pt-12 pb-6 sm:pt-16 sm:pb-8 border-b border-[#1d1d1f]/10">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-[48px] sm:text-[60px] text-text-dark tracking-tighter leading-tight mb-2">
              Resources
            </h1>
            <p className="text-text-muted text-lg font-light leading-relaxed">
              Practical AI guidance organized around the five stages of adoption
              covered in the book. Find where you are and go deeper.
            </p>
          </div>
        </Container>
      </div>

      {/* Sections grid */}
      <Section className="bg-white py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sections.slice(0, 4).map((section) => (
              <Link key={section.id} href={`/blog/${section.id}`} className="group">
                <Card padding="sm" className="h-full flex flex-col">
                  <h2 className="font-heading font-semibold text-text-dark text-xl tracking-tight mb-2">
                    {section.title}
                  </h2>
                  <p className="text-text-muted text-sm font-light leading-relaxed flex-1 mb-3">
                    {section.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          {/* Fifth section — centered */}
          <div className="mt-3 flex justify-center">
            <Link
              href={`/blog/${sections[4].id}`}
              className="group w-full sm:w-1/2"
            >
              <Card padding="sm" className="h-full flex flex-col">
                <h2 className="font-heading font-semibold text-text-dark text-xl tracking-tight mb-2">
                  {sections[4].title}
                </h2>
                <p className="text-text-muted text-sm font-light leading-relaxed flex-1 mb-3">
                  {sections[4].description}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Latest Articles */}
      {posts.length > 0 && (
        <Section className="bg-surface-light py-12">
          <Container>
            <h2 className="font-heading font-semibold text-text-dark text-2xl tracking-tight mb-4">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card padding="sm" className="h-full flex flex-col">
                    <div className="flex items-center gap-1.5 text-text-muted text-xs mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </div>
                    <h3 className="font-heading font-semibold text-text-dark text-lg leading-snug mb-2 group-hover:text-text-dark/70 transition-colors flex-1 tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm font-light leading-relaxed mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-surface-light text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
