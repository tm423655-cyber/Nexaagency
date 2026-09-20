# Nexa Agency — site institucional

Site de divulgação da **Nexa Agency**, agência de criação de sites e sistemas.
Página única, bilíngue (português e inglês), com tema visual derivado da logo
da marca: fundo preto-azulado, azul `#0B5BFF` e ciano `#22D9FF`.

## Antes de publicar: preencha seus dados

Abra **`src/config/site.ts`** e troque os valores marcados com `// TODO`:

| Campo | O que colocar |
| --- | --- |
| `url` | Seu domínio final, ex.: `https://nexaagency.com.br` |
| `whatsapp` | Número com DDI e DDD, só dígitos: `5511999999999` |
| `email` | E-mail de contato |
| `social.instagram` | Link do seu Instagram |
| `social.linkedin` | Link do LinkedIn (deixe `''` para ocultar) |
| `social.facebook` | Link do Facebook (deixe `''` para ocultar) |
| `location` | Cidade, estado e país |

Todos os botões de WhatsApp, e-mail, redes sociais, o rodapé, o sitemap e as
metatags leem desse arquivo — não é preciso editar mais nada.

### Trocar os textos

Todo o texto do site (nos dois idiomas) está em **`src/i18n/dictionaries.ts`**.
Os projetos da seção "Projetos" são exemplos ilustrativos: troque por cases
reais em `work.items`, nos dois idiomas.

### Trocar a logo

Substitua `public/nexa-logo-full.png` pelo arquivo novo e rode:

```bash
node scripts/crop-logo.mjs
```

O script recorta o lockup, gera o monograma com fundo transparente e atualiza
o favicon. Se o enquadramento sair errado, ajuste as coordenadas em `crops`,
no topo do script.

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # build de produção
npm run start    # serve o build de produção
npm run lint     # ESLint
```

## Publicando na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js sozinho — não é preciso configurar nada.
4. Depois do primeiro deploy, aponte seu domínio em **Settings → Domains**.

Lembre de preencher `site.url` com o domínio final antes do deploy: ele é usado
no `sitemap.xml`, no `robots.txt` e nas metatags de compartilhamento.

## Como o projeto está organizado

```
public/                  logo em três variantes
scripts/crop-logo.mjs    gera as variantes da logo a partir do original
src/app/[locale]/        rotas /pt e /en (layout define lang, metadata e JSON-LD)
src/app/globals.css      tokens de cor, tipografia e utilitários (glass, grid…)
src/components/layout/   header, menu mobile, rodapé, seletor de idioma
src/components/sections/ as seções da home, na ordem em que aparecem
src/components/ui/       peças reutilizadas (botão, card, reveal, acordeão…)
src/config/site.ts       seus dados de contato
src/i18n/                idiomas e todo o texto do site
```

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion.
- **Idiomas:** `/` redireciona para `/pt`; `/en` é a versão em inglês. As duas
  são geradas estaticamente.
- **Acessibilidade:** respeita `prefers-reduced-motion`, navegação por teclado
  com foco visível e o conteúdo aparece mesmo sem JavaScript.
