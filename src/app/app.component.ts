import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LandenComponent} from "./landen/landen.component";

@Component({
  selector: 'app-root',
  template:'<app-welcome></app-welcome><app-landen></app-landen>',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, LandenComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landenfront';
}
