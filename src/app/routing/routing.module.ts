import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomersComponent } from '../customers/customers.component';
import { CustomerStartComponent } from '../customers/customer-start/customer-start.component';
import { CustomerDetailComponent } from '../customers/customer-detail/customer-detail.component';
import { CustomerAddComponent } from '../customers/customer-add/customer-add.component';
import { CustomerEditComponent } from '../customers/customer-edit/customer-edit.component';
import { SignupComponent } from '../auth/signup/signup.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers' , component: CustomersComponent, children: [
    {path: '', component: CustomerStartComponent},
    {path: 'new', component: CustomerAddComponent},
    {path: ':id', component: CustomerDetailComponent},
    {path: ':id/edit', component: CustomerEditComponent}
  ]},
  {path: 'signup', component: SignupComponent},
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
