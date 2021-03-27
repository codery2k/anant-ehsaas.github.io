import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardLandingComponent } from './dashboard/dashboard-landing/dashboard-landing.component';
import { VisionComponent } from './vision/vision.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    // component: DashboardLandingComponent,
    component: DashboardFooterComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'vision',
    component: VisionComponent,
    data: {
      title: 'Our Vision',
    },
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    data: {
      title: 'Contact Us',
    },
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
