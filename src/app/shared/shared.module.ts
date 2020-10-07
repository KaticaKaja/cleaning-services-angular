import { PricelistComponent } from './../pages/pricelist/pricelist.component';
import { AboutComponent } from './../pages/about/about.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { MaincontentComponent } from './../pages/maincontent/maincontent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { LandingpageComponent } from '../shared/components/landingpage/landingpage.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardGalleryComponent } from './components/card-gallery/card-gallery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, LandingpageComponent, MaincontentComponent, FilterPipe, CardGalleryComponent, ContactComponent, AboutComponent,PricelistComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent, LandingpageComponent
  ]
})
export class SharedModule { }
