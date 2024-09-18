import {Component, OnInit} from '@angular/core';
import { AantalService } from "../services/aantal.service";

@Component({
  selector: 'app-landen',
  standalone: true,
  imports: [],
  templateUrl: './landen.component.html',
  styleUrl: './landen.component.css'
})
export class LandenComponent implements OnInit{

  aantal: number | undefined;

constructor(private aantalService: AantalService) {
}

ngOnInit() {
  this.aantalService
    .getAantal()
    .subscribe(data => {
      this.aantal = data;
    })
}
}
