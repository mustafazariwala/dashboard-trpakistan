import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounsellingComponent } from './counselling/counselling.component';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MuwasaatComponent } from './muwasaat/muwasaat.component';
import { ResourcesComponent } from './resources/resources.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent
      },
      {
        path:'ecommerce',
        component:EcommerceComponent
      },
      {
        path:'businessmuwasaat',
        component: MuwasaatComponent
      },
      {
        path:'counselling',
        component: CounsellingComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
