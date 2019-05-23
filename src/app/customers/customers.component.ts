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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  isRowClicked(click: boolean){
    this.customerDetail = click;
  }

  onAddCustomer(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
