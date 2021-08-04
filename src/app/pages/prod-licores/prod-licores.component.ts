import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-licores',
  templateUrl: './prod-licores.component.html',
  styleUrls: ['./prod-licores.component.css']
})
export class ProdLicoresComponent implements OnInit {
urllicores = "https://res.cloudinary.com/martinezweb/image/upload/v1628084586/assets/img/menu-img/Licores/";
  constructor() { }

  ngOnInit(): void {
  }

}
