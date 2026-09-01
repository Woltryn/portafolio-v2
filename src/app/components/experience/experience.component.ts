import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

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
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      company: 'FDS, A DXC Technology Company',
      role: 'Desenvolvedor Back-End Java',
      period: 'Set/2024 — Jan/2026',
      location: 'Remoto',
      type: '1 ano e 5 meses',
      current: true,
      description: 'Atuação em squad ágil de grande porte no desenvolvimento de microsserviços backend para sistemas de pagamento, cobrança e serviços financeiros.',
      highlights: [
        'Reduzi aproximadamente 28% o tempo médio de resposta de um endpoint crítico, aumentando a estabilidade em produção.',
        'Implementei processos batch com Spring Batch para integração com sistemas externos.',
        'Conduzi migração de dados entre sistemas legacy e novos em ambiente de produção crítico.',
        'Documentei contratos de APIs via OpenAPI/Swagger, agilizando a integração entre times.',
        'Escrevi testes unitários e de integração com JUnit e Mockito.',
        'Integrei pipelines de CI/CD e realizei code reviews de colegas de equipe.'
      ]
    },
    {
      company: 'Delirium — Creative Agency',
      role: 'Desenvolvedor Full Stack',
      period: 'Abr/2023 — Out/2023',
      location: 'Remoto',
      type: '7 meses',
      description: 'Desenvolvimento de portais de clientes e e-commerce em conjunto com equipe de design, entregando funcionalidades completas de ponta a ponta.',
      highlights: [
        'Implementei autenticação e autorização de usuários com Spring Security.',
        'Construí APIs REST com Java, Spring Boot e Spring Data JPA, integradas a interfaces Angular.',
        'Gerei relatórios, faturas e certificados em PDF usando JasperReports.',
        'Garanti compatibilidade entre navegadores e dispositivos, elevando a experiência do usuário final.'
      ]
    }
  ];
}