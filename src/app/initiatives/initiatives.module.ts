import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { HealthComponent } from './health/health.component';
import { EnvironmentComponent } from './environment/environment.component';
import { EducationComponent } from './education/education.component';
import { AdvocacyComponent } from './advocacy/advocacy.component';


@NgModule({
  declarations: [
    InitiativesComponent,
    HealthComponent,
    EnvironmentComponent,
    EducationComponent,
    AdvocacyComponent

  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
})
export class InitiativesModule {}
