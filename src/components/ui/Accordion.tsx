'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

type AccordionItem = {
  question: string
  answer: string
}

/** Acordeao acessivel do FAQ: um item aberto por vez. */
export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-cyan"
              >
                <span className="font-display text-base font-medium md:text-lg">
                  {item.question}
                </span>
                <Plus
                  aria-hidden
                  className={`mt-0.5 size-5 shrink-0 text-muted transition-transform duration-300 ease-[var(--ease-out-soft)] ${
                    isOpen ? 'rotate-45 text-cyan' : ''
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6"
            >
              <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
