'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** One observer for the page; above-the-fold content never waits for animation. */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        if (!preference.matches) entry.target.classList.add('reveal-enter')
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -40px 0px' })

    for (const element of elements) {
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element)
    }
    return () => {
      observer.disconnect()
      for (const element of elements) element.classList.remove('reveal-enter')
    }
  }, [pathname])

  return null
}
