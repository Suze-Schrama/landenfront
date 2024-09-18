import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import { User } from "../model/user"

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Welcome {{ user }}</h1>`,
  standalone: true,
  imports: [],
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  user: string | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService
      .getUser()
      .subscribe(data => {
      this.user = data.username;
    }
    )
  }
}
