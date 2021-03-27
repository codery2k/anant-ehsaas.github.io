import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { DashboardPhotoShowcaseComponent } from './dashboard-photo-showcase/dashboard-photo-showcase.component';
import { DashboardHowCanYouHelpComponent } from './dashboard-how-can-you-help/dashboard-how-can-you-help.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';



@NgModule({
  declarations: [DashboardLandingComponent, DashboardPhotoShowcaseComponent, DashboardHowCanYouHelpComponent, DashboardFooterComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
