import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import { Section, Container } from '@/components/container'
import { Card } from '@/components/card'
import { sections } from '@/lib/sections'
import { getAllPosts } from '@/lib/posts'

interface SectionPageProps {
  sectionId: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function SectionPage({ sectionId }: SectionPageProps) {
  const section = sections.find((s) => s.id === sectionId)!
  const posts = getAllPosts().filter(
    (post) => post.tags?.includes(sectionId)
  )

  return (
    <>
      {/* Header */}
      <div className="bg-white pt-12 pb-6 sm:pt-16 sm:pb-8 border-b border-[#1d1d1f]/10">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-text-muted text-sm font-light hover:text-text-dark transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Resources
          </Link>
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-[48px] sm:text-[60px] text-text-dark tracking-tighter leading-tight mb-2">
              {section.title}
            </h1>
            <p className="text-text-muted text-lg font-light leading-relaxed">
              {section.description}
            </p>
          </div>
        </Container>
      </div>

      {/* Posts */}
      <Section className="bg-white py-12">
        <Container>
          {posts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-text-muted text-lg font-light">
                Articles on this topic are coming soon.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all sections
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card padding="sm" className="h-full flex flex-col">
                    <div className="flex items-center gap-1.5 text-text-muted text-xs mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </div>
                    <h2 className="font-heading font-semibold text-text-dark text-lg leading-snug mb-2 group-hover:text-text-dark/70 transition-colors flex-1 tracking-tight">
                      {post.title}
                    </h2>
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
          )}
        </Container>
      </Section>
    </>
  )
}
