import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {

  public itemsMenu = [
    { label: 'Inicio', url: './portfolio/welcome'},
    { label: 'Sobre mí', url: './portfolio/about-me'},
    { label: 'Proyectos', url: './portfolio/projects'},
  ];

}
