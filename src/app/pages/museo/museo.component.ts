import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museo',
  templateUrl: './museo.component.html',
  styleUrls: ['./museo.component.css']
})
export class MuseoComponent implements OnInit {

  urlmuseo = "https://res.cloudinary.com/martinezweb/image/upload/v1626353065/assets/img/museo-img/";
  constructor() { }

  ngOnInit(): void {
  }

}
