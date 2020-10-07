import { NavigationService } from './../../services/http/navigation/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private navService:NavigationService) { }

  navigation:object;

  ngOnInit(): void {
    this.navService.getTypesOfServices().subscribe(data=>this.navigation=data);
  }

}
