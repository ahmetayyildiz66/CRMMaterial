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

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerOutput().subscribe(
      (customer: Customer) => {
        this.customer = customer
      }
    )
  }

  isRowClicked(click: boolean){
    this.customerDetail = click;
  }

  onAddCustomer(){
    this.addCustomer = true;
  }


}
