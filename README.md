# Portfólio — Jose A. Jimenez R.

Portfólio profissional de Jose Antonio Jimenez Rivero — Software Engineer com especialização em engenharia de software backend (Java, Spring Boot, APIs REST e microsserviços) e capacidades Full Stack com Angular.

## Stack

- **Angular 19** (componentes standalone, control flow, signals)
- **TypeScript**
- **SCSS** (tokens, animações e scrollbar em `src/styles/`)
- **Font Awesome 6** (ícones)
- **Google Fonts — Inter**

## Estrutura

```
src/
├── app/
│   ├── components/
│   │   ├── header/           → Navegação fixa, menu mobile e spotlight hover
│   │   ├── hero/             → Apresentação principal
│   │   ├── about/            → Sobre mim + indicadores profissionais
│   │   ├── skills/           → Habilidades técnicas
│   │   ├── experience/       → Experiência profissional (timeline)
│   │   ├── education/        → Formação acadêmica
│   │   ├── contact/          → Contato + formulário + redes sociais
│   │   ├── footer/           → Rodapé
│   │   ├── scroll-progress/  → Barra de progresso de rolagem
│   │   └── floating-actions/ → Voltar ao topo + WhatsApp
│   ├── data/site.data.ts     → Links, contatos e URL do WhatsApp/CV
│   ├── services/             → Envio do formulário (EmailJS)
│   ├── scroll-reveal.directive.ts
│   └── tilt-card.directive.ts
└── styles/                   → Tokens, animações e scrollbar globais
```

## Seções

- Header fixo com blur ao rolar e menu hambúrguer em mobile
- Animações de entrada ao rolar ( IntersectionObserver )
- Timeline de experiência profissional
- Badges de habilidades por categoria
- Formulário de contato com EmailJS
- Totalmente responsivo

## Comandos

```bash
npm install     # Instalar dependências
npm start       # Dev server em http://localhost:4200
npm run build   # Build de produção em dist/portafolio-v2/browser
```

## Deploy

Deploy automático para **GitHub Pages** via `.github/workflows/deploy.yml`, disparado por push na branch `main`.
