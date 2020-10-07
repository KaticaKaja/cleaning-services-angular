import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http:HttpClient) { }

  getTypesOfServices(){
    let url = "http://localhost:3000/navigation";
    return this.http.get(url);
  }
}
