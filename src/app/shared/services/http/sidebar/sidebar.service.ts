import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http:HttpClient) { }


  getTypesOfServices(){
    let url = "http://localhost:3000/type_services";
    return this.http.get(url);
  }

  getClients(){
    let url = "http://localhost:3000/clients";
    return this.http.get(url);
  }
}
