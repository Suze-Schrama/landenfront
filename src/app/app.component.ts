import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  template:'<app-welcome></app-welcome>',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landenfront';
}
