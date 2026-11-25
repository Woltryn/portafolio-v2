import { Component, HostListener, OnInit } from '@angular/core';
import { WHATSAPP_URL } from '../../data/site.data';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  templateUrl: './floating-actions.component.html',
  styleUrl: './floating-actions.component.css'
})
export class FloatingActionsComponent implements OnInit {
  readonly whatsappUrl = WHATSAPP_URL;

  /** Radius used by the SVG progress ring (r = 22). */
  readonly ringCircumference = 2 * Math.PI * 22;

  visible = false;
  ringOffset = this.ringCircumference;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.visible = y > 400;

    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const progress = Math.min(1, Math.max(0, y / maxScroll));
    this.ringOffset = this.ringCircumference * (1 - progress);
  }

  scrollToTop(): void {
    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
