'use client'

import { useEffect, useRef } from 'react'

type CountUpProps = { to: number; suffix?: string; durationMs?: number }

export function CountUp({ to, suffix = '', durationMs = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preference.matches || durationMs <= 0) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const progress = preference.matches ? 1 : Math.min((now - start) / durationMs, 1)
        node.textContent = String(Math.round(to * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      node.textContent = String(to)
    }
  }, [to, durationMs])

  return <span className="tabular-nums"><span ref={ref}>{to}</span>{suffix}</span>
}
