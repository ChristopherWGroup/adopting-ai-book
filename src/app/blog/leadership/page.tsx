import type { Metadata } from 'next'
import { SectionPage } from '@/components/section-page'

export const metadata: Metadata = {
  title: 'Leadership | Resources',
  description:
    'Using AI well is not just a technology decision. It is a leadership one. Learn how to protect your business, choose the right adoption path, and keep humans accountable.',
}

export default function LeadershipPage() {
  return <SectionPage sectionId="leadership" />
}
