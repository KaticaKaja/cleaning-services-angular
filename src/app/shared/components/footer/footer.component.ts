import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/http/navigation/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navigation:object;
  constructor(private navService:NavigationService) { }

  ngOnInit(): void {
    this.navService.getTypesOfServices().subscribe(data=>this.navigation=data);
  }

}
