import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaincontentService {

  constructor(private http:HttpClient) { }

  getContent(){
    let url = "http://localhost:3000/gallery_services";
    return this.http.get(url);
  }

}
