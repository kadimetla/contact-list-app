import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Contact} from '../contact.model'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
contacts:Contact[]
  constructor(public dataService: DataService) { }

  ngOnInit() {
this.dataService.getContacts().subscribe((data) => {console.log(data);this.contacts = data,
  (err) => {
    console.log(err);
  }
});
    
  }

}
