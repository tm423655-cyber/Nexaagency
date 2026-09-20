'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/config/site'

/** Botao flutuante de WhatsApp — aparece depois que a pessoa rola o hero. */
export function WhatsAppFab({ label, message }: { label: string; message: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-[0_12px_40px_-8px_var(--color-brand)] transition duration-400 ease-[var(--ease-out-soft)] hover:scale-105 md:right-8 md:bottom-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <MessageCircle aria-hidden className="size-6" />
    </a>
  )
}
