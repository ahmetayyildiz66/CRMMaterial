import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  id: number;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.customer = this.customerService.getCustomer(this.id);
      }
    )
  }

  onEditCustomer(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
