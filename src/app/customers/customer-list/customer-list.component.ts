import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['fullname','phone', 'paintings'];
  customers: Customer[];
  dataSource = new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
    this.dataSource.paginator = this.paginator;
  }

  selectRow(row){
    console.log(row.fullName);
    alert(row.fullName);
  }

}
