import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css'],
  animations: [
    trigger('cardState',[
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show=>hide', animate('600ms ease-out')),
      transition('hide=>show', animate('600ms ease-out')),
    ])
  ]
})
export class CardGalleryComponent implements OnInit {

  show = false;
  @Input() filteredContent;

  constructor() { 
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }
  ngOnInit(): void {
    if (this.show == false) {
      setTimeout(() => this.show = true)
    }
  }
}
