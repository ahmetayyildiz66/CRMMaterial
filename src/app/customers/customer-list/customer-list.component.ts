import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { MatPaginator, MatTableDataSource, MatCheckbox } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @Output() rowClicked = new EventEmitter<boolean>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['checkbox','fullname','phone', 'paintings'];
  customers: Customer[];
  selectedRow: number;

  dataSource = new MatTableDataSource<Customer>();



  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
    this.dataSource.paginator = this.paginator;
    this.subscription = this.customerService.getCustomersChanged().subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
        this.dataSource = new MatTableDataSource<Customer>(this.customers);
        this.dataSource.paginator = this.paginator;
      }
    )
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onRow(index){
    //this.customerService.getCustomerOutput().next(customer);
    this.rowClicked.emit(true);
    this.selectedRow = index;
  }


}
