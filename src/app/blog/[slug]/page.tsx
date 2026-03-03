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
      <div className="bg-brand-primary-dark py-14 sm:py-18">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent font-medium border border-brand-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-white/50 text-sm">
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
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-primary text-white text-center">
            <h3 className="font-heading font-bold text-xl mb-2">
              Enjoyed this post?
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Get notified when <em>Adopting AI</em> launches and receive a free sample chapter.
            </p>
            <Link
              href="/book#signup"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-heading font-semibold px-6 py-3 rounded-2xl transition-colors text-sm"
            >
              Notify Me at Launch
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}
