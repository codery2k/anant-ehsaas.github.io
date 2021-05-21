import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionComponent } from './vision/vision.component';
import { FinancialComponent } from './financial/financial.component';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
  declarations: [AboutUsComponent, VisionComponent, FinancialComponent, DocumentationComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
