'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './button'
import { ButtonColorful } from '@/components/ui/button-colorful'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/Logo - transparent background - favicon.png"
            alt="Adopting AI logo"
            width={24}
            height={24}
            className="shrink-0"
          />
          <span className="font-heading font-semibold text-base text-text-dark tracking-tight">
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
            <ButtonColorful label="Get the Book" className="h-8 px-4 text-sm" />
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
            <ButtonColorful label="Get the Book" className="w-full mt-2 h-9 text-sm" />
          </Link>
        </div>
      )}
    </header>
  )
}
