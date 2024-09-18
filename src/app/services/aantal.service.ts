import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AantalService {
  private aantalUrl: string;

  constructor(private http: HttpClient) {
    this.aantalUrl = 'http://localhost:8080/landen/aantal';
  }

  public getAantal(): Observable<number> {
    return this.http.get<number>(this.aantalUrl)
  }
}

