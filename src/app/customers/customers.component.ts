import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  customerDetail = false;
  customer: Customer;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
