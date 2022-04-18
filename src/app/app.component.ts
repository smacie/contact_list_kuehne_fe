import { Component } from '@angular/core';
import { ContactService } from './service/contact.service'
import { Contact } from "./model/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lstContact: any;
  nameToSearch: string = "";

  constructor(private contactService: ContactService) {
  }

  companyName = 'Kuehne+Nagel';
  mainPageContentTitle = 'Contact List'.toUpperCase();

  searchContact(){
    this.lstContact = [];
    this.contactService.getContactByName(this.nameToSearch).subscribe((data)=>
    {
      this.lstContact = data;
    })
  }
}
