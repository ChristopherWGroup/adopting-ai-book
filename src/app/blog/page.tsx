import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Section, Container } from '@/components/container'
import { Card } from '@/components/card'
import { getAllPosts } from '@/lib/posts'

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
      <div className="bg-brand-primary-dark py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
              Resources &amp; Insights
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Practical guidance on adopting AI in your business — no jargon,
              no hype. Just useful ideas you can act on today.
            </p>
          </div>
        </Container>
      </div>

      {/* Posts grid */}
      <Section className="bg-surface-light">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-16 text-text-muted">
              <p className="text-lg">No posts yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow flex flex-col">
                    <div className="flex items-center gap-1.5 text-text-muted text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </div>
                    <h2 className="font-heading font-semibold text-text-dark text-lg leading-snug mb-3 group-hover:text-brand-primary transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium"
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
