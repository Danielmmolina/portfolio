import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {

  @Input({ required: true})
  public btn!: String;

  public router = inject(Router);

  goToProjects() {
    this.router.navigate(['./portfolio/projects']);
  }

}
