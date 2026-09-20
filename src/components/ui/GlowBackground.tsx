/**
 * Halos de luz azul/ciano posicionados como os arcos luminosos dos cantos
 * da logo. Puramente decorativo — fica atras do conteudo.
 */
export function GlowBackground({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${className}`.trim()}>
      <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-brand/25 blur-[130px]" />
      <div className="absolute top-10 -right-40 size-[30rem] rounded-full bg-cyan/12 blur-[140px]" />
      <div className="absolute -bottom-52 left-1/3 size-[36rem] rounded-full bg-brand-deep/25 blur-[150px]" />
    </div>
  )
}

/**
 * Arcos finos em gradiente citando o desenho de fundo da logo.
 * Usado apenas no hero, para nao competir com o conteudo das demais secoes.
 */
export function CornerArcs() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 size-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="nexa-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d9ff" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#0b5bff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0736a8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M-120 330 C 60 120, 250 -30, 470 -110" stroke="url(#nexa-arc)" strokeWidth="2" />
      <path d="M-160 250 C 30 40, 210 -90, 430 -170" stroke="url(#nexa-arc)" strokeWidth="1" />
      <path
        d="M1560 600 C 1380 790, 1200 910, 980 990"
        stroke="url(#nexa-arc)"
        strokeWidth="2"
      />
    </svg>
  )
}

/** Textura de ruido sutil, para o fundo escuro nao parecer chapado. */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  )
}
