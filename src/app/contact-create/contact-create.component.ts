import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
contact:Contact = new Contact();
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
   // this.contact = new Contact();
    this.contact.id = null;
    this.contact.description =""
    this.contact.email = "";
    this.contact.name = "";
  }

}
