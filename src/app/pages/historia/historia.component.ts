import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  urlhistoria = "https://res.cloudinary.com/martinezweb/image/upload/v1626277772/assets/img/historia/";
  constructor() { }

  ngOnInit(): void {
  }

}
