import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../scroll-reveal.directive';
import { TiltCardDirective } from '../../tilt-card.directive';

interface ProjectLink {
  title: string;
  subtitle: string;
  url: string;
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  tag?: string;
  description: string;
  highlights: string[];
  highlightsTitle?: string;
  technologies?: string[];
  technologiesTitle?: string;
  project?: ProjectLink;
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective, TiltCardDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      company: 'Studio Army — Projeto Freelance',
      role: 'Desenvolvedor Full Stack Java',
      period: '2026',
      location: 'Curitiba, Brasil',
      type: '',
      tag: 'Projeto comercial',
      description: 'Desenvolvimento de uma plataforma web completa para digitalização e gestão de um salão de beleza, abrangendo desde a arquitetura de software e implementação das regras de negócio até a configuração da infraestrutura em nuvem e implantação em ambiente de produção.',
      highlightsTitle: 'Principais responsabilidades',
      highlights: [
        'Desenvolvimento de APIs REST com Java e Spring Boot.',
        'Autenticação e autorização com Spring Security e JWT.',
        'Modelagem e integração com PostgreSQL e Redis.',
        'Sistema de agendamento com controle de disponibilidade e prevenção de conflitos de horários.',
        'Desenvolvimento de interfaces responsivas com Angular e TypeScript.',
        'Painéis de gerenciamento para clientes, colaboradores e administradores.',
        'Configuração de infraestrutura em nuvem e deploy utilizando AWS, Amazon EC2 e Amazon S3.',
        'Desenvolvimento de scripts auxiliares em Python.',
        'Aplicação de boas práticas de segurança, desempenho e arquitetura de software.'
      ],
      technologiesTitle: 'Tecnologias utilizadas',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'Angular',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'AWS',
        'Amazon EC2',
        'Amazon S3',
        'Python',
        'JWT',
        'Lombok',
        'REST API',
        'Maven',
        'Git',
        'HTML5',
        'SCSS'
      ],
      project: {
        title: 'Visualizar projeto',
        subtitle: 'Acessar aplicação web',
        url: 'https://studioarmy.com.br/'
      }
    },
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