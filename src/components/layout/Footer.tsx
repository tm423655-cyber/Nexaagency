import { Mail, MapPin } from 'lucide-react'
import { NexaLogo } from '@/components/ui/NexaMark'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'
import { navItems } from './nav-items'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { locationLabel, site, whatsappLink } from '@/config/site'

/** Formata o numero do WhatsApp para leitura: +55 (11) 99999-9999 */
function formatPhone(raw: string) {
  const match = raw.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/)
  if (!match) return `+${raw}`
  const [, country, area, first, second] = match
  return `+${country} (${area}) ${first}-${second}`
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = navItems(dict)

  return (
    <footer className="relative border-t border-hairline bg-abyss/70">
      <div className="shell py-16">
        {/* min-w-0 em cada coluna: sem isso, um item sem espaco pra quebrar (o
            e-mail, uma string sem espacos) forca a trilha do grid a ficar mais
            larga que o container, empurrando a pagina para o lado. Duas colunas
            a partir do sm evita uma unica coluna esticada e vazia no tablet,
            antes do layout de 4 colunas assumir a partir do lg. */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <NexaLogo locale={locale} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
            <SocialLinks label={dict.footer.social} className="mt-7" />
          </div>

          <nav aria-label={dict.footer.navTitle} className="min-w-0 lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-ink">
              {dict.footer.navTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition hover:text-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-wide text-ink">
              {dict.footer.servicesTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {dict.services.items.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <a
                    href="#servicos"
                    className="text-sm text-muted transition hover:text-cyan"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-ink">
              {dict.footer.contactTitle}
            </h2>
            <ul className="mt-5 flex min-w-0 flex-col gap-4 text-sm">
              <li className="min-w-0">
                <a
                  href={whatsappLink(dict.contact.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 break-words min-w-0 text-muted transition hover:text-cyan"
                >
                  <WhatsAppIcon className="mt-0.5 size-4 shrink-0" />
                  {formatPhone(site.whatsapp)}
                </a>
              </li>
              <li className="min-w-0">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 break-words min-w-0 text-muted transition hover:text-cyan"
                >
                  <Mail aria-hidden className="mt-0.5 size-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
                {locationLabel()}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-hairline pt-8 text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
