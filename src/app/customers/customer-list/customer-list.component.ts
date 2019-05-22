import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { MatPaginator, MatTableDataSource, MatCheckbox } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Output() rowClicked = new EventEmitter<boolean>();
  @Output() row = new EventEmitter<Customer>();
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
  }

  onRow(row,index){
    console.log(row);
    this.rowClicked.emit(true);
    this.row.emit(row);
    this.selectedRow = index;
  }


}
