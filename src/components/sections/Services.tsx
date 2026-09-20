import { GlassCard } from '@/components/ui/GlassCard'
import { GlowBackground } from '@/components/ui/GlowBackground'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'

export function Services({ dict }: { dict: Dictionary }) {
  const { services } = dict

  return (
    <section id="servicos" className="relative overflow-hidden bg-abyss/50 py-24 md:py-32">
      <GlowBackground className="opacity-60" />

      <div className="shell">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 3) * 0.08}>
              <GlassCard interactive className="flex h-full flex-col gap-5 p-7">
                <span className="font-display text-sm tracking-[0.2em] text-cyan">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-hairline bg-white/5 px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
