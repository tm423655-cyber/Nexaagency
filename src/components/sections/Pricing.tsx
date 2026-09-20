import { Check } from 'lucide-react'
import { ButtonExternal } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlowBackground } from '@/components/ui/GlowBackground'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'
import { whatsappLink } from '@/config/site'

/**
 * Oferta unica: o preco e sempre "sob consulta", entao um unico card
 * evita repetir o mesmo valor em tres cartoes quase identicos.
 */
export function Pricing({ dict }: { dict: Dictionary }) {
  const { pricing } = dict
  const { plan } = pricing

  return (
    <section id="planos" className="relative overflow-hidden py-24 md:py-32">
      <GlowBackground className="opacity-70" />

      <div className="shell">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
          align="center"
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <GlassCard interactive className="overflow-hidden p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
              <div className="flex flex-col">
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{plan.tagline}</p>
                <p className="mt-8 font-display text-5xl font-semibold text-gradient">
                  {pricing.custom}
                </p>
                <ButtonExternal
                  href={whatsappLink(pricing.whatsappMessage)}
                  size="lg"
                  className="mt-8 w-full md:w-auto"
                >
                  {pricing.cta}
                </ButtonExternal>
              </div>

              <ul className="flex flex-col gap-3 border-t border-hairline pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted/80">
            {pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
