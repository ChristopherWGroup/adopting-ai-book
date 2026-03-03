'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './button'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-brand-primary">
            Adopting AI
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className="text-text-muted hover:text-brand-primary font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-text-muted hover:text-brand-primary font-medium transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/#author"
            className="text-text-muted hover:text-brand-primary font-medium transition-colors"
          >
            The Author
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/#signup">
            <Button size="sm">Get the Book</Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-text-muted hover:text-brand-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link
            href="/#about"
            className="block py-2 text-text-muted hover:text-brand-primary font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-text-muted hover:text-brand-primary font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/#author"
            className="block py-2 text-text-muted hover:text-brand-primary font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            The Author
          </Link>
          <Link href="/#signup" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full mt-2">
              Get the Book
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
