'use client'

import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * reducedMotion="user" faz o motion respeitar a preferencia do sistema:
 * animacoes de transform sao dispensadas e apenas o fade permanece, que
 * nao causa desconforto vestibular. Isso mantem a marcacao do servidor e
 * do cliente identica — o Reveal nao precisa decidir nada por conta propria.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
