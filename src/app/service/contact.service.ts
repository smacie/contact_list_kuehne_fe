import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // url for backend services
  urlSearchById = 'https://contact-list-kuehne-backend.herokuapp.com/contact/api/getContactById/';
  urlSearchByName = 'https://contact-list-kuehne-backend.herokuapp.com/contact/api/getContactsByName?name=';
  //urlSearchByName = 'http://localhost:8080/contact/api/getContactsByName?name=';

  constructor( private  httpClient: HttpClient) { }

  getContactByName(name: string){
    console.log("fullUrl:"+ this.urlSearchByName + name);
    return this.httpClient.get(this.urlSearchByName + name);
  }
}
