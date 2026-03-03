import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  coverImage?: string
  tags?: string[]
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(POSTS_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)

    return {
      slug,
      title: data.title ?? 'Untitled',
      date: data.date ?? new Date().toISOString(),
      excerpt: data.excerpt ?? '',
      author: data.author ?? 'Christopher W. Group',
      coverImage: data.coverImage,
      tags: data.tags ?? [],
    } satisfies PostMeta
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? '',
    author: data.author ?? 'Christopher W',
    coverImage: data.coverImage,
    tags: data.tags ?? [],
    content,
  }
}
