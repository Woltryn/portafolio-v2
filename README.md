# Portfólio — Jose A. Jimenez R.

Portfólio profissional de Jose Antonio Jimenez Rivero — Desenvolvedor Back-End Java especializado em Spring Boot, APIs REST e Microsserviços.

## Stack

- **Angular 19** (standalone components, control flow, signals)
- **TypeScript**
- **CSS moderno** (CSS custom properties, Grid, Flexbox, `clamp()`)
- **Font Awesome 6** (ícones)
- **Google Fonts — Inter**
- **EmailJS** (envio do formulário de contato)

## Estrutura

```
src/app/
├── components/
│   ├── header/        → Navegação fixa + menu hambúrguer + scrollspy
│   ├── hero/          → Apresentação principal + typing effect
│   ├── about/         → Sobre mim
│   ├── skills/        → Habilidades técnicas
│   ├── experience/    → Experiência profissional (timeline)
│   ├── education/     → Formação acadêmica
│   ├── contact/       → Contato + formulário EmailJS + WhatsApp
│   └── footer/        → Rodapé + botão scroll-to-top flutuante
├── services/email.service.ts → Integração EmailJS
├── reveal.directive.ts      → Animação de entrada ao rolar (IntersectionObserver)
├── tilt-card.directive.ts   → Efeito 3D tilt nas cards
```

## Seções

- Header fixo com efeito blur ao rolar
- **Scrollspy** — link da seção ativa destacado no menu
- Menu hambúrguer em mobile
- **Typing effect** no hero + fundo com padrão de dots
- Cards com **efeito 3D tilt**
- Timeline de experiência profissional
- Badges de habilidades organizados por categoria
- **Botão scroll-to-top flutuante** que aparece ao rolar
- **Formulário de contato com EmailJS** (envia direto para o Gmail) + botão WhatsApp
- **Acessibilidade:** respeita `prefers-reduced-motion`, `scroll-margin-top` nos ancoramentos
- **SEO:** Open Graph, Twitter Cards, JSON-LD (schema.org Person), canonical
- Totalmente responsivo

## Deploy

O projeto é implantado automaticamente no **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `master`.

URL: https://woltryn.github.io/portafolio-v2/

## Comandos

```bash
ng serve        # Dev server em http://localhost:4200
ng build        # Build de produção em dist/portafolio-v2
```

## Branches

- `master` — versão de produção (deploy automático)
- `devChange` — melhorias em desenvolvimento (SEO, acessibilidade, UX)
