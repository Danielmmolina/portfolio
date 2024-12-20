import { Component} from '@angular/core';
import { LayoutPageComponent } from './shared/pages/layout-page/layout-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LayoutPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-portfolio';
}
