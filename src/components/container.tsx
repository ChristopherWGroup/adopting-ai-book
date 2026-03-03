import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

interface SectionProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  id?: string
}

export function Container({ children, size = 'lg', className }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  }

  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}

export function Section({ children, size = 'md', className, id }: SectionProps) {
  const sizes = {
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-28',
  }

  return (
    <section id={id} className={cn('w-full', sizes[size], className)}>
      {children}
    </section>
  )
}
