import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typingText') typingText!: ElementRef<HTMLSpanElement>;

  private phrases = [
    'Desenvolvedor Backend Java',
    'Spring Boot · RESTful APIs',
    'Microservices · Cloud'
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private typingSpeed = 80;

  private get reducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  ngAfterViewInit() {
    if (this.reducedMotion) {
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
