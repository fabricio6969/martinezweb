import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
urlnoticias = "https://res.cloudinary.com/martinezweb/image/upload/v1626715330/assets/img/noticias/";
  constructor() { }

  ngOnInit(): void {
  }

}
