import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string;
  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/user';
  }
  public getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl)
  }
}
