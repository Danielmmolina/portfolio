import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-project-page',
  standalone: true,
  imports: [],
  templateUrl: './view-project-page.component.html',
  styleUrl: './view-project-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewProjectPageComponent { }
