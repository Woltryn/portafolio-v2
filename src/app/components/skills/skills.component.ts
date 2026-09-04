import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { TiltCardDirective } from '../../tilt-card.directive';

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
  imports: [RevealDirective, TiltCardDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      icon: 'fas fa-code',
      skills: [
        { name: 'Java 8 / 11 / 17', level: 'Avançado' },
        { name: 'Spring Boot', level: 'Avançado' },
        { name: 'Spring Security', level: 'Avançado' },
        { name: 'Spring Data JPA', level: 'Avançado' },
        { name: 'Hibernate', level: 'Avançado' },
        { name: 'Angular v16', level: 'Avançado' },
        { name: 'TypeScript', level: 'Avançado' },
        { name: 'JavaScript', level: 'Avançado' },
        { name: 'JasperReports', level: 'Avançado' }
      ]
    },
    {
      title: 'Testing',
      icon: 'fas fa-vial',
      skills: [
        { name: 'JUnit 5', level: 'Avançado' },
        { name: 'Mockito', level: 'Avançado' },
        { name: 'Unit & Integration Tests', level: 'Avançado' },
        { name: 'Test Coverage', level: 'Avançado' }
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
      title: 'Data & Messaging',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL', level: 'Avançado' },
        { name: 'Oracle', level: 'Avançado' },
        { name: 'PostgreSQL', level: 'Avançado' },
        { name: 'Elasticsearch', level: 'Conhecimento' },
        { name: 'Apache Kafka', level: 'Avançado' },
        { name: 'NoSQL', level: 'Intermediário' }
      ]
    },
    {
      title: 'Architecture',
      icon: 'fas fa-cubes',
      skills: [
        { name: 'Microservices', level: 'Avançado' },
        { name: 'Hexagonal Architecture', level: 'Intermediário' },
        { name: 'RESTful APIs', level: 'Avançado' },
        { name: 'SOLID', level: 'Avançado' },
        { name: 'Clean Code', level: 'Avançado' },
        { name: 'DDD', level: 'Intermediário' }
      ]
    },
    {
      title: 'Monitoring',
      icon: 'fas fa-chart-line',
      skills: [
        { name: 'SonarQube', level: 'Avançado' },
        { name: 'Kibana', level: 'Intermediário' },
        { name: 'Grafana', level: 'Intermediário' }
      ]
    },
    {
      title: 'AI Tools',
      icon: 'fas fa-robot',
      skills: [
        { name: 'GitHub Copilot', level: 'Avançado' },
        { name: 'Cursor', level: 'Avançado' },
        { name: 'ChatGPT / Claude', level: 'Avançado' }
      ]
    },
    {
      title: 'Practices',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Scrum / Kanban', level: 'Avançado' },
        { name: 'OOP', level: 'Avançado' },
        { name: 'Design Patterns', level: 'Intermediário' },
        { name: 'Swagger UI', level: 'Avançado' },
        { name: 'Postman', level: 'Avançado' },
        { name: 'Confluence', level: 'Avançado' },
        { name: 'Jira', level: 'Avançado' }
      ]
    }
  ];
}