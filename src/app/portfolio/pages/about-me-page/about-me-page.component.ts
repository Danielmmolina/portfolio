import { Component } from '@angular/core';
import { BtnComponent } from '../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css',
})
export default class AboutMePageComponent {}
