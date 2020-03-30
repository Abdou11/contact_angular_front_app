import { ContactsService } from './../../../service/contacts.service';
import { Contact } from './../../../model/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  mode:number = 1;

  contact: Contact = new Contact();

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    console.log("Init ...");
  }

  onModeChange()
  {
    this.mode = 1;
    this.contact = new Contact();
  }

  onSubmit(c: Contact) {
    c = this.contact;
    this.contactService.saveContact(c).subscribe(
      (data:Contact) => {
        console.log(data);
        this.mode = 2;
        this.contact = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
