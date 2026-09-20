import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'

export function Process({ dict }: { dict: Dictionary }) {
  const { process } = dict

  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Linha que costura as etapas no desktop. */}
          <span
            aria-hidden
            className="absolute top-5 right-0 left-0 hidden h-px bg-gradient-brand opacity-40 lg:block"
          />

          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.1} className="relative">
              <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-hairline bg-void font-display text-sm font-semibold text-cyan">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
