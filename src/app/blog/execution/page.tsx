import type { Metadata } from 'next'
import { SectionPage } from '@/components/section-page'

export const metadata: Metadata = {
  title: 'Execution | Resources',
  description:
    'Choosing the wrong tool is rarely the problem. Learn how to evaluate tools without getting distracted, build measurement into your workflow, and tell the difference between feeling productive and actually moving the needle.',
}

export default function ExecutionPage() {
  return <SectionPage sectionId="execution" />
}
