import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: number;
  customer: Customer;
  customerEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.customer = this.customerService.getCustomer(this.id);
        this.initForm();
      } 
    )
  } 

  initForm(){
    this.customerEditForm = new FormGroup({
      'fullname': new FormControl(this.customer.fullName, Validators.required),
      'phone': new FormControl(this.customer.phoneNumber, Validators.required),
      'email': new FormControl(this.customer.email, [Validators.required, Validators.email]),
      'address': new FormControl(this.customer.address, Validators.required),
      'town': new FormControl(this.customer.town, Validators.required),
      'zip': new FormControl(this.customer.zipCode, Validators.required)
    });
  }

  onSubmit(){
    const newCustomer = new Customer(
      this.customerEditForm.value["fullname"],
      this.customerEditForm.value["phone"],
      0,
      this.customerEditForm.value["email"],
      this.customerEditForm.value["address"],
      this.customerEditForm.value["town"],
      this.customerEditForm.value["zip"]      
    );
    this.customerService.updateCustomer(this.id,newCustomer);
  }

}
