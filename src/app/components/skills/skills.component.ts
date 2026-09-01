import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

interface Skill {
  name: string;
  level: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Linguagens & Frameworks',
      icon: 'fas fa-code',
      skills: [
        { name: 'Java 8 / 11 / 17', level: 'Avançado' },
        { name: 'Spring Boot', level: 'Avançado' },
        { name: 'Spring Security', level: 'Avançado' },
        { name: 'Spring Data JPA', level: 'Avançado' },
        { name: 'Angular v16', level: 'Intermediário' },
        { name: 'JavaScript', level: 'Intermediário' },
        { name: 'JasperReports', level: 'Intermediário' }
      ]
    },
    {
      title: 'Testes & Qualidade',
      icon: 'fas fa-vial',
      skills: [
        { name: 'JUnit', level: 'Avançado' },
        { name: 'Mockito', level: 'Avançado' },
        { name: 'Testes Unitários', level: 'Avançado' },
        { name: 'Testes de Integração', level: 'Avançado' },
        { name: 'SonarQube', level: 'Intermediário' }
      ]
    },
    {
      title: 'CI/CD & DevOps',
      icon: 'fas fa-rocket',
      skills: [
        { name: 'CI/CD Pipelines', level: 'Avançado' },
        { name: 'Docker', level: 'Intermediário' },
        { name: 'Kubernetes', level: 'Conhecimento' },
        { name: 'AWS', level: 'Conhecimento' },
        { name: 'Git / GitHub', level: 'Avançado' }
      ]
    },
    {
      title: 'Dados & Mensageria',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL', level: 'Avançado' },
        { name: 'Oracle', level: 'Intermediário' },
        { name: 'NoSQL', level: 'Intermediário' },
        { name: 'Elasticsearch', level: 'Conhecimento' },
        { name: 'Kafka', level: 'Conhecimento' }
      ]
    },
    {
      title: 'Arquitetura & Boas Práticas',
      icon: 'fas fa-cubes',
      skills: [
        { name: 'Microsserviços', level: 'Avançado' },
        { name: 'Arquitetura Hexagonal', level: 'Intermediário' },
        { name: 'APIs REST', level: 'Avançado' },
        { name: 'SOLID', level: 'Avançado' },
        { name: 'Design Patterns', level: 'Intermediário' },
        { name: 'Clean Code', level: 'Avançado' }
      ]
    },
    {
      title: 'Ferramentas & Práticas',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Scrum / Kanban', level: 'Avançado' },
        { name: 'GitHub Copilot', level: 'Avançado' },
        { name: 'Cursor', level: 'Avançado' },
        { name: 'ChatGPT / Claude', level: 'Avançado' },
        { name: 'Swagger UI', level: 'Avançado' },
        { name: 'Postman', level: 'Avançado' },
        { name: 'Kibana / Grafana', level: 'Intermediário' },
        { name: 'Jira / Confluence', level: 'Avançado' }
      ]
    }
  ];
}