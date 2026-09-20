import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/** Server-rendered and visible even before JavaScript loads. */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  return (
    <Tag data-reveal="" className={className} style={{ animationDelay: delay + 's' }}>
      {children}
    </Tag>
  )
}
