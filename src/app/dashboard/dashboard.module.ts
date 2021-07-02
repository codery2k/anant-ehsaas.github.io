import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { DashboardPhotoShowcaseComponent } from './dashboard-photo-showcase/dashboard-photo-showcase.component';
import { DashboardHowCanYouHelpComponent } from './dashboard-how-can-you-help/dashboard-how-can-you-help.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    DashboardLandingComponent,
    DashboardPhotoShowcaseComponent,
    DashboardHowCanYouHelpComponent,
    DashboardFooterComponent,
    DashboardComponent,
    ContactUsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    DashboardLandingComponent,
    DashboardPhotoShowcaseComponent,
    DashboardHowCanYouHelpComponent,
    DashboardFooterComponent,
    ContactUsComponent,
  ],
})
export class DashboardModule {}
