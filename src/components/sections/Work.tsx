import { ArrowUpRight } from 'lucide-react'
import { ButtonExternal } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'
import { whatsappLink } from '@/config/site'

/**
 * Cada projeto ganha um "poster" gerado em CSS a partir do indice — sem
 * imagens externas. Troque este bloco por <Image /> quando houver prints reais.
 */
function poster(index: number) {
  const angles = [135, 200, 60, 320, 15, 250]
  const angle = angles[index % angles.length]
  return {
    backgroundImage: `linear-gradient(${angle}deg, rgba(34,217,255,.28) 0%, rgba(11,91,255,.22) 45%, rgba(7,54,168,.05) 100%)`,
  }
}

export function Work({ dict }: { dict: Dictionary }) {
  const { work } = dict

  return (
    <section id="projetos" className="relative bg-abyss/50 py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={work.eyebrow}
            title={work.title}
            description={work.description}
          />
          <Reveal delay={0.1}>
            <ButtonExternal
              href={whatsappLink(work.cta)}
              variant="secondary"
              size="lg"
              className="shrink-0"
            >
              {work.cta}
              <ArrowUpRight aria-hidden className="size-4" />
            </ButtonExternal>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {work.items.map((item, index) => (
            <Reveal as="li" key={item.name} delay={(index % 3) * 0.08}>
              <GlassCard
                as="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                interactive
                className="block h-full overflow-hidden"
              >
                <div
                  aria-hidden
                  className="relative flex h-44 items-center justify-center overflow-hidden border-b border-hairline"
                  style={poster(index)}
                >
                  <span className="grid-backdrop absolute inset-0 opacity-70" />
                  <span className="relative font-display text-6xl font-semibold text-white/85">
                    {item.name.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <p className="text-xs tracking-wide text-brand">{item.category}</p>
                  <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 border-t border-hairline pt-3 text-sm text-cyan">
                    {work.visitLabel}
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
