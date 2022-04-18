import {Component, OnInit, ViewChild} from '@angular/core';
import { ContactService } from './service/contact.service'

import {Contact} from "./model/contact";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  companyName = 'Kuehne+Nagel';
  mainPageContentTitle = 'Contact List'.toUpperCase();

  nameToSearch: string = "";
  displayedColumns: string[] = ['id', 'picture', 'fullName'];

  dataSource! : MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private contactService: ContactService) {
  }

  searchContact(){
    this.contactService.getContactByName(this.nameToSearch).subscribe((data: any)=>
    {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

}
