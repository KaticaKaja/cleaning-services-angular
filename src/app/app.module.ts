import { LayoutRoutingModule } from './layouts/layout-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // PageNotFoundComponent,
    // MainpageComponent,
    // AboutComponent,
    // ContactComponent,
    // PricelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
