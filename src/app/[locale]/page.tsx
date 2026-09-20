import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustMarquee } from '@/components/sections/TrustMarquee'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Work } from '@/components/sections/Work'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { CtaContact } from '@/components/sections/CtaContact'
import { NoiseOverlay } from '@/components/ui/GlowBackground'
import { WhatsAppFab } from '@/components/ui/WhatsAppFab'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)

  return (
    <>
      <NoiseOverlay />
      <Header locale={locale} dict={dict} />

      <main>
        <Hero dict={dict} />
        <TrustMarquee dict={dict} />
        <About dict={dict} />
        <Services dict={dict} />
        <Process dict={dict} />
        <Work dict={dict} />
        <Pricing dict={dict} />
        <Faq dict={dict} />
        <CtaContact dict={dict} />
      </main>

      <Footer locale={locale} dict={dict} />
      <WhatsAppFab label={dict.common.whatsappFab} message={dict.contact.whatsappMessage} />
    </>
  )
}
