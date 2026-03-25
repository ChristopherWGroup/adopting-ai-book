# CLAUDE.md

Project context and conventions for Claude Code.

## Project Overview

Marketing and content website for the "Adopting AI" book — practical AI guidance for small business owners and solopreneurs. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and MDX.

Deployed on Vercel at adopting-ai.com.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

### Pages (App Router)
- `src/app/page.tsx` — Homepage (hero, book feature, blog preview)
- `src/app/book/page.tsx` — Book landing page
- `src/app/blog/page.tsx` — Resources hub (5 section cards + latest articles)
- `src/app/blog/awareness/page.tsx` — Awareness section landing page
- `src/app/blog/readiness/page.tsx` — Readiness section landing page
- `src/app/blog/execution/page.tsx` — Execution section landing page
- `src/app/blog/leadership/page.tsx` — Leadership section landing page
- `src/app/blog/future-positioning/page.tsx` — Future Positioning section landing page
- `src/app/blog/[slug]/page.tsx` — Individual blog posts (MDX); static section routes above take priority
- `src/app/thank-you/page.tsx` — Post-signup thank you page
- `src/app/api/subscribe/route.ts` — Email subscription API (Beehiiv)

### Key Directories
- `src/components/` — Reusable React components
- `src/components/ui/` — Low-level UI primitives (buttons, aurora background)
- `src/components/section-page.tsx` — Shared layout component for all 5 section pages
- `src/content/` — MDX blog post files
- `src/lib/` — Utilities (`posts.ts` for MDX handling, `utils.ts` for `cn()`, `sections.ts` for section metadata)
- `public/` — Static assets
- `_book-content/` — Book manuscript content (untracked by git)

### Blog Sections
The resources hub is organized into 5 sections mirroring the book structure: Awareness, Readiness, Execution, Leadership, Future Positioning. Section data lives in `src/lib/sections.ts`. To associate a blog post with a section, add the section's `id` as a tag in the post's frontmatter (e.g. `tags: [awareness]`).

### Path Alias
`@/` maps to `src/` — always use this for imports, never relative paths across directories.

## Layout Conventions

### Container / Section
Use the `Container` and `Section` components from `@/components/container` for page layout:

```tsx
import { Section, Container } from '@/components/container'

<Section className="bg-surface-light">
  <Container>
    {/* content */}
  </Container>
</Section>
```

- `Section` handles vertical padding (`size`: `sm` = py-20, `md` = py-28, `lg` = py-36)
- `Container` handles max-width and horizontal padding (`size`: `sm`/`md`/`lg`/`xl`)

### Styling
- Use Tailwind CSS utility classes
- Use `cn()` from `@/lib/utils` to merge conditional class names (wraps `clsx` + `tailwind-merge`)
- Design tokens: `text-text-dark`, `text-text-muted`, `bg-surface-light`, `brand-primary`
- Fonts: `font-heading` (display/titles), `font-sans` (body)
- Rounded corners are generous — prefer `rounded-2xl`, `rounded-3xl` for cards
- Animations via Framer Motion where needed

### Buttons
- `ButtonColorful` from `@/components/ui/button-colorful` — primary gradient CTA
- `button` from `@/components/ui/button` — Radix UI-based base button

## Blog / MDX

Blog posts live in `src/content/` as `.mdx` files with gray-matter frontmatter. The `src/lib/posts.ts` utility handles reading and parsing them. Posts are rendered via `next-mdx-remote`.

## Environment Variables

Required in `.env.local` (never commit this file):

```
BEEHIIV_API_KEY=...
BEEHIIV_PUBLICATION_ID=...
```

These power the `/api/subscribe` email signup endpoint.

## SEO

- `src/app/sitemap.ts` — generates sitemap
- `src/app/robots.ts` — robots.txt
- Each page exports a `metadata` object for `<head>` tags
- Domain: adopting-ai.com
