import { NosidebarlayoutComponent } from './nosidebarlayout/nosidebarlayout.component';
import {DefaultlayoutComponent} from './defaultlayout/defaultlayout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { LandingpageComponent } from '../shared/components/landingpage/landingpage.component';
import { MaincontentComponent } from '../pages/maincontent/maincontent.component';


@NgModule({
  declarations: [DefaultlayoutComponent, NosidebarlayoutComponent, HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LandingpageComponent,
    MaincontentComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    DefaultlayoutComponent,
    NosidebarlayoutComponent,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
