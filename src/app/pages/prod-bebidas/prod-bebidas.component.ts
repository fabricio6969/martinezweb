import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-bebidas',
  templateUrl: './prod-bebidas.component.html',
  styleUrls: ['./prod-bebidas.component.css']
})
export class ProdBebidasComponent implements OnInit {
urlbebidas = "https://res.cloudinary.com/martinezweb/image/upload/v1626960586/assets/img/menu-img/bebidas/";
  constructor() { }

  ngOnInit(): void {
  }

}
