import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { Container } from '@/components/container'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) notFound()

  return (
    <>
      {/* Header */}
      <div className="bg-white pt-24 pb-10 sm:pt-32 sm:pb-14 border-b border-[#1d1d1f]/10">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-dark text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-surface-light text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-heading font-bold text-[32px] sm:text-[44px] text-text-dark mb-6 leading-tight tracking-tighter">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-text-muted text-sm">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
          </div>
        </Container>
      </div>

      {/* Article content */}
      <div className="bg-white py-12 sm:py-16">
        <Container size="sm">
          <article className="prose-book">
            <MDXRemote source={post.content} />
          </article>

          {/* CTA at bottom */}
          <div className="mt-16 p-8 rounded-3xl bg-[#1d1d1f] text-white text-center">
            <h3 className="font-heading font-bold text-2xl tracking-tight mb-2">
              Enjoyed this post?
            </h3>
            <p className="text-white/50 text-base font-light mb-6">
              Get notified when <em>Adopting AI</em> launches and receive a free sample chapter.
            </p>
            <Link
              href="/book#signup"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-sans font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              Notify Me at Launch
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}
