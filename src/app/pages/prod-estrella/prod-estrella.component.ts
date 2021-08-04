import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-estrella',
  templateUrl: './prod-estrella.component.html',
  styleUrls: ['./prod-estrella.component.css']
})
export class ProdEstrellaComponent implements OnInit {
urlestrella = "https://res.cloudinary.com/martinezweb/image/upload/v1628039996/assets/img/menu-img/estrella/";
  constructor() { }

  ngOnInit(): void {
  }

}
