import { SidebarmaincontentService } from 'src/app/shared/services/sidebarmaincontent.service';
import { Component, OnInit } from '@angular/core';
import { MaincontentService } from 'src/app/shared/services/http/maincontent/maincontent.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})

export class MaincontentComponent implements OnInit {
  gallery:any; // create gallery model and switch with any
  filterId:number;
  constructor(private content:MaincontentService, private filterContent:SidebarmaincontentService) { }

  ngOnInit(): void {
    this.filterContent.share.subscribe(x=>{this.filterId=x;}); 
    this.content.getContent().subscribe(data=>{this.gallery=data;});
    
  }
}
