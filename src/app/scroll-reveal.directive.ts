import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

export type ScrollRevealAnimation =
  | 'fade-up'
  | 'blur'
  | 'slide-left'
  | 'slide-right'
  | 'zoom';

const ANIMATIONS: ReadonlySet<ScrollRevealAnimation> = new Set<ScrollRevealAnimation>([
  'fade-up',
  'blur',
  'slide-left',
  'slide-right',
  'zoom'
]);

/**
 * Progressive reveal on scroll.
 *
 * Usage:
 *   <div appScrollReveal>...</div>
 *   <div appScrollReveal="blur">...</div>
 *   <li appScrollReveal="fade-up" [revealDelay]="index * 65">...</li>
 *
 * The visual states live in src/styles/_animations.scss.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animation: ScrollRevealAnimation | '' = '';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;
  @Input() revealOnce = true;

  private readonly element: HTMLElement;
  private observer: IntersectionObserver | null = null;
  private revealed = false;

  constructor(elementRef: ElementRef<HTMLElement>) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.element.classList.add('sr', `sr--${this.resolveAnimation()}`);

    const delay = Math.max(0, this.revealDelay);
    if (delay > 0) {
      this.element.style.setProperty('--sr-delay', `${delay}ms`);
    }

    if (this.prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      this.reveal();
      return;
    }

    const threshold = Math.min(1, Math.max(0, this.revealThreshold));

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.reveal();
            if (this.revealOnce) {
              this.observer?.unobserve(this.element);
            }
          } else if (!this.revealOnce) {
            this.element.classList.remove('sr--visible');
            this.revealed = false;
          }
        }
      },
      { threshold }
    );

    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private reveal(): void {
    if (this.revealed) {
      return;
    }

    this.revealed = true;
    this.element.classList.add('sr--visible');
  }

  private resolveAnimation(): ScrollRevealAnimation {
    return this.animation && ANIMATIONS.has(this.animation)
      ? this.animation
      : 'fade-up';
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
