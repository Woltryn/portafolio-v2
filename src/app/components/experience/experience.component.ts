import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { TiltCardDirective } from '../../tilt-card.directive';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective, TiltCardDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      company: 'FDS, A DXC Technology Company',
      role: 'Business Applications Engineer II',
      period: 'Set/2024 — Fev/2026',
      location: 'Remoto',
      type: '1 ano e 6 meses',
      current: true,
      description: 'Desenvolvimento e manutenção de 12+ microsserviços backend em Java/Spring Boot para sistemas de pagamento e cobrança, suportando +10.000 transações/dia em ambiente de produção crítico.',
      highlights: [
        'Otimizou endpoint crítico de cobrança, reduzindo em 28% o tempo médio de resposta (de ~1.200ms para ~860ms).',
        'Conduziu migração de 2 milhões de contratos entre sistemas legacy e novos com zero perda de dados em ambiente financeiro regulado.',
        'Implementou processos batch com Spring Batch processando +50.000 registros/dia para integração entre 8 sistemas externos, reduzindo tempo de processamento em 60%.',
        'Escreveu testes unitários e de integração com JUnit e Mockito, elevando cobertura automatizada do time de 35% para 82% e reduzindo incidents de regressão em 45%.',
        'Integrou pipelines CI/CD, documentou contratos REST via OpenAPI/Swagger e realizou code reviews, padronizando práticas do time e reduzindo tempo de onboarding em 30%.'
      ]
    },
    {
      company: 'Delirium — Creative Agency',
      role: 'Desenvolvedor Full Stack',
      period: 'Out/2023 — Jul/2024',
      location: 'Remoto',
      type: '10 meses',
      description: 'Desenvolveu 3 portais de clientes e 1 e-commerce com equipe de design, entregando funcionalidades fullstack de ponta a ponta em 8 meses.',
      highlights: [
        'Construiu 5 RESTful APIs com Java/Spring Boot e Spring Data JPA, integradas a front-end em Angular, suportando +2.000 usuários ativos.',
        'Implementou autenticação via Spring Security e gerou +10.000 documentos PDF (faturas, certificados) com JasperReports, automatizando processos manuais.',
        'Garantiu cross-browser compatibility e responsividade, elevando a taxa de conversão do e-commerce em 15% após otimizações de UX.'
      ]
    }
  ];
}