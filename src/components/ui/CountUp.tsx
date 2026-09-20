'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

/**
 * useLayoutEffect so existe no cliente; no servidor cai para useEffect
 * para nao emitir aviso durante o SSR.
 */
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

type CountUpProps = {
  to: number
  suffix?: string
  durationMs?: number
}

/**
 * Numero que sobe de 0 ate o valor final quando entra na tela.
 *
 * O HTML renderizado ja traz o valor final — isso mantem o numero correto
 * sem JavaScript e faz o markup do servidor bater com o do cliente. A
 * contagem e escrita direto no DOM, entao nenhuma re-renderizacao do React
 * acontece durante a animacao.
 */
export function CountUp({ to, suffix = '', durationMs = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()

  // Zera antes da primeira pintura, para o valor final nao piscar.
  useIsomorphicLayoutEffect(() => {
    if (reduceMotion) return
    if (numberRef.current) numberRef.current.textContent = '0'
  }, [reduceMotion])

  useEffect(() => {
    const node = numberRef.current
    if (!node || !inView || reduceMotion) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      // Ease-out cubico: rapido no comeco, desacelera no fim.
      const eased = 1 - Math.pow(1 - progress, 3)
      node.textContent = String(Math.round(to * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduceMotion, to, durationMs])

  return (
    <span ref={ref} className="tabular-nums">
      <span ref={numberRef}>{to}</span>
      {suffix}
    </span>
  )
}
