import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  urlnosotros = "https://res.cloudinary.com/martinezweb/image/upload/v1626277737/assets/img/bg-img/";
  constructor() { }

  ngOnInit(): void {
  }

  title = 'owlcarouselinAngular';  
  Images = ['../assets/img/colgate.png', '../assets/img/balanceado.png', '../assets/images/licores.png'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 

}
