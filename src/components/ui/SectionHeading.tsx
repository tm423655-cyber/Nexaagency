import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  /** Alinhamento do bloco — centralizado nas secoes mais editoriais. */
  align?: 'left' | 'center'
  className?: string
}

/** Cabecalho padrao de secao: etiqueta com ponto ciano + titulo + apoio. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start'

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`.trim()}>
      <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted uppercase">
        <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
        {eyebrow}
      </span>
      <h2 className="text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[1.08] font-semibold">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
