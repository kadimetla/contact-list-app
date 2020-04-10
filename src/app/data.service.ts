import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Contact} from './contact.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private contactsUrl = '/api/contacts'
  constructor(private http: HttpClient) { }

  public getContacts():Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  public createContact(contact:Contact) {
    this.http.post("/api/contact",contact).subscribe(data =>console.log(data));
     
  }
}
