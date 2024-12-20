import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from '../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [RouterModule, BtnComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export default class WelcomePageComponent {

}
