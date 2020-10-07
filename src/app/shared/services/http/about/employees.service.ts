import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    let url = "http://localhost:3000/employees";
    return this.http.get(url);
  }
}
