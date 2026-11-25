import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../scroll-reveal.directive';
import { EmailService } from '../../services/email.service';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  SOCIAL_LINKS
} from '../../data/site.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('emailForm') contactFormRef!: ElementRef<HTMLFormElement>;

  readonly socials = SOCIAL_LINKS;
  readonly contactEmail = CONTACT_EMAIL;
  readonly contactPhone = CONTACT_PHONE_DISPLAY;
  readonly contactPhoneHref = CONTACT_PHONE_HREF;

  submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    this.submitStatus.set('sending');

    try {
      await this.emailService.sendForm(this.contactFormRef.nativeElement);
      this.submitStatus.set('sent');
    } catch (error: unknown) {
      const detail =
        error instanceof Error
          ? error.message
          : error && typeof error === 'object' && 'text' in error
            ? String((error as { text: unknown }).text)
            : String(error);
      console.error('EmailJS error:', detail);
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
