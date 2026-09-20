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
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <NexaLogo locale={locale} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
            <SocialLinks label={dict.footer.social} className="mt-7" />
          </div>

          <nav aria-label={dict.footer.navTitle} className="lg:col-span-3">
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

          <div className="lg:col-span-2">
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

          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-ink">
              {dict.footer.contactTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={whatsappLink(dict.contact.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-muted transition hover:text-cyan"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  {formatPhone(site.whatsapp)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-muted transition hover:text-cyan"
                >
                  <Mail aria-hidden className="size-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-muted">
                <MapPin aria-hidden className="size-4 shrink-0" />
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
