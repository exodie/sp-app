import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const cardVariants = cva(
  'flex flex-col space-y-2 border border-foreground/40 rounded-md',
  {
    variants: {
      size: {
        default: 'w-full md:w-6/12 px-6 py-5',
        small: 'w-full md:w-3/12 px-2 py-1',
        big: 'w-full md:w-9/12 px-8 py-6',
        full: 'w-full px-6 py-6'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export interface CardSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode
}

export function ProfileCardSection({ children, className, size }: CardSectionProps) {
  return <div className={cn(cardVariants({ size, className }))}>{children}</div>
}
