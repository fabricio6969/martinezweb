import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-jabones',
  templateUrl: './prod-jabones.component.html',
  styleUrls: ['./prod-jabones.component.css']
})
export class ProdJabonesComponent implements OnInit {
urljabon= "https://res.cloudinary.com/martinezweb/image/upload/v1626714210/assets/img/menu-img/cuidado_personal/";
  constructor() { }

  ngOnInit(): void {
  }

}
