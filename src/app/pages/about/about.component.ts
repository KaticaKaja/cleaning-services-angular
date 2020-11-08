import { EmployeesService } from './../../shared/services/http/about/employees.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  constructor(private empService:EmployeesService) { }

  employees:object;
  private sub:Subscription;
  ngOnInit(): void {
    this.sub = this.empService.getEmployees().subscribe(data=>{
      this.employees=data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
