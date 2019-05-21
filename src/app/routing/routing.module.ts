import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomersComponent } from '../customers/customers.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers' , component: CustomersComponent},
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
