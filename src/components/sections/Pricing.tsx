import { Check } from 'lucide-react'
import { ButtonExternal } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlowBackground } from '@/components/ui/GlowBackground'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'
import { whatsappLink } from '@/config/site'

export function Pricing({ dict }: { dict: Dictionary }) {
  const { pricing } = dict

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

        <ul className="mt-14 grid items-start gap-4 lg:grid-cols-3">
          {pricing.plans.map((plan, index) => {
            const featured = index === 1

            return (
              <Reveal as="li" key={plan.name} delay={index * 0.1}>
                <GlassCard
                  className={`relative flex h-full flex-col gap-7 p-8 ${
                    featured ? 'border-brand/45 bg-white/[0.06] lg:scale-[1.03]' : ''
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white">
                      {pricing.popular}
                    </span>
                  )}

                  <div>
                    <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
                  </div>

                  <p className="font-display text-4xl font-semibold text-gradient">
                    {pricing.custom}
                  </p>

                  <ul className="flex flex-col gap-3 border-t border-hairline pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <ButtonExternal
                    href={whatsappLink(`${pricing.whatsappMessage} ${plan.name}.`)}
                    variant={featured ? 'primary' : 'secondary'}
                    size="lg"
                    className="mt-auto w-full"
                  >
                    {pricing.cta}
                  </ButtonExternal>
                </GlassCard>
              </Reveal>
            )
          })}
        </ul>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted/80">
            {pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
