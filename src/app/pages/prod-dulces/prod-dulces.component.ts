import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-dulces',
  templateUrl: './prod-dulces.component.html',
  styleUrls: ['./prod-dulces.component.css']
})
export class ProdDulcesComponent implements OnInit {
urlchocolates = "https://res.cloudinary.com/martinezweb/image/upload/v1628034693/assets/img/menu-img/dulces/";
  constructor() { }

  ngOnInit(): void {
  }

}
