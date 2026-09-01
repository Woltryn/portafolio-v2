# Portfólio — Jose A. Jimenez R.

Portfólio profissional de Jose Antonio Jimenez Ramirez — Desenvolvedor Back-End Java especializado em Spring Boot, APIs REST e Microsserviços.

## Stack

- **Angular 19** (standalone components, control flow, signals)
- **TypeScript**
- **CSS moderno** (CSS custom properties, Grid, Flexbox, `clamp()`)
- **Font Awesome 6** (ícones)
- **Google Fonts — Inter**

## Estrutura

```
src/app/
├── components/
│   ├── header/        → Navegação fixa + menu hambúrguer
│   ├── hero/          → Apresentação principal
│   ├── about/         → Sobre mim
│   ├── skills/        → Habilidades técnicas
│   ├── experience/    → Experiência profissional (timeline)
│   ├── education/     → Formação acadêmica
│   ├── contact/       → Contato + redes sociais
│   └── footer/        → Rodapé
├── reveal.directive.ts → Animação de entrada ao rolar (IntersectionObserver)
```

## Seções

- Header fixo com efeito blur ao rolar
- Menu hambúrguer em mobile
- Timeline de experiência profissional
- Badges de habilidades organizados por categoria
- Animações de reveal ao fazer scroll
- Totalmente responsivo

## Comandos

```bash
ng serve        # Dev server em http://localhost:4200
ng build        # Build de produção em dist/portafolio-v2
```

## Melhorias futuras sugeridas

- Adicionar backend (ex.: Spring Boot) para envio real do formulário de contato
- Trocar foto `foto-profissional.png` por versão otimizada (WebP)
- Deploy automatizado via GitHub Actions (Vercel/Netlify/AWS)