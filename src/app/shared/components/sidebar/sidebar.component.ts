import { SidebarmaincontentService } from './../../services/sidebarmaincontent.service';
import { SidebarService } from '../../services/http/sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  types:object;
  clients:object;
  private subs:Subscription[]=[];
  constructor(private content:SidebarService, private filterServices:SidebarmaincontentService) { }

  ngOnInit(): void {
    this.subs.push(this.content.getTypesOfServices().subscribe(data=>this.types=data));
    this.filterByType(this.id);
    this.subs.push(this.content.getClients().subscribe(data=>this.clients=data));
  }
  activatedFilter:string = "";
  id:number = 0;
  filterByType(id,e?){
    this.activatedFilter = e?.target.innerText;
    this.id = id;
    this.filterServices.communicate(this.id);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
