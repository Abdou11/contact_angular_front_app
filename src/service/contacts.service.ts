import { Contact } from './../model/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  url: string = `http://localhost:8080/api/contacts/`

  constructor(public http: HttpClient) {
  }

  getAllContacts() {
    return this.http.get(this.url);
  }

  getOneContact(id:number) {
    return this.http.get(this.url+id);
  }

  saveContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put(this.url, contact);
  }

  deleteContact(id:number) {
    return this.http.delete(this.url+id);
  }

}
