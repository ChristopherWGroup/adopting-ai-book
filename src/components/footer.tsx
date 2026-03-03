import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Adopting AI</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A practical guide for small business owners and solopreneurs ready
              to bring AI into their workflows — without the overwhelm.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/50 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/#about', label: 'About the Book' },
                { href: '/#signup', label: 'Get Notified' },
                { href: '/blog', label: 'Resources' },
                { href: '/#author', label: 'The Author' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Author site */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/50 mb-3">
              The Author
            </h4>
            <p className="text-white/70 text-sm mb-3">
              Want to work with Christopher directly?
            </p>
            <a
              href="https://christopherwgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-accent-hover text-sm font-medium transition-colors"
            >
              Visit ChristopherWGroup.com →
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          © {year} Christopher W Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
