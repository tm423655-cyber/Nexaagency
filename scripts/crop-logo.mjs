/**
 * Gera as variantes da logo usadas no site a partir do arquivo original.
 *
 *   node scripts/crop-logo.mjs
 *
 * Entrada:  public/nexa-logo-full.png  (mockup quadrado 1254x1254 entregue pelo cliente)
 * Saida:    public/nexa-logo.png       (lockup completo: monograma + NEXA AGENCY)
 *           public/nexa-mark.png       (somente o monograma "N", para favicon/OG)
 *           src/app/icon.png           (favicon do navegador, 192x192 — multiplo de
 *                                       48px, o tamanho que o Google recomenda para
 *                                       exibir o icone do site nos resultados de busca)
 *           src/app/apple-icon.png     (icone para adicionar a tela de inicio no iOS —
 *                                       a Apple recomenda fundo solido, sem transparencia)
 *
 * Rode de novo sempre que o arquivo original da logo for substituido.
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(root, 'public/nexa-logo-full.png')

/** Regioes medidas sobre o mockup original de 1254x1254. */
const crops = {
  lockup: { left: 214, top: 212, width: 826, height: 692 },
  mark: { left: 396, top: 206, width: 456, height: 456 },
}

/**
 * O monograma e arte luminosa sobre fundo preto. Transformamos o brilho em
 * canal alfa (alpha = max(r,g,b)) para que o "N" possa ser usado sobre
 * qualquer fundo sem carregar um quadrado preto junto — mix-blend-screen nao
 * resolve isso porque o header tem contexto de empilhamento proprio.
 */
async function toTransparent(region) {
  const { data, info } = await sharp(source)
    .extract(region)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const floor = 10 // descarta o ruido quase preto do fundo
  for (let i = 0; i < data.length; i += 4) {
    const brightest = Math.max(data[i], data[i + 1], data[i + 2])
    data[i + 3] = brightest <= floor ? 0 : Math.round(((brightest - floor) * 255) / (255 - floor))
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
}

async function write(target, pipeline) {
  const out = resolve(root, target)
  await mkdir(dirname(out), { recursive: true })
  await pipeline.png({ compressionLevel: 9 }).toFile(out)
  console.log(`ok  ${target}`)
}

// Lockup completo: mantem o fundo preto, e usado como imagem de
// compartilhamento (OG), onde a transparencia atrapalharia.
await write('public/nexa-logo.png', sharp(source).extract(crops.lockup))
await write('public/nexa-mark.png', await toTransparent(crops.mark))

// Favicon do navegador (e o que o Google costuma buscar): 192x192, multiplo
// de 48px. Fundo transparente fica bem tanto em aba clara quanto escura.
await write(
  'src/app/icon.png',
  (await toTransparent(crops.mark)).resize(192, 192, { fit: 'contain' }),
)

// Icone da tela de inicio no iOS: a Apple achata a transparencia de forma
// inconsistente, entao compomos o monograma sobre o fundo escuro do site
// (--color-void) antes de exportar, num quadrado solido de 180x180.
await write(
  'src/app/apple-icon.png',
  sharp({
    create: { width: 180, height: 180, channels: 4, background: '#01040B' },
  }).composite([
    {
      // .png() e obrigatorio aqui: toTransparent() devolve pixels crus, e
      // composite() so aceita um buffer que seja um arquivo de imagem valido.
      input: await (await toTransparent(crops.mark))
        .resize(140, 140, { fit: 'contain' })
        .png()
        .toBuffer(),
      gravity: 'center',
    },
  ]),
)
