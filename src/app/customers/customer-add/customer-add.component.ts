import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onAddCustomer(form: NgForm){
    const value = form.value;
    const newCustomer = new Customer(value.fullname, value.phone, 2,value.email, value.address,value.town,value.zipCode);
    console.log('new Customer: '+ newCustomer);
    this.customerService.addCustomer(newCustomer);
    console.log(this.customerService.getCustomer(11));
  }

}
