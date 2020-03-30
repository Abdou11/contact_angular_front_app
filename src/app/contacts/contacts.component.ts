import { Contact } from './../../model/contact.model';
import { ContactsService } from '../../service/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  listContact = null;
  contact: Contact = new Contact();

  constructor(public contactsService: ContactsService, public router: Router) {

    this.getAllContacts();

  }

  editContact(id: number) {
    this.router.navigate(['editContact', id]);
  }

  deleteContact(c: Contact) {
    let confirm = window.confirm('êtes-vous sûr ?');
    if (confirm) {
      this.contactsService.deleteContact(c.id).subscribe(
        data => {
          this.listContact.splice(
            this.listContact.indexOf(c), 1
          );
        }, err => {
          console.log('err api ' + err);
        }
      );
    }
  }


  getAllContacts() {
    console.log("fetching list contacts ...")
    this.contactsService.getAllContacts().subscribe(data => {
      this.listContact = data;
    }, err => {
      console.log('err api ' + err);
    });

  }

  ngOnInit(): void {
  }

}
