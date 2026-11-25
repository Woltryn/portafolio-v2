import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../scroll-reveal.directive';
import { TiltCardDirective } from '../../tilt-card.directive';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, TiltCardDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly achievements: readonly Achievement[] = [
    {
      title: '+3',
      subtitle: 'Anos de experiência',
      description: 'Desenvolvimento de software e soluções empresariais.',
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Microservices',
      subtitle: 'Arquitetura distribuída',
      description: 'Desenvolvimento de sistemas financeiros, APIs REST e comunicação entre serviços.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Cloud & AWS',
      subtitle: 'Infraestrutura em nuvem',
      description: 'Implantação de aplicações utilizando AWS, Amazon EC2 e Amazon S3.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'End-to-End',
      subtitle: 'Desenvolvimento de soluções',
      description: 'Da arquitetura de software à implantação em produção.',
      icon: 'fas fa-layer-group'
    }
  ];
}
