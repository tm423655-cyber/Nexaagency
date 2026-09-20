import { Star } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'

/** Iniciais do nome, usadas no lugar de uma foto. */
function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
}

export function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict

  return (
    <section className="relative bg-abyss/50 py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          align="center"
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal as="li" key={item.author} delay={index * 0.1}>
              <GlassCard interactive className="flex h-full flex-col gap-6 p-8">
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="size-4 fill-cyan text-cyan" />
                  ))}
                </div>

                <blockquote className="text-sm leading-relaxed text-ink/90">
                  “{item.quote}”
                </blockquote>

                <footer className="mt-auto flex items-center gap-3 border-t border-hairline pt-6">
                  <span
                    aria-hidden
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-white"
                  >
                    {initials(item.author)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium text-ink">{item.author}</span>
                    <span className="block text-muted">{item.role}</span>
                  </span>
                </footer>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
