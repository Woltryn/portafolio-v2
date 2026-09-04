import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../reveal.directive';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('emailForm') contactFormRef!: ElementRef<HTMLFormElement>;

  socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jos%C3%A9-a-jimen%C3%A9z-04a0aa22a/',
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

  submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    this.submitStatus.set('sending');

    try {
      await this.emailService.sendForm(this.contactFormRef.nativeElement);
      this.submitStatus.set('sent');
    } catch (error: any) {
      console.error('EmailJS error:', error?.text || error);
      this.submitStatus.set('error');
    }
  }

  resetForm() {
    if (this.contactFormRef) {
      this.contactFormRef.nativeElement.reset();
    }
    this.submitStatus.set('idle');
  }
}
