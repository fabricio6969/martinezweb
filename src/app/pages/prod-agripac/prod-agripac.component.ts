import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-agripac',
  templateUrl: './prod-agripac.component.html',
  styleUrls: ['./prod-agripac.component.css']
})
export class ProdAgripacComponent implements OnInit {
  urlagripac = "https://res.cloudinary.com/martinezweb/image/upload/v1626278041/assets/img/menu-img/agripac/";
  constructor() { }

  ngOnInit(): void {
  }

}
