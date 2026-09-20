import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition duration-300 ease-[var(--ease-out-soft)] disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-brand text-white shadow-[0_10px_40px_-12px_var(--color-brand)] hover:shadow-[0_16px_50px_-10px_var(--color-brand)] hover:brightness-110',
  secondary:
    'border border-hairline bg-white/5 text-ink backdrop-blur hover:border-cyan/40 hover:bg-white/10',
  ghost: 'text-muted hover:text-ink',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

function classes({ variant = 'primary', size = 'md', className = '' }: ButtonProps) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()
}

/** Link interno (ancoras e rotas do proprio site). */
export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
  ...rest
}: ButtonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={classes({ children, variant, size, className })} {...rest}>
      {children}
    </Link>
  )
}

/** Link externo (WhatsApp, e-mail, redes sociais). */
export function ButtonExternal({
  href,
  children,
  variant,
  size,
  className,
  ...rest
}: ButtonProps & ComponentProps<'a'>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes({ children, variant, size, className })}
      {...rest}
    >
      {children}
    </a>
  )
}
