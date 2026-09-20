import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Inter, Sora } from 'next/font/google'
import { MotionProvider } from '@/components/MotionProvider'
import { htmlLang, isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { site } from '@/config/site'
import '../globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

type LayoutParams = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const dict = getDictionary(locale)

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: site.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt-BR': '/pt',
        en: '/en',
        'x-default': '/pt',
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: htmlLang[locale],
      images: [{ url: '/nexa-logo.png', width: 826, height: 692, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/nexa-logo.png'],
    },
    robots: { index: true, follow: true },
  }
}

/** Dados estruturados para o Google entender do que se trata o negocio. */
function jsonLd(locale: Locale) {
  const dict = getDictionary(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: dict.meta.description,
    url: `${site.url}/${locale}`,
    image: `${site.url}/nexa-logo.png`,
    logo: `${site.url}/nexa-mark.png`,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    areaServed: site.location.country,
    address: {
      '@type': 'PostalAddress',
      // A cidade so entra no schema quando estiver preenchida.
      ...(site.location.city ? { addressLocality: site.location.city } : {}),
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    sameAs: Object.values(site.social).filter(Boolean),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutParams & { children: ReactNode }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    // As variaveis das fontes precisam ficar no <html>: os tokens --font-display
    // e --font-sans sao declarados em :root e uma custom property e resolvida
    // onde e declarada. Com as classes no <body>, var(--font-sora) era invalido
    // em :root e a tipografia inteira caia na fonte do sistema.
    <html
      lang={htmlLang[locale]}
      className={`${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Sem JavaScript as animacoes de entrada nunca rodam: o conteudo
            precisa aparecer assim mesmo. */}
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          // Conteudo proprio e estatico, gerado a partir de src/config/site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
