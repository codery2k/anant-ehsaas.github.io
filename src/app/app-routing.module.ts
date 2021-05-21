import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { DocumentationComponent } from './about-us/documentation/documentation.component';
import { FinancialComponent } from './about-us/financial/financial.component';
import { VisionComponent } from './about-us/vision/vision.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Home',
    },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      title: 'About Us',
    },
    children: [
      {
        path: 'vision',
        component: VisionComponent,
      },
      {
        path: 'documentation',
        component: DocumentationComponent,
      },
      {
        path: 'financial',
        component: FinancialComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: DashboardComponent,
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
