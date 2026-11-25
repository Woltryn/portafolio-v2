import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollRevealDirective } from '../../scroll-reveal.directive';
import { CV_URL, WHATSAPP_URL } from '../../data/site.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typingText') typingText!: ElementRef<HTMLSpanElement>;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly cvUrl = CV_URL;

  private phrases = [
    'Desenvolvedor Back-End Java',
    'Spring Boot · APIs REST',
    'Microsserviços · Cloud'
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private typingSpeed = 80;

  ngAfterViewInit() {
    if (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.typingText.nativeElement.textContent = this.phrases[0];
      return;
    }

    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private type() {
    if (!this.typingText) return;

    const currentPhrase = this.phrases[this.phraseIndex];

    if (!this.isDeleting) {
      this.charIndex++;
      if (this.charIndex > currentPhrase.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), 2000);
        return;
      }
    } else {
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        this.timeoutId = setTimeout(() => this.type(), 500);
        return;
      }
    }

    this.typingText.nativeElement.textContent = currentPhrase.substring(0, this.charIndex);
    this.timeoutId = setTimeout(() => this.type(), this.isDeleting ? 40 : this.typingSpeed);
  }
}
