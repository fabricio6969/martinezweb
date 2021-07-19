import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  urlproducto = "https://res.cloudinary.com/martinezweb/image/upload/v1626708123/assets/img/menu-img/";
  constructor() { }

  ngOnInit(): void {
  }

}
