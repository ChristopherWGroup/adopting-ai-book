import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Section, Container } from './container'
import { Card } from './card'
import { getAllPosts } from '@/lib/posts'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <Section className="bg-surface-light">
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-dark mb-2">
              Resources &amp; Insights
            </h2>
            <p className="text-text-muted">
              Practical AI guidance for business owners — free, no signup required.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-brand-primary font-medium hover:text-brand-accent transition-colors text-sm"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-1.5 text-text-muted text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </div>
                <h3 className="font-heading font-semibold text-text-dark text-lg leading-snug mb-3 group-hover:text-brand-primary transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-brand-primary font-medium hover:text-brand-accent transition-colors"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
