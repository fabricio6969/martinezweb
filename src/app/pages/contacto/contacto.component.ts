import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  url = "";
  nombre = "";
  phone = "";
  email= "";
  mensaje= "";

  constructor(
    private _msjService: ContactsService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  enviarMsj(form: NgForm){
    console.log(form.value);

    this._msjService.enviarMensaje(form.value).subscribe(resp => {

      
      if(resp.ok === true){
        alert('Tu mensaje ha sido enviado correctamente');
      }else{
        alert('Hubo algún error con el mensaje');
      }
      console.log("Mensaje Enviado");
    })
  }

}
