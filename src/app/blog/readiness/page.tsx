import type { Metadata } from 'next'
import { SectionPage } from '@/components/section-page'

export const metadata: Metadata = {
  title: 'Readiness | Resources',
  description:
    'Most AI failures are not about the technology — they are about what the technology walks into. Assess whether your processes, data, and workflows are ready.',
}

export default function ReadinessPage() {
  return <SectionPage sectionId="readiness" />
}
