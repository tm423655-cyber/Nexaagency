import Image from 'next/image'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { ButtonExternal, ButtonLink } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { CornerArcs } from '@/components/ui/GlowBackground'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'
import type { Dictionary } from '@/i18n/dictionaries'
import { instagramHandle, site, whatsappLink } from '@/config/site'

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict
  const ctaHref = whatsappLink(hero.whatsappMessage)

  return (
    // Abaixo do md os respiros, o titulo e a coluna lateral encolhem: com
    // tudo empilhado numa coluna, as medidas do desktop fariam o hero ocupar
    // mais de duas telas de celular.
    <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pt-40 md:pb-28">
      <div aria-hidden className="hero-mesh pointer-events-none absolute inset-0 -z-20 overflow-hidden" />
      <CornerArcs />
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 -z-10" />

      <div className="shell">
        {/* min-w-0 nas duas colunas: sem isso, o botao "Agendar conversa"
            (nowrap) forca a trilha do grid a crescer alem do container em
            telas estreitas, e a secao so nao ganha scroll horizontal porque
            overflow-hidden acima corta o excesso — o card fica cortado. */}
        <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Coluna principal */}
          <div className="min-w-0 lg:col-span-7">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur">
                <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
                {hero.badge}
              </span>
            </div>

            <div>
              {/* No celular a fonte acompanha a largura da tela: assim o titulo
                  em portugues cabe em 3 linhas de 360px a 430px. */}
              <h1 className="mt-5 text-[clamp(2rem,8.6vw,3rem)] leading-[1.02] font-semibold md:mt-7 md:text-[clamp(2.4rem,7.2vw,4.75rem)]">
                {hero.titleLead}{' '}
                <span className="text-gradient">{hero.titleAccent}</span>{' '}
                {hero.titleTail}
              </h1>
            </div>

            <div>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted md:mt-7 md:text-lg">
                {hero.description}
              </p>
            </div>

            <div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-9">
                <ButtonExternal href={ctaHref} size="lg">
                  <WhatsAppIcon className="size-5" />
                  {hero.primaryCta}
                </ButtonExternal>
                <ButtonLink href="#projetos" variant="secondary" size="lg">
                  {hero.secondaryCta}
                  <ArrowRight aria-hidden className="size-4" />
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="min-w-0 flex flex-col gap-4 lg:col-span-5">
            <div>
              <GlassCard className="relative overflow-hidden p-5 md:p-6">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-16 size-56 rounded-full bg-brand/30 blur-[70px]"
                />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-xs text-muted">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-cyan" />
                    </span>
                    {hero.sideCard.label}
                  </span>
                </div>

                {/* So do md para cima: no celular o header ja mostra a logo e o
                    monograma grande aqui quase dobraria a altura do card. Sem
                    preload (fica lazy) para o celular nem baixar a imagem
                    escondida; o LCP do hero e o h1, nao ela. */}
                <div className="relative mt-6 hidden justify-center md:flex">
                  <Image
                    src="/nexa-mark.png"
                    alt=""
                    width={220}
                    height={220}
                    sizes="192px"
                    className="w-48"
                  />
                </div>

                {/* Abaixo de sm o botao sai: nao cabe ao lado do texto (usa
                    whitespace-nowrap) e, empilhado, so repetiria o CTA de
                    WhatsApp que esta logo acima. Envolvido num span pelo mesmo
                    motivo do Header: o Button ja define display. */}
                <div className="relative mt-4 flex items-end justify-between gap-3 md:mt-6">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <MapPin aria-hidden className="size-3.5" />
                      {hero.sideCard.subtitle}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold">
                      {hero.sideCard.title}
                    </p>
                  </div>
                  <span className="hidden sm:block">
                    <ButtonExternal href={ctaHref} variant="secondary">
                      {hero.sideCard.cta}
                    </ButtonExternal>
                  </span>
                </div>
              </GlassCard>
            </div>

            <div>
              <GlassCard className="flex items-center justify-between gap-5 p-5 md:p-6">
                <div>
                  <div className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-cyan text-cyan" />
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted">{hero.scoreCard.label}</p>
                  <p className="mt-1 text-xs text-muted/70">{hero.scoreCard.note}</p>
                </div>
                <p className="font-display text-5xl font-semibold text-gradient">5.0</p>
              </GlassCard>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <SocialLinks label={hero.socialLabel} />
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 min-w-0 items-center truncate text-xs text-muted transition hover:text-cyan"
                >
                  {instagramHandle()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
