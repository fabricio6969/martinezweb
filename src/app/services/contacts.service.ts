import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient
  ) { }

  
  enviarMensaje(operator: any){
    //let token = localStorage.getItem('tokenBT');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    const url = URL_SERVICE.url + '/send-email';

    return this.http.post(url, operator, { headers }).pipe(map((data: any) => data));
  }
}
