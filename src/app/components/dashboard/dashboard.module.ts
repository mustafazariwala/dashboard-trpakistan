import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CountToModule } from 'angular-count-to';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MuwasaatComponent } from './muwasaat/muwasaat.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CounsellingComponent } from './counselling/counselling.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [DefaultComponent, EcommerceComponent, MuwasaatComponent,  CounsellingComponent, ResourcesComponent],
  imports: [
    CommonModule,
    ChartistModule,
    ChartsModule,
    NgApexchartsModule,
    SharedModule,
    CarouselModule,
    CKEditorModule,
    CountToModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
