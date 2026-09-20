import type { Dictionary } from '@/i18n/dictionaries'

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Figma',
  'Vercel',
  'Stripe',
  'WordPress',
]

export function TrustMarquee({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-hairline bg-abyss/60 py-10">
      <div className="shell">
        <p className="text-center text-xs tracking-[0.2em] text-muted uppercase">
          {dict.marquee.label}
        </p>
      </div>

      <div
        className="marquee-viewport relative mt-7 flex overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
        }}
      >
        {/* O conteudo e duplicado para o loop nao ter emenda visivel. */}
        <div className="marquee-track flex w-max shrink-0 items-center">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
            >
              {stack.map((name) => (
                <li
                  key={name}
                  className="font-display text-lg whitespace-nowrap text-muted transition-colors md:text-xl"
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
