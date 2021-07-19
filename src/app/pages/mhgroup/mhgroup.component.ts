import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhgroup',
  templateUrl: './mhgroup.component.html',
  styleUrls: ['./mhgroup.component.css']
})
export class MhgroupComponent implements OnInit {
  urlmh = "https://res.cloudinary.com/martinezweb/image/upload/v1626277783/assets/img/img-mh/";
  constructor() { }

  ngOnInit(): void {
  }

}
