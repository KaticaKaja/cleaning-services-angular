import { EmployeesService } from './../../shared/services/http/about/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  constructor(private empService:EmployeesService) { }

  employees:object;

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(data=>{
      this.employees=data;
      console.log(data);
    });
  }

}
