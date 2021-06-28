import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: [

  ]
})
export class InicioComponent implements OnInit {

  constructor(
    public router:Router
    ) { }

  ngOnInit(): void {
    this.router.navigate(['/Inicio']);
  }

}
