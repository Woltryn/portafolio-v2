import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { TiltCardDirective } from '../../tilt-card.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, TiltCardDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
