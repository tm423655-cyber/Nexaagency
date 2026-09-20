import type { Locale } from './config'

/**
 * Todo o texto do site mora aqui, nos dois idiomas.
 * Para mudar qualquer frase do site, edite este arquivo — os componentes
 * nao contem texto fixo.
 */
const pt = {
  meta: {
    title: 'Nexa Agency — Criação de Sites e Sistemas Sob Medida',
    description:
      'Agência de criação de sites, landing pages, e-commerce e sistemas web sob medida. Design de alto nível, performance e resultado para o seu negócio.',
    keywords:
      'criação de sites, desenvolvimento web, landing page, e-commerce, sistema web, agência digital',
  },

  nav: {
    home: 'Início',
    services: 'Serviços',
    work: 'Projetos',
    process: 'Processo',
    pricing: 'Planos',
    contact: 'Contato',
    cta: 'Fale conosco',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    menu: 'Menu',
  },

  hero: {
    badge: 'Agência de sites e sistemas',
    titleLead: 'Sites e sistemas que',
    titleAccent: 'geram resultado',
    titleTail: 'para o seu negócio',
    description:
      'Do primeiro rascunho ao deploy: desenhamos, desenvolvemos e colocamos no ar plataformas rápidas, bonitas e feitas para converter. Sem template pronto, sem enrolação.',
    primaryCta: 'Começar meu projeto',
    secondaryCta: 'Ver projetos',
    whatsappMessage:
      'Olá! Vim pelo site da Nexa Agency e quero falar sobre um projeto.',
    stats: [
      { value: 120, suffix: '+', label: 'Projetos entregues' },
      { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
      { value: 21, suffix: ' dias', label: 'Entrega média' },
    ],
    sideCard: {
      label: 'Disponível para novos projetos',
      title: 'Atendimento remoto',
      subtitle: 'Brasil e exterior',
      cta: 'Agendar conversa',
    },
    scoreCard: {
      label: 'Avaliação média dos clientes',
      note: 'Baseado em projetos entregues nos últimos 12 meses',
    },
    socialLabel: 'Redes sociais',
  },

  marquee: {
    label: 'Tecnologias que usamos no dia a dia',
  },

  about: {
    eyebrow: 'Sobre nós',
    statementLead: 'Somos uma agência enxuta que',
    statementAccent1: 'une design e engenharia',
    statementMid: 'para entregar produtos digitais que as pessoas',
    statementAccent2: 'realmente usam',
    statementTail: '— e que o seu negócio consegue medir.',
    cards: {
      location: {
        label: '100% remoto',
        title: 'Onde você estiver',
        cta: 'Iniciar um projeto',
      },
      quote: {
        text: 'Um bom site não é o mais bonito: é o que faz o cliente comprar sem pensar duas vezes.',
        author: 'Equipe Nexa',
        role: 'Design & Engenharia',
      },
      trust: {
        title: 'Confiança construída projeto a projeto',
        description:
          'Atendemos negócios de serviços, varejo e SaaS — do site institucional à plataforma completa, com código próprio e suporte de verdade.',
      },
    },
  },

  services: {
    eyebrow: 'Serviços',
    title: 'Tudo o que seu negócio precisa na web',
    description:
      'Cada projeto é construído do zero, com código limpo, performance real e foco em conversão. Escolha o que faz sentido agora — o resto a gente evolui junto.',
    items: [
      {
        title: 'Sites institucionais',
        description:
          'A presença digital da sua empresa com identidade forte, textos que vendem e velocidade de carregamento que o Google recompensa.',
        tags: ['Design exclusivo', 'Responsivo', 'SEO técnico'],
      },
      {
        title: 'Landing pages de alta conversão',
        description:
          'Páginas focadas em um único objetivo: gerar lead ou venda. Estrutura testada, copy persuasiva e integração com seus anúncios.',
        tags: ['Copy + design', 'Testes A/B', 'Pixel & GA4'],
      },
      {
        title: 'Lojas virtuais',
        description:
          'E-commerce completo com checkout fluido, gestão de catálogo e pagamentos integrados. Pronto para escalar no primeiro Black Friday.',
        tags: ['Checkout otimizado', 'Pagamentos', 'Estoque'],
      },
      {
        title: 'Sistemas web sob medida',
        description:
          'Painéis, CRMs, áreas do cliente e automações internas. Software feito para o seu processo, não o contrário.',
        tags: ['Dashboards', 'Multiusuário', 'Relatórios'],
      },
      {
        title: 'Integrações e APIs',
        description:
          'Conectamos seu site com ERP, CRM, meios de pagamento, WhatsApp e o que mais for preciso para tirar trabalho manual do caminho.',
        tags: ['REST & Webhooks', 'Automações', 'WhatsApp API'],
      },
      {
        title: 'Manutenção, SEO e performance',
        description:
          'Depois do lançamento a gente não some. Monitoramento, atualizações, otimização de velocidade e evolução contínua.',
        tags: ['Suporte mensal', 'Core Web Vitals', 'Melhorias'],
      },
    ],
  },

  process: {
    eyebrow: 'Como trabalhamos',
    title: 'Um processo claro, do briefing ao ar',
    description:
      'Você sabe exatamente em que etapa o projeto está e o que vem a seguir. Nada de surpresa no fim.',
    steps: [
      {
        title: 'Descoberta',
        description:
          'Entendemos seu negócio, seu público e seus objetivos. Saímos daqui com escopo, prazo e preço fechados.',
      },
      {
        title: 'Design',
        description:
          'Protótipo navegável no Figma. Você aprova cada tela antes de uma linha de código ser escrita.',
      },
      {
        title: 'Desenvolvimento',
        description:
          'Código próprio, revisões semanais e um ambiente de testes para você acompanhar a evolução em tempo real.',
      },
      {
        title: 'Lançamento e evolução',
        description:
          'Publicamos, configuramos analytics e SEO, treinamos seu time e seguimos melhorando com base em dados.',
      },
    ],
  },

  work: {
    eyebrow: 'Projetos',
    title: 'Trabalhos que falam por si',
    description:
      'Uma amostra do tipo de projeto que entregamos. Quer ver os cases completos com números? É só pedir.',
    resultLabel: 'Resultado',
    cta: 'Quero um projeto assim',
    items: [
      {
        name: 'Órbita Studio',
        category: 'Site institucional',
        result: '+68% de tempo na página',
      },
      {
        name: 'Vetor Contábil',
        category: 'Landing page',
        result: '3,4x mais leads por mês',
      },
      {
        name: 'Casa Prisma',
        category: 'Loja virtual',
        result: '+42% de conversão no checkout',
      },
      {
        name: 'Meridiano CRM',
        category: 'Sistema web',
        result: '12h/semana economizadas',
      },
      {
        name: 'Nível Fitness',
        category: 'App + integrações',
        result: '9 mil agendamentos no 1º ano',
      },
      {
        name: 'Atlas Log',
        category: 'Portal do cliente',
        result: '−55% de chamados no suporte',
      },
    ],
    disclaimer:
      'Projetos ilustrativos exibidos como exemplo do nosso padrão de entrega.',
  },

  pricing: {
    eyebrow: 'Planos',
    title: 'Preço transparente, sem letra miúda',
    description:
      'Valores de referência para você se planejar. O orçamento final sai depois da conversa de descoberta — e não muda no meio do caminho.',
    popular: 'Mais escolhido',
    from: 'a partir de',
    custom: 'sob consulta',
    cta: 'Quero este plano',
    whatsappMessage: 'Olá! Tenho interesse no plano',
    note: 'Parcelamos em até 12x. Domínio e hospedagem do primeiro ano inclusos nos planos Essencial e Profissional.',
    plans: [
      {
        name: 'Essencial',
        price: 'R$ 2.900',
        tagline: 'Para quem precisa existir bem na internet, rápido.',
        features: [
          'Site de até 5 páginas',
          'Design exclusivo e responsivo',
          'Otimização básica de SEO',
          'Formulário e WhatsApp integrados',
          'Publicação e domínio configurados',
          '30 dias de suporte',
        ],
      },
      {
        name: 'Profissional',
        price: 'R$ 6.900',
        tagline: 'Para negócios que usam o site como canal de vendas.',
        features: [
          'Site ou loja com páginas ilimitadas',
          'Protótipo completo no Figma',
          'Copywriting orientado a conversão',
          'Blog e painel de administração',
          'SEO técnico e Core Web Vitals',
          'Integrações (CRM, pagamentos, analytics)',
          '90 dias de suporte',
        ],
      },
      {
        name: 'Sob medida',
        price: null,
        tagline: 'Para sistemas, plataformas e projetos de longo prazo.',
        features: [
          'Sistema web ou plataforma completa',
          'Arquitetura e banco de dados próprios',
          'Área de cliente e múltiplos perfis',
          'Integrações e APIs dedicadas',
          'Squad alocado e sprints quinzenais',
          'Contrato de manutenção contínua',
        ],
      },
    ],
  },

  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'O que os clientes dizem',
    items: [
      {
        quote:
          'Entregaram em três semanas o que outra agência levou seis meses para não entregar. O site ficou impecável e o suporte é imediato.',
        author: 'Renata Alves',
        role: 'Sócia, clínica odontológica',
      },
      {
        quote:
          'A landing page pagou o investimento no primeiro mês. Hoje é de onde vem a maior parte dos nossos orçamentos.',
        author: 'Diego Martins',
        role: 'Diretor comercial, indústria',
      },
      {
        quote:
          'Eles entenderam o nosso processo antes de programar qualquer coisa. O sistema encaixou como uma luva no dia a dia da equipe.',
        author: 'Camila Souza',
        role: 'Gerente de operações, logística',
      },
    ],
  },

  faq: {
    eyebrow: 'Dúvidas',
    title: 'Perguntas frequentes',
    description: 'Não achou a sua? Chame no WhatsApp, respondemos rápido.',
    items: [
      {
        question: 'Quanto tempo leva para o site ficar pronto?',
        answer:
          'Uma landing page fica pronta em 7 a 10 dias. Um site institucional leva de 2 a 4 semanas. Sistemas sob medida variam conforme o escopo e definimos o cronograma na conversa de descoberta.',
      },
      {
        question: 'Quanto custa?',
        answer:
          'Os valores de referência estão na seção de planos. O orçamento final depende do número de páginas, integrações e funcionalidades — e é fechado antes de começarmos, sem alteração no meio do projeto.',
      },
      {
        question: 'Domínio e hospedagem estão inclusos?',
        answer:
          'Sim, o primeiro ano está incluso nos planos Essencial e Profissional. Configuramos tudo para você e o domínio fica registrado no seu nome, nunca no nosso.',
      },
      {
        question: 'Eu consigo editar o site depois?',
        answer:
          'Sim. Entregamos um painel de administração simples para você trocar textos, imagens e publicar posts sem depender de ninguém. E gravamos um treinamento em vídeo para o seu time.',
      },
      {
        question: 'Como funciona o pagamento?',
        answer:
          'Normalmente 50% para iniciar e 50% na entrega, com parcelamento em até 12x no cartão, Pix ou boleto. Contratos de manutenção são mensais e podem ser cancelados a qualquer momento.',
      },
      {
        question: 'O que preciso enviar para começar?',
        answer:
          'Basicamente logo, textos e fotos que você já tiver. Se não tiver nada pronto, tudo bem: ajudamos com a redação e indicamos bancos de imagem e fotógrafos.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos tirar seu projeto do papel',
    description:
      'Conte em duas linhas o que você precisa. Respondemos no mesmo dia útil com os próximos passos — sem compromisso.',
    whatsapp: 'Chamar no WhatsApp',
    whatsappMessage:
      'Olá! Quero conversar sobre um projeto com a Nexa Agency.',
    email: 'Enviar e-mail',
    emailSubject: 'Novo projeto — Nexa Agency',
    instagram: 'Ver no Instagram',
    availability: 'Respondemos de segunda a sexta, das 9h às 18h.',
  },

  footer: {
    tagline:
      'Agência de criação de sites e sistemas sob medida. Design, código e estratégia no mesmo lugar.',
    navTitle: 'Navegação',
    servicesTitle: 'Serviços',
    contactTitle: 'Contato',
    social: 'Redes',
    rights: 'Todos os direitos reservados.',
    builtWith: 'Feito com Next.js e muito café.',
  },

  common: {
    backToTop: 'Voltar ao topo',
    whatsappFab: 'Falar no WhatsApp',
  },
}

/** O dicionario em portugues define a forma; o ingles precisa espelha-la. */
export type Dictionary = typeof pt

const en: Dictionary = {
  meta: {
    title: 'Nexa Agency — Custom Websites and Web Systems',
    description:
      'Web agency building websites, landing pages, online stores and custom web systems. High-end design, real performance and measurable results.',
    keywords:
      'web design, web development, landing page, e-commerce, custom software, digital agency',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    work: 'Work',
    process: 'Process',
    pricing: 'Pricing',
    contact: 'Contact',
    cta: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
  },

  hero: {
    badge: 'Websites & web systems agency',
    titleLead: 'Websites and systems that',
    titleAccent: 'drive real results',
    titleTail: 'for your business',
    description:
      'From the first sketch to deployment: we design, build and ship fast, beautiful platforms made to convert. No templates, no runaround.',
    primaryCta: 'Start my project',
    secondaryCta: 'See our work',
    whatsappMessage: 'Hi! I found Nexa Agency online and would like to discuss a project.',
    stats: [
      { value: 120, suffix: '+', label: 'Projects delivered' },
      { value: 98, suffix: '%', label: 'Happy clients' },
      { value: 21, suffix: ' days', label: 'Average delivery' },
    ],
    sideCard: {
      label: 'Available for new projects',
      title: 'Fully remote',
      subtitle: 'Brazil and worldwide',
      cta: 'Book a call',
    },
    scoreCard: {
      label: 'Average client rating',
      note: 'Based on projects delivered in the last 12 months',
    },
    socialLabel: 'Social media',
  },

  marquee: {
    label: 'The stack we build with every day',
  },

  about: {
    eyebrow: 'About us',
    statementLead: 'We are a lean agency that',
    statementAccent1: 'blends design and engineering',
    statementMid: 'to ship digital products people',
    statementAccent2: 'actually use',
    statementTail: '— and that your business can measure.',
    cards: {
      location: {
        label: '100% remote',
        title: 'Wherever you are',
        cta: 'Start a project',
      },
      quote: {
        text: 'A great website is not the prettiest one: it is the one that makes customers buy without thinking twice.',
        author: 'Nexa Team',
        role: 'Design & Engineering',
      },
      trust: {
        title: 'Trust built one project at a time',
        description:
          'We work with service businesses, retail and SaaS — from a marketing site to a full platform, with our own code and support that actually answers.',
      },
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Everything your business needs on the web',
    description:
      'Every project is built from scratch, with clean code, real performance and a focus on conversion. Pick what matters now — we grow the rest together.',
    items: [
      {
        title: 'Marketing websites',
        description:
          'Your company online with a strong identity, copy that sells and the loading speed Google rewards.',
        tags: ['Custom design', 'Responsive', 'Technical SEO'],
      },
      {
        title: 'High-converting landing pages',
        description:
          'Pages built around a single goal: generate a lead or a sale. Proven structure, persuasive copy and full ad-platform tracking.',
        tags: ['Copy + design', 'A/B testing', 'Pixel & GA4'],
      },
      {
        title: 'Online stores',
        description:
          'Complete e-commerce with a smooth checkout, catalog management and integrated payments. Ready to scale on its first Black Friday.',
        tags: ['Optimized checkout', 'Payments', 'Inventory'],
      },
      {
        title: 'Custom web systems',
        description:
          'Dashboards, CRMs, client portals and internal automation. Software shaped around your process, not the other way around.',
        tags: ['Dashboards', 'Multi-user', 'Reporting'],
      },
      {
        title: 'Integrations and APIs',
        description:
          'We connect your site to your ERP, CRM, payment providers, WhatsApp and whatever else it takes to remove manual work.',
        tags: ['REST & Webhooks', 'Automation', 'WhatsApp API'],
      },
      {
        title: 'Maintenance, SEO and performance',
        description:
          'We do not disappear after launch. Monitoring, updates, speed optimization and continuous improvement.',
        tags: ['Monthly support', 'Core Web Vitals', 'Improvements'],
      },
    ],
  },

  process: {
    eyebrow: 'How we work',
    title: 'A clear process, from brief to launch',
    description:
      'You always know which stage the project is in and what comes next. No surprises at the end.',
    steps: [
      {
        title: 'Discovery',
        description:
          'We dig into your business, audience and goals. We leave this stage with scope, timeline and price locked in.',
      },
      {
        title: 'Design',
        description:
          'A clickable prototype in Figma. You approve every screen before a single line of code is written.',
      },
      {
        title: 'Development',
        description:
          'Our own code, weekly reviews and a staging environment so you can follow progress in real time.',
      },
      {
        title: 'Launch and growth',
        description:
          'We ship it, set up analytics and SEO, train your team and keep improving based on real data.',
      },
    ],
  },

  work: {
    eyebrow: 'Work',
    title: 'Projects that speak for themselves',
    description:
      'A sample of the kind of work we deliver. Want the full case studies with numbers? Just ask.',
    resultLabel: 'Result',
    cta: 'I want something like this',
    items: [
      {
        name: 'Órbita Studio',
        category: 'Marketing website',
        result: '+68% time on page',
      },
      {
        name: 'Vetor Contábil',
        category: 'Landing page',
        result: '3.4x more leads per month',
      },
      {
        name: 'Casa Prisma',
        category: 'Online store',
        result: '+42% checkout conversion',
      },
      {
        name: 'Meridiano CRM',
        category: 'Web system',
        result: '12h/week saved',
      },
      {
        name: 'Nível Fitness',
        category: 'App + integrations',
        result: '9k bookings in year one',
      },
      {
        name: 'Atlas Log',
        category: 'Client portal',
        result: '−55% support tickets',
      },
    ],
    disclaimer: 'Illustrative projects shown as examples of our delivery standard.',
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Transparent pricing, no fine print',
    description:
      'Reference prices so you can plan ahead. The final quote comes after the discovery call — and it does not change midway.',
    popular: 'Most chosen',
    from: 'from',
    custom: 'on request',
    cta: 'I want this plan',
    whatsappMessage: 'Hi! I am interested in the plan',
    note: 'Up to 12 monthly installments. First year of domain and hosting included in the Essential and Professional plans.',
    plans: [
      {
        name: 'Essential',
        price: 'US$ 990',
        tagline: 'For those who need a solid web presence, fast.',
        features: [
          'Website with up to 5 pages',
          'Custom, responsive design',
          'Basic SEO optimization',
          'Contact form and WhatsApp built in',
          'Deployment and domain setup',
          '30 days of support',
        ],
      },
      {
        name: 'Professional',
        price: 'US$ 2,400',
        tagline: 'For businesses that use the website as a sales channel.',
        features: [
          'Website or store with unlimited pages',
          'Full Figma prototype',
          'Conversion-driven copywriting',
          'Blog and admin dashboard',
          'Technical SEO and Core Web Vitals',
          'Integrations (CRM, payments, analytics)',
          '90 days of support',
        ],
      },
      {
        name: 'Custom',
        price: null,
        tagline: 'For systems, platforms and long-term products.',
        features: [
          'Full web system or platform',
          'Dedicated architecture and database',
          'Client area with multiple roles',
          'Dedicated integrations and APIs',
          'Assigned squad and bi-weekly sprints',
          'Ongoing maintenance contract',
        ],
      },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What clients say',
    items: [
      {
        quote:
          'They delivered in three weeks what another agency failed to deliver in six months. The site is flawless and support is immediate.',
        author: 'Renata Alves',
        role: 'Partner, dental clinic',
      },
      {
        quote:
          'The landing page paid for itself in the first month. It is now where most of our quote requests come from.',
        author: 'Diego Martins',
        role: 'Sales director, manufacturing',
      },
      {
        quote:
          'They understood our process before writing any code. The system fit our team’s day-to-day perfectly.',
        author: 'Camila Souza',
        role: 'Operations manager, logistics',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    description: 'Did not find yours? Message us on WhatsApp, we reply fast.',
    items: [
      {
        question: 'How long does it take?',
        answer:
          'A landing page takes 7 to 10 days. A marketing website takes 2 to 4 weeks. Custom systems vary with scope and we lock the timeline during the discovery call.',
      },
      {
        question: 'How much does it cost?',
        answer:
          'Reference prices are in the pricing section. The final quote depends on the number of pages, integrations and features — and it is agreed before we start, with no mid-project changes.',
      },
      {
        question: 'Are domain and hosting included?',
        answer:
          'Yes, the first year is included in the Essential and Professional plans. We set everything up for you and the domain is registered in your name, never ours.',
      },
      {
        question: 'Can I edit the website myself afterwards?',
        answer:
          'Yes. We hand over a simple admin dashboard so you can change text, images and publish posts without depending on anyone. We also record a video walkthrough for your team.',
      },
      {
        question: 'How does payment work?',
        answer:
          'Usually 50% upfront and 50% on delivery, with installment options. Maintenance contracts are monthly and can be cancelled at any time.',
      },
      {
        question: 'What do I need to send to get started?',
        answer:
          'Mostly your logo, copy and photos, if you have them. If you have nothing ready, that is fine: we help with the writing and point you to stock libraries and photographers.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let us get your project off the ground',
    description:
      'Tell us in two lines what you need. We reply the same business day with the next steps — no strings attached.',
    whatsapp: 'Chat on WhatsApp',
    whatsappMessage: 'Hi! I would like to discuss a project with Nexa Agency.',
    email: 'Send an email',
    emailSubject: 'New project — Nexa Agency',
    instagram: 'See on Instagram',
    availability: 'We reply Monday to Friday, 9am to 6pm.',
  },

  footer: {
    tagline:
      'Agency building custom websites and web systems. Design, code and strategy in one place.',
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    social: 'Social',
    rights: 'All rights reserved.',
    builtWith: 'Built with Next.js and a lot of coffee.',
  },

  common: {
    backToTop: 'Back to top',
    whatsappFab: 'Chat on WhatsApp',
  },
}

const dictionaries: Record<Locale, Dictionary> = { pt, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
