import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Welcome</h1>`,
  standalone: true,
  imports: [],
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  user: string | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().forEach(value => console.log(value));
      // .subscribe(data => {
      // this.user = data;
      // console.log('User fetched: ', data);
    // })
  }
}
