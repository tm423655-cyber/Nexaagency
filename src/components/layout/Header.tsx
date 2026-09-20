'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonExternal } from '@/components/ui/Button'
import { NexaLogo } from '@/components/ui/NexaMark'
import { LocaleSwitcher } from './LocaleSwitcher'
import { navItems } from './nav-items'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { whatsappLink } from '@/config/site'

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const items = navItems(dict)
  const ctaHref = whatsappLink(dict.hero.whatsappMessage)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body e permite fechar o menu com Esc.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-400 ease-[var(--ease-out-soft)] ${
        scrolled || menuOpen ? 'border-b border-hairline bg-void/90 backdrop-blur-xl' : ''
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-4">
        <NexaLogo locale={locale} />

        <nav aria-label={dict.nav.menu} className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-hairline bg-white/5 px-1.5 py-1.5 backdrop-blur">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full px-4 py-1.5 text-sm text-muted transition duration-300 hover:bg-white/10 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} />
          {/* Envolvido num span: o Button ja define display, entao esconder
              pelo className dele depende da ordem das utilities do Tailwind. */}
          <span className="hidden sm:block">
            <ButtonExternal href={ctaHref}>{dict.nav.cta}</ButtonExternal>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="nexa-mobile-menu"
            aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-hairline bg-white/5 text-ink transition hover:border-cyan/40 lg:hidden"
          >
            {menuOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile: ocupa o resto da tela abaixo do header (h-18 = 4.5rem)
          e e opaco, para o conteudo da pagina nao vazar por tras. */}
      <div
        id="nexa-mobile-menu"
        hidden={!menuOpen}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-hairline bg-void lg:hidden"
      >
        <nav aria-label={dict.nav.menu} className="shell py-6">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-hairline py-4 font-display text-lg text-ink transition hover:text-cyan"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonExternal
            href={ctaHref}
            size="lg"
            className="mt-6 w-full"
            onClick={() => setMenuOpen(false)}
          >
            {dict.nav.cta}
          </ButtonExternal>
        </nav>
      </div>
    </header>
  )
}
