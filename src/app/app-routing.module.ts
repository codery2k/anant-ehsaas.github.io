import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { DocumentationComponent } from './about-us/documentation/documentation.component';
import { FinancialComponent } from './about-us/financial/financial.component';
import { VisionComponent } from './about-us/vision/vision.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AdvocacyComponent } from './initiatives/advocacy/advocacy.component';
import { EducationComponent } from './initiatives/education/education.component';
import { EnvironmentComponent } from './initiatives/environment/environment.component';
import { HealthComponent } from './initiatives/health/health.component';
import { InitiativesComponent } from './initiatives/initiatives/initiatives.component';
import { PartnersComponent } from './partners/partners.component';

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
        data: {
          title: 'Our Vision',
        },
      },
      {
        path: 'documentation',
        component: DocumentationComponent,
        data: {
          title: 'Documentation',
        },
      },
      {
        path: 'financial',
        component: FinancialComponent,
        data: {
          title: 'Financials',
        },
      },
      { path: '', redirectTo: 'vision', pathMatch: 'prefix' },
    ],
  },
  {
    path: 'initiatives',
    component: InitiativesComponent,
    data: {
      title: 'Initiatives',
    },
    children: [
      {
        path: 'education',
        component: EducationComponent,
        data: {
          title: 'Education',
        },
      },
      {
        path: 'health',
        component: HealthComponent,
        data: {
          title: 'Health',
        },
      },
      {
        path: 'environment',
        component: EnvironmentComponent,
        data: {
          title: 'Environment',
        },
      },
      {
        path: 'advocacy',
        component: AdvocacyComponent,
        data: {
          title: 'Advocacy',
        },
      },
      { path: '', redirectTo: 'education', pathMatch: 'prefix' },
    ],
  },
  {
    path:'partners',
    component:PartnersComponent,
    data: {
      title: 'Our Partners',
    },
  },
  // {
  //   path: 'contact',
  //   component: ContactUsComponent,
  //   data: {
  //     title: 'Contact Us',
  //   },
  // },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
