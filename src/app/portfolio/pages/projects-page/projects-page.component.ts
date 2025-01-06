import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export default class ProjectsPageComponent {

}
