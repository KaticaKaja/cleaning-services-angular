import { Subscriber } from './../../../models/subscriber';
import { Contact } from './../../../models/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  createMessage(contactBody):Observable<Contact>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
      let url = "http://localhost:3000/messages";
      return this.http.post<Contact>(url,contactBody,{headers:httpHeaders});
  }

  subscribeList(email):Observable<Subscriber>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
      let url = "http://localhost:3000/subscribers";
      return this.http.post<Subscriber>(url,email,{headers:httpHeaders});
  }
}
