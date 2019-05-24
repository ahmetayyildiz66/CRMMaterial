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

  private dataSourceSetup(customers: Customer[]){
    this.dataSource = new MatTableDataSource<Customer>(customers);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.dataSourceSetup(this.customers);
    
    this.subscription = this.customerService.getCustomersChanged().subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
        console.log('first: '+this.customers[0].fullName);
        // console.log('list: ' + this.customers[this.selectedRow].fullName);
        this.dataSourceSetup(this.customers);
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
