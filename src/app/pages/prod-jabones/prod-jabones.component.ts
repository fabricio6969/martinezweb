import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-jabones',
  templateUrl: './prod-jabones.component.html',
  styleUrls: ['./prod-jabones.component.css']
})
export class ProdJabonesComponent implements OnInit {
urljabon= "https://res.cloudinary.com/martinezweb/image/upload/v1626278485/assets/img/menu-img/Jabones/";
  constructor() { }

  ngOnInit(): void {
  }

}
