import { Component, signal, HostListener, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  menuOpen = signal(false);
  scrolled = signal(false);
  activeSection = signal('');

  private sections: HTMLElement[] = [];
  private observer: IntersectionObserver | null = null;
  private scrollListener = () => this.updateActiveSection();

  ngAfterViewInit() {
    this.sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    this.setupObserver();
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.updateActiveSection();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.scrollListener);
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    this.sections.forEach((section) => this.observer!.observe(section));
  }

  private updateActiveSection() {
    const offset = 100;
    const scrollPos = window.scrollY + offset;
    let current: string = 'inicio';

    for (const section of this.sections) {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    }

    const sectionsBottom = this.sections.length
      ? this.sections[this.sections.length - 1].offsetTop + this.sections[this.sections.length - 1].offsetHeight
      : 0;
    if (window.scrollY + window.innerHeight >= sectionsBottom && sectionsBottom > 0) {
      current = this.sections[this.sections.length - 1].id;
    }

    this.activeSection.set(current);
  }

  isActive(id: string): boolean {
    if (id === 'inicio' && !this.activeSection()) return true;
    return this.activeSection() === id;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
