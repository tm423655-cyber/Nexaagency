'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Atraso em segundos — use para escalonar itens de uma mesma lista. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/**
 * Anima o conteudo ao entrar na viewport. Usado por todas as secoes para
 * que o ritmo de entrada seja identico em todo o site.
 *
 * O elemento renderizado e sempre o mesmo no servidor e no cliente: trocar
 * a marcacao conforme a preferencia de movimento deixava o `opacity: 0`
 * vindo do SSR preso no DOM, apagando a pagina inteira. Quem prefere menos
 * movimento e atendido pelo MotionConfig (ver MotionProvider), que dispensa
 * as animacoes de transform e mantem apenas o fade.
 *
 * O atributo data-reveal existe para o <noscript> do layout conseguir
 * revelar tudo caso o JavaScript nao carregue.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Tag = motion[as]

  return (
    <Tag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
