import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, BookOpen, ArrowRight } from 'lucide-react'
import { Section, Container } from '@/components/container'

export const metadata: Metadata = {
  title: "You're on the list!",
  description: "Thanks for signing up. We'll let you know when Adopting AI launches.",
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <Section size="lg" className="bg-surface-light min-h-[70vh] flex items-center">
      <Container size="sm">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-text-dark mb-4">
            You're on the list!
          </h1>
          <p className="text-text-muted text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Thanks for signing up. We'll send you an email as soon as{' '}
            <em>Adopting AI</em> is ready to launch — along with your free
            sample chapter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white font-heading font-semibold rounded-2xl hover:bg-brand-primary-dark transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Read the Blog
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary font-heading font-semibold rounded-2xl hover:bg-brand-primary hover:text-white transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
