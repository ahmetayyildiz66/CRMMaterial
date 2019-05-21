import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  addCustomer = false;

  constructor() { }

  ngOnInit() {
  }

  onAddCustomer(){
    this.addCustomer = true;
  }

}
