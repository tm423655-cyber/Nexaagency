import type { Dictionary } from '@/i18n/dictionaries'

/** Ancoras da pagina unica, na ordem em que as secoes aparecem. */
export function navItems(dict: Dictionary) {
  return [
    { href: '#inicio', label: dict.nav.home },
    { href: '#servicos', label: dict.nav.services },
    { href: '#projetos', label: dict.nav.work },
    { href: '#processo', label: dict.nav.process },
    { href: '#planos', label: dict.nav.pricing },
    { href: '#contato', label: dict.nav.contact },
  ]
}
