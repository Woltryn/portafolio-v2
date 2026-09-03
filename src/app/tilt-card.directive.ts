import { Directive, ElementRef, OnInit, OnDestroy, HostListener } from '@angular/core';

@Directive({
  selector: '[appTiltCard]',
  standalone: true
})
export class TiltCardDirective implements OnInit, OnDestroy {
  private el: HTMLElement;
  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseLeave = this.onMouseLeave.bind(this);

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    this.el.style.transformStyle = 'preserve-3d';
    this.el.style.perspective = '800px';
    this.el.addEventListener('mousemove', this.boundMouseMove);
    this.el.addEventListener('mouseleave', this.boundMouseLeave);
  }

  ngOnDestroy() {
    this.el.removeEventListener('mousemove', this.boundMouseMove);
    this.el.removeEventListener('mouseleave', this.boundMouseLeave);
  }

  private onMouseMove(e: MouseEvent) {
    const rect = this.el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    this.el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px) scale(1.01)`;
  }

  private onMouseLeave() {
    this.el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
  }
}
