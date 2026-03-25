import type { Metadata } from 'next'
import { SectionPage } from '@/components/section-page'

export const metadata: Metadata = {
  title: 'Awareness | Resources',
  description:
    'Most business owners are already competing against AI without realizing it. Cut through the hype and reframe the central question from "Should I use AI?" to "Where can it give me leverage?"',
}

export default function AwarenessPage() {
  return <SectionPage sectionId="awareness" />
}
