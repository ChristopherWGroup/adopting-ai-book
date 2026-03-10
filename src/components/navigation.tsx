'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './button'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-semibold text-base text-text-dark">
            Adopting AI
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/book"
            className="text-text-dark/60 hover:text-text-dark text-sm font-normal transition-colors"
          >
            Book
          </Link>
          <Link
            href="/blog"
            className="text-text-dark/60 hover:text-text-dark text-sm font-normal transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/book#author"
            className="text-text-dark/60 hover:text-text-dark text-sm font-normal transition-colors"
          >
            The Author
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/book#signup">
            <Button size="sm">Get the Book</Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-text-dark/60 hover:text-text-dark transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 glass-nav px-4 py-4 space-y-3">
          <Link
            href="/book"
            className="block py-2 text-text-dark/60 hover:text-text-dark text-sm font-normal transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-text-dark/60 hover:text-text-dark text-sm font-normal transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/book#author"
            className="block py-2 text-text-dark/60 hover:text-text-dark text-sm font-normal transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            The Author
          </Link>
          <Link href="/book#signup" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full mt-2">
              Get the Book
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
