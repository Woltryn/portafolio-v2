import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../scroll-reveal.directive';
import { SOCIAL_LINKS } from '../../data/site.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year = new Date().getFullYear();
  readonly socials = SOCIAL_LINKS;
}
