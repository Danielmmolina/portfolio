import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {

// @Input({ required: true})
public id: String = 'adfads';

public router = inject(Router);

goToProject() {
  this.router.navigate([`./portfolio/project/${this.id}`])
}
}
