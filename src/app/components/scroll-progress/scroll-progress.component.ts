import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.css'
})
export class ScrollProgressComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bar', { static: true }) private bar!: ElementRef<HTMLElement>;

  private frameId: number | null = null;
  private readonly onScroll = () => this.scheduleUpdate();
  private readonly onResize = () => this.scheduleUpdate();
  private readonly onLoad = () => this.scheduleUpdate();

  constructor(private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
      window.addEventListener('load', this.onLoad, { passive: true });
      this.update();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('load', this.onLoad);

    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  private scheduleUpdate(): void {
    if (this.frameId !== null) {
      return;
    }

    this.frameId = requestAnimationFrame(() => {
      this.frameId = null;
      this.update();
    });
  }

  private update(): void {
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - doc.clientHeight;
    const progress = maxScroll > 0
      ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
      : 0;

    this.bar.nativeElement.style.transform = `scaleX(${progress})`;
  }
}
