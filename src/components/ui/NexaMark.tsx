import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import { site } from '@/config/site'

/** Monograma "N" da logo, com halo azul. */
export function NexaMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-xl bg-brand/35 blur-xl"
        style={{ transform: 'scale(0.85)' }}
      />
      {/* O PNG ja vem com fundo transparente (ver scripts/crop-logo.mjs). */}
      <Image src="/nexa-mark.png" alt="" width={size} height={size} className="relative" priority />
    </span>
  )
}

/** Marca completa (monograma + wordmark) usada como link para a home. */
export function NexaLogo({ locale, className = '' }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center gap-2.5 ${className}`.trim()}
      aria-label={site.name}
    >
      <NexaMark size={36} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.14em] text-ink">NEXA</span>
        <span className="mt-1 text-[0.58rem] font-medium tracking-[0.42em] text-cyan/90">
          AGENCY
        </span>
      </span>
    </Link>
  )
}
