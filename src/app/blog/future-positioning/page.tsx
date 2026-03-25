import type { Metadata } from 'next'
import { SectionPage } from '@/components/section-page'

export const metadata: Metadata = {
  title: 'Future Positioning | Resources',
  description:
    'There is no finish line. AI is a capability you build over time. Learn how to stay current without chasing every trend and build the kind of adaptability that compounds.',
}

export default function FuturePositioningPage() {
  return <SectionPage sectionId="future-positioning" />
}
