import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomersComponent } from '../customers/customers.component';
import { CustomerStartComponent } from '../customers/customer-start/customer-start.component';
import { CustomerDetailComponent } from '../customers/customer-detail/customer-detail.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers' , component: CustomersComponent, children: [
    {path: '', component: CustomerStartComponent},
    {path: ':id', component: CustomerDetailComponent}
  ]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
