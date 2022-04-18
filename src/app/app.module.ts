import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './service/contact.service';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
