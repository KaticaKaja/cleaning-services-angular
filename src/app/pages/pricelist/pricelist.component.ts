import { PricingService } from './../../shared/services/http/pricelist/pricing.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {

  constructor(private pricingServ:PricingService) { }
  
  private sub:Subscription;
  pricing:object;
  ngOnInit(): void {
    this.sub = this.pricingServ.getContent().subscribe(data=>this.pricing=data);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
