import { NavigationService } from './../../services/http/navigation/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private navService:NavigationService) { }

  navigation:object;
  private sub:Subscription;
  ngOnInit(): void {
    this.sub = this.navService.getTypesOfServices().subscribe(data=>this.navigation=data);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
