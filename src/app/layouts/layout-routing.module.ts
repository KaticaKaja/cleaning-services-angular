// import { CardGalleryComponent } from './../shared/components/card-gallery/card-gallery.component';
import { MaincontentComponent } from './../pages/maincontent/maincontent.component';
import { PageNotFoundComponent } from './../pages/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { PricelistComponent } from '../pages/pricelist/pricelist.component';
import { DefaultlayoutComponent } from './defaultlayout/defaultlayout.component';
import { NosidebarlayoutComponent } from './nosidebarlayout/nosidebarlayout.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', redirectTo: 'pages/about', pathMatch: 'full'},
  {path: 'contact', redirectTo: 'pages/contact', pathMatch: 'full'},
  {path: 'pricelist', redirectTo: 'pages/pricelist', pathMatch: 'full'},
  {path: 'home', component: DefaultlayoutComponent, children:
    [    
      {path:'',component: MaincontentComponent}
    ]
  },
  {path: 'pages', component: NosidebarlayoutComponent, children:
    [
      {path: '', redirectTo: 'pricelist', pathMatch: "full"},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'pricelist', component: PricelistComponent}
   ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
