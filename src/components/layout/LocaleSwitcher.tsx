import Link from 'next/link'
import { locales, type Locale } from '@/i18n/config'

/**
 * Troca de idioma sem estado de cliente: cada idioma e apenas um link
 * para a mesma pagina na outra rota.
 */
export function LocaleSwitcher({ current }: { current: Locale }) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-hairline bg-white/5 p-0.5 text-xs font-medium"
      role="group"
      aria-label="Idioma / Language"
    >
      {locales.map((locale) => {
        const isActive = locale === current
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            aria-current={isActive ? 'true' : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition duration-300 ${
              isActive ? 'bg-gradient-brand text-white' : 'text-muted hover:text-ink'
            }`}
          >
            {locale}
          </Link>
        )
      })}
    </div>
  )
}
