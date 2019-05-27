import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from './customers.component';
import { CustomerStartComponent } from './customer-start/customer-start.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const customersRouter: Routes = [
  {
    path: "customers",
    component: CustomersComponent,
    children: [
      { path: "", component: CustomerStartComponent },
      { path: "new", component: CustomerAddComponent },
      { path: ":id", component: CustomerDetailComponent },
      { path: ":id/edit", component: CustomerEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customersRouter)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
