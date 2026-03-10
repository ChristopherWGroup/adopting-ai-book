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
        'bg-white rounded-3xl border border-black/[0.06] shadow-sm hover:shadow-md hover:shadow-black/5 hover:border-black/[0.1] transition-all duration-300',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
