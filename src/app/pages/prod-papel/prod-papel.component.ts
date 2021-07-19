import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-papel',
  templateUrl: './prod-papel.component.html',
  styleUrls: ['./prod-papel.component.css']
})
export class ProdPapelComponent implements OnInit {
  urlpapel = "https://res.cloudinary.com/martinezweb/image/upload/v1626278517/assets/img/menu-img/papel/";
  constructor() { }

  ngOnInit(): void {
  }

}
