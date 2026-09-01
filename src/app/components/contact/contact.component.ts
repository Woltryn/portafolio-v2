import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jose-jimenez-04a0aa22a/',
      icon: 'fab fa-linkedin-in',
      theme: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Woltryn',
      icon: 'fab fa-github',
      theme: '#e8e8f0'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/josstry_n/?hl=es',
      icon: 'fab fa-instagram',
      theme: '#e4405f'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100000120216975',
      icon: 'fab fa-facebook-f',
      theme: '#1877f2'
    }
  ];

  onSubmit() {
    window.location.href = 'mailto:j.jimenez.dev7@gmail.com';
  }
}