import { site } from '@/config/site'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './BrandIcons'

/**
 * Le as redes de src/config/site.ts e descarta as que estao vazias,
 * para que ocultar uma rede seja so apagar a URL.
 */
export const socialLinks = [
  { name: 'Instagram', href: site.social.instagram, Icon: InstagramIcon },
  { name: 'LinkedIn', href: site.social.linkedin, Icon: LinkedinIcon },
  { name: 'Facebook', href: site.social.facebook, Icon: FacebookIcon },
].filter((link) => link.href.length > 0)

type SocialLinksProps = {
  className?: string
  iconClassName?: string
  label: string
}

export function SocialLinks({
  className = '',
  iconClassName = 'size-4',
  label,
}: SocialLinksProps) {
  if (socialLinks.length === 0) return null

  return (
    <ul aria-label={label} className={`flex items-center gap-3 ${className}`.trim()}>
      {socialLinks.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="inline-flex size-10 items-center justify-center rounded-full border border-hairline bg-white/5 text-muted transition duration-300 hover:border-cyan/40 hover:text-cyan"
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  )
}
