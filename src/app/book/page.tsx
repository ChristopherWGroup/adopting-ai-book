import type { Metadata } from 'next'
import Hero from '@/components/hero'
import ProblemSection from '@/components/problem-section'
import WhatYoullLearn from '@/components/what-youll-learn'
import AboutBook from '@/components/about-book'
import AuthorBio from '@/components/author-bio'
import EmailSignup from '@/components/email-signup'

export const metadata: Metadata = {
  title: 'The Book | Adopting AI',
  description:
    'A practical, no-jargon playbook for small business owners and solopreneurs who want to work smarter using AI. Get notified when the book launches.',
}

export default function BookPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <WhatYoullLearn />
      <AboutBook />
      <AuthorBio />
      <EmailSignup />
    </>
  )
}
