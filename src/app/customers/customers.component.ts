import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  addCustomer = false;
  customerDetail = false;
  customer: Customer;

  constructor() { }

  ngOnInit() {
  }

  isRowClicked(click: boolean){
    this.customerDetail = click;
  }

  onAddCustomer(){
    this.addCustomer = true;
  }

  onCustomerDetail(customer: Customer){
    this.customer = customer;
  }


}
