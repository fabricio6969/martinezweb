import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: [

  ]
})
export class InicioComponent implements OnInit {
  urlinicio = "https://res.cloudinary.com/martinezweb/image/upload/v1626277737/assets/img/bg-img/";
  constructor(
    public router:Router
    ) { }

  ngOnInit(): void {
    this.router.navigate(['/Inicio']);
  }

}
