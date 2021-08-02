import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-avena',
  templateUrl: './prod-avena.component.html',
  styleUrls: ['./prod-avena.component.css']
})
export class ProdAvenaComponent implements OnInit {
urlavena = "https://res.cloudinary.com/martinezweb/image/upload/v1627318684/assets/img/menu-img/avena/";
  constructor() { }

  ngOnInit(): void {
  }

}
