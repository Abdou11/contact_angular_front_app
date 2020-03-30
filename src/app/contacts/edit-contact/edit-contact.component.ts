import { ContactsService } from './../../../service/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: Contact = new Contact();
  id :number;
  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactsService,public router:Router) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("params " + this.id);
    this.contactService.getOneContact(this.id).subscribe(
      (data: Contact) => {
        this.contact = data;
      }, err => { console.log(err); }
    );
  }

  onUpdate(c: Contact) {
    c = this.contact;
    this.contactService.updateContact(c).subscribe(
      (data:Contact) => {
        this.contact = data;
        alert("Contact MAJ");
        this.router.navigate(['contacts']);
      }, error => {
        alert("Erreur de MAJ");
        console.log(error);
      }
    );
  }

}
