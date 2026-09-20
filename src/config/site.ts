/**
 * Dados da Nexa Agency usados em todo o site.
 *
 * >>> TROQUE OS VALORES MARCADOS COM "TODO" PELOS SEUS DADOS REAIS. <<<
 * Nenhum outro arquivo precisa ser editado: todos os links de contato,
 * o sitemap e as metatags leem daqui.
 */
export const site = {
  name: 'Nexa Agency',
  /**
   * Dominio do site, sem barra final e sem idioma no caminho — o resto do
   * codigo ja completa com /pt ou /en (ver [locale]/layout.tsx, sitemap.ts).
   * Hoje aponta para o deploy na Vercel; troque quando tiver dominio proprio.
   */
  url: 'https://nexaagency-web.vercel.app',

  /** Numero do WhatsApp no formato internacional, so digitos: 55 + DDD + numero. */
  whatsapp: '5516992881883',
  /** E-mail de contato exibido no rodape e na secao de contato. */
  email: 'nexaagencycontact1@gmail.com',

  social: {
    instagram: 'https://instagram.com/nexaa_agency1',
    linkedin: '', // opcional — preencha para exibir o icone do LinkedIn
    facebook: '', // opcional — preencha para exibir o icone do Facebook
  },

  /** Cidade/regiao exibida no rodape e no JSON-LD. */
  location: {
    city: '', // TODO: sua cidade — deixe '' e so o estado aparece
    region: 'SP',
    country: 'BR',
  },
} as const

/** Monta o link do WhatsApp com uma mensagem ja preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

/** Monta o link de e-mail com assunto preenchido. */
export function mailtoLink(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}

/** "Cidade — UF", ou so a UF enquanto a cidade nao estiver preenchida. */
export function locationLabel(): string {
  const { city, region } = site.location
  return city ? `${city} — ${region}` : region
}

/** "@usuario", derivado da URL do Instagram em site.social.instagram. */
export function instagramHandle(): string {
  const handle = site.social.instagram.split('/').filter(Boolean).pop()
  return handle ? `@${handle}` : ''
}
