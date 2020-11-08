import { SidebarmaincontentService } from 'src/app/shared/services/sidebarmaincontent.service';
import { Component, OnInit } from '@angular/core';
import { MaincontentService } from 'src/app/shared/services/http/maincontent/maincontent.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})

export class MaincontentComponent implements OnInit {
  gallery:any; // create gallery model and switch with any
  filterId:number;
  private subscriptions:Subscription[]=[];
  constructor(private content:MaincontentService, private filterContent$:SidebarmaincontentService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.filterContent$.share.subscribe(x=>{this.filterId=x;})); 
    this.subscriptions.push(this.content.getContent().subscribe(data=>{this.gallery=data;}));
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
