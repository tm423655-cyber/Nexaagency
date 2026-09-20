import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Dictionary } from '@/i18n/dictionaries'

export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={faq.eyebrow}
              title={faq.title}
              description={faq.description}
            />
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <Accordion items={faq.items} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
