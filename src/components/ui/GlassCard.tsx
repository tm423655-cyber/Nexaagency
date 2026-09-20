import type { ElementType, ReactNode } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Acende a borda superior em gradiente no hover. */
  interactive?: boolean
}

/**
 * Superficie padrao do site: vidro escuro com borda de 1px.
 * Todas as secoes usam este componente em vez de recriar o estilo.
 */
export function GlassCard({
  children,
  className = '',
  as: Tag = 'div',
  interactive = false,
}: GlassCardProps) {
  const hover = interactive
    ? 'group relative overflow-hidden transition duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-cyan/25 hover:bg-white/[0.055]'
    : ''

  return (
    <Tag className={`glass ${hover} ${className}`.trim()}>
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        />
      )}
      {children}
    </Tag>
  )
}
