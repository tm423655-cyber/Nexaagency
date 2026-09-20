import { ArrowUpRight, Quote } from 'lucide-react'
import { ButtonExternal } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import type { Dictionary } from '@/i18n/dictionaries'
import { whatsappLink } from '@/config/site'

export function About({ dict }: { dict: Dictionary }) {
  const { about } = dict

  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
            {about.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-5xl font-display text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.25] font-medium">
            {about.statementLead}{' '}
            <span className="text-gradient">{about.statementAccent1}</span>{' '}
            {about.statementMid}{' '}
            <span className="text-gradient">{about.statementAccent2}</span>
            {about.statementTail}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <GlassCard className="flex h-full flex-col justify-between gap-8 p-8">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-3 py-1 text-xs text-muted">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  {about.cards.location.label}
                </span>
                <p className="mt-6 font-display text-3xl font-semibold md:text-4xl">
                  {about.cards.location.title}
                </p>
              </div>
              <ButtonExternal
                href={whatsappLink(dict.hero.whatsappMessage)}
                variant="secondary"
                size="lg"
                className="self-start"
              >
                {about.cards.location.cta}
                <ArrowUpRight aria-hidden className="size-4" />
              </ButtonExternal>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-4">
            <GlassCard className="flex h-full flex-col justify-between gap-6 p-8">
              <Quote aria-hidden className="size-8 text-brand" />
              <blockquote className="font-display text-lg leading-snug text-ink">
                “{about.cards.quote.text}”
              </blockquote>
              <footer className="text-sm">
                <p className="font-medium text-ink">{about.cards.quote.author}</p>
                <p className="text-muted">{about.cards.quote.role}</p>
              </footer>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.22} className="lg:col-span-3">
            <GlassCard className="flex h-full flex-col gap-4 p-8">
              <p className="font-display text-lg font-semibold">{about.cards.trust.title}</p>
              <p className="text-sm leading-relaxed text-muted">{about.cards.trust.description}</p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
