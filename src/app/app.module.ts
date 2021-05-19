import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { VisionComponent } from './vision/vision.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocumentationComponent } from './about-us/documentation/documentation.component';
import { FinancialComponent } from './about-us/financial/financial.component';

@NgModule({
  declarations: [AppComponent, VisionComponent, HeaderComponent, AboutUsComponent, DocumentationComponent, FinancialComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
