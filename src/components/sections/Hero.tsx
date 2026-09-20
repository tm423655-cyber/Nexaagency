import Image from 'next/image'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { ButtonExternal, ButtonLink } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { CornerArcs, GlowBackground } from '@/components/ui/GlowBackground'
import { CountUp } from '@/components/ui/CountUp'
import { Reveal } from '@/components/ui/Reveal'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'
import type { Dictionary } from '@/i18n/dictionaries'
import { site, whatsappLink } from '@/config/site'

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict
  const ctaHref = whatsappLink(hero.whatsappMessage)

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GlowBackground />
      <CornerArcs />
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 -z-10" />

      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Coluna principal */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur">
                <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 text-[clamp(2.4rem,7.2vw,4.75rem)] leading-[1.02] font-semibold">
                {hero.titleLead}{' '}
                <span className="text-gradient">{hero.titleAccent}</span>{' '}
                {hero.titleTail}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonExternal href={ctaHref} size="lg">
                  <WhatsAppIcon className="size-5" />
                  {hero.primaryCta}
                </ButtonExternal>
                <ButtonLink href="#projetos" variant="secondary" size="lg">
                  {hero.secondaryCta}
                  <ArrowRight aria-hidden className="size-4" />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <dl className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <GlassCard key={stat.label} className="px-5 py-5">
                    <dt className="text-xs tracking-wide text-muted">{stat.label}</dt>
                    <dd className="mt-2 font-display text-3xl font-semibold text-ink">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </dd>
                  </GlassCard>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Coluna lateral */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Reveal delay={0.2}>
              <GlassCard className="relative overflow-hidden p-6">
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

                <div className="relative mt-6 flex justify-center">
                  <Image
                    src="/nexa-mark.png"
                    alt=""
                    width={220}
                    height={220}
                    priority
                    className="w-40 md:w-48"
                  />
                </div>

                <div className="relative mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <MapPin aria-hidden className="size-3.5" />
                      {hero.sideCard.subtitle}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold">
                      {hero.sideCard.title}
                    </p>
                  </div>
                  <ButtonExternal href={ctaHref} variant="secondary">
                    {hero.sideCard.cta}
                  </ButtonExternal>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.3}>
              <GlassCard className="flex items-center justify-between gap-5 p-6">
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
            </Reveal>

            <Reveal delay={0.38}>
              <div className="flex items-center gap-4">
                <SocialLinks label={hero.socialLabel} />
                <a
                  href={`mailto:${site.email}`}
                  className="truncate text-xs text-muted transition hover:text-cyan"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
