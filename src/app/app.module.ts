import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule }    from '@angular/common/http';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';

const routes:Routes = [
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'addContact',component:AddContactComponent},
  {path:'editContact/:id',component:EditContactComponent},
  {path:'', redirectTo : '/contacts' , pathMatch : 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
