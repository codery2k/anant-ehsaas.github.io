import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FinancialComponent } from './financial/financial.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
