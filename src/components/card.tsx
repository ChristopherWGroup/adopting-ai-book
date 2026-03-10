import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Card({ children, padding = 'md', className }: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'bg-surface-light rounded-3xl',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
