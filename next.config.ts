import type { NextConfig } from 'next'
import { defaultLocale } from './src/i18n/config'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // A raiz nao renderiza nada: manda para o idioma padrao.
    return [{ source: '/', destination: `/${defaultLocale}`, permanent: false }]
  },
}

export default nextConfig
