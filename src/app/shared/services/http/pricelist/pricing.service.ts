import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private http:HttpClient) { }

  getContent(){
    let url = "http://localhost:3000/pricing";
    return this.http.get(url);
  }
}
