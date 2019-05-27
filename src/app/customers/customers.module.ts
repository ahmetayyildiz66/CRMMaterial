import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerStartComponent } from './customer-start/customer-start.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from 'src/shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    declarations: [
        CustomersComponent,
        CustomerStartComponent,
        CustomerAddComponent,
        CustomerDetailComponent,
        CustomerEditComponent,
        CustomerListComponent,
        CustomerDetailComponent
    ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        SharedModule
    ]
})
export class CustomersModule{

}