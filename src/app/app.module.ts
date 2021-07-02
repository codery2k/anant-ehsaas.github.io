import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutUsModule } from './about-us/about-us.module';
import { InitiativesModule } from './initiatives/initiatives.module';
import { PartnersComponent } from './partners/partners.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PartnersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AboutUsModule,
    InitiativesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
