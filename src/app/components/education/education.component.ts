import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

interface Education {
  school: string;
  course: string;
  period: string;
  type: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [
    {
      school: 'Platz (Online)',
      course: 'Desenvolvimento Back-End com Java',
      period: '2022 — 2023',
      type: 'Certificação'
    },
    {
      school: 'Platzi & Udemy',
      course: 'Java SE — Fundamentos e Programação Orientada a Objetos',
      period: 'Jan/2023 — Mai/2023',
      type: 'Certificação'
    },
    {
      school: 'Platzi & W3Schools',
      course: 'Desenvolvimento Front-End',
      period: 'Mar/2022 — Out/2023',
      type: 'Certificação'
    },
    {
      school: 'Instituto Universitário de Tecnologia Aplicada (IUTA)',
      course: 'Tecnólogo em Instrumentação / Eletrônica Industrial',
      period: '2013 — 2016',
      type: 'Graduação'
    }
  ];
}