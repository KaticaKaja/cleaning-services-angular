import { PageNotFoundComponent } from './../pages/page-not-found/page-not-found.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosidebarlayoutComponent } from './nosidebarlayout/nosidebarlayout.component';
import {DefaultlayoutComponent} from './defaultlayout/defaultlayout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DefaultlayoutComponent, NosidebarlayoutComponent, PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DefaultlayoutComponent,
    NosidebarlayoutComponent,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
