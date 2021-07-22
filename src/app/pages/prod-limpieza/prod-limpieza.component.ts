import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-limpieza',
  templateUrl: './prod-limpieza.component.html',
  styleUrls: ['./prod-limpieza.component.css']
})
export class ProdLimpiezaComponent implements OnInit {
  urllimpieza= "https://res.cloudinary.com/martinezweb/image/upload/v1626278502/assets/img/menu-img/limpieza/";
  constructor() { }

  ngOnInit(): void {
  }

}
