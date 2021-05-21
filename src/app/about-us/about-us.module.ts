import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us/about-us.component';
import { VisionComponent } from './vision/vision.component';
import { FinancialComponent } from './financial/financial.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AboutUsComponent,
    VisionComponent,
    FinancialComponent,
    DocumentationComponent,
  ],
  imports: [CommonModule, MaterialModule],
})
export class AboutUsModule {}
