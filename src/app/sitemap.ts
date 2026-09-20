import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { site } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'pt' ? 1 : 0.8,
    alternates: {
      languages: {
        'pt-BR': `${site.url}/pt`,
        en: `${site.url}/en`,
      },
    },
  }))
}
