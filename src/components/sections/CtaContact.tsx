import { Mail } from 'lucide-react'
import { ButtonExternal } from '@/components/ui/Button'
import { GlowBackground } from '@/components/ui/GlowBackground'
import { Reveal } from '@/components/ui/Reveal'
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons'
import type { Dictionary } from '@/i18n/dictionaries'
import { mailtoLink, site, whatsappLink } from '@/config/site'

export function CtaContact({ dict }: { dict: Dictionary }) {
  const { contact } = dict

  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      <GlowBackground />
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 -z-10" />

      <div className="shell">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-4 py-1.5 text-xs tracking-[0.2em] text-muted uppercase backdrop-blur">
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
            {contact.eyebrow}
          </span>

          <h2 className="mt-8 text-[clamp(2rem,5.6vw,3.75rem)] leading-[1.06] font-semibold">
            {contact.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {contact.description}
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <ButtonExternal href={whatsappLink(contact.whatsappMessage)} size="lg">
              <WhatsAppIcon className="size-5" />
              {contact.whatsapp}
            </ButtonExternal>

            <ButtonExternal
              href={mailtoLink(contact.emailSubject)}
              variant="secondary"
              size="lg"
              target="_self"
            >
              <Mail aria-hidden className="size-4" />
              {contact.email}
            </ButtonExternal>

            {site.social.instagram && (
              <ButtonExternal href={site.social.instagram} variant="secondary" size="lg">
                <InstagramIcon className="size-4" />
                {contact.instagram}
              </ButtonExternal>
            )}
          </div>

          <p className="mt-8 text-xs text-muted/70">{contact.availability}</p>
        </Reveal>
      </div>
    </section>
  )
}
