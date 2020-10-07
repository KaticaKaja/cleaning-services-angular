import { PricingService } from './../../shared/services/http/pricelist/pricing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {

  constructor(private pricingServ:PricingService) { }

  pricing:object;
  ngOnInit(): void {
    this.pricingServ.getContent().subscribe(data=>this.pricing=data);
  }

}
