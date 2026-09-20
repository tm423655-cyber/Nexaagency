/**
 * Dados da Nexa Agency usados em todo o site.
 *
 * >>> TROQUE OS VALORES MARCADOS COM "TODO" PELOS SEUS DADOS REAIS. <<<
 * Nenhum outro arquivo precisa ser editado: todos os links de contato,
 * o sitemap e as metatags leem daqui.
 */
export const site = {
  name: 'Nexa Agency',
  /** Dominio final do site. Usado em metadata, sitemap e robots. */
  url: 'https://nexaagency.com.br', // TODO: seu dominio

  /** Numero do WhatsApp no formato internacional, so digitos: 55 + DDD + numero. */
  whatsapp: '5511999999999', // TODO: seu WhatsApp
  /** E-mail de contato exibido no rodape e na secao de contato. */
  email: 'contato@nexaagency.com.br', // TODO: seu e-mail

  social: {
    instagram: 'https://instagram.com/nexaagency', // TODO: seu Instagram
    linkedin: 'https://linkedin.com/company/nexaagency', // TODO: ou deixe '' para ocultar
    facebook: '', // opcional — deixe '' para ocultar
  },

  /** Cidade/regiao exibida no site e no JSON-LD. */
  location: {
    city: 'São Paulo',
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
