import {Component, OnInit} from '@angular/core';
import { User } from '../model/user'
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  user: User | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    })
  }
}
