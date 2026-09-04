import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { TiltCardDirective } from '../../tilt-card.directive';

interface Education {
  school: string;
  course: string;
  period: string;
  type: string;
}

interface OngoingStudy {
  title: string;
  description: string;
  period: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective, TiltCardDirective],
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
      school: 'Oracle',
      course: 'Java SE Advanced',
      period: '2023',
      type: 'Certificação'
    },
    {
      school: 'Amazon Web Services (AWS)',
      course: 'AWS Certified Cloud Practitioner',
      period: '2024',
      type: 'Certificação'
    },
    {
      school: 'IUTA',
      course: 'Técnico em Instrumentação / Eletrônica Industrial',
      period: '2013 — 2016',
      type: 'Graduação'
    }
  ];

  ongoingStudies: OngoingStudy[] = [
    {
      title: 'Arquitetura de Software e Sistemas Distribuídos',
      description: 'Estudo autodidata contínuo',
      period: '2025 — Atual'
    },
    {
      title: 'Inteligência Artificial Aplicada a Backend',
      description: 'LLMs, RAG, Prompt Engineering, Agentes Automáticos e integração de modelos de linguagem com aplicações Java',
      period: '2025 — Atual'
    }
  ];
}