import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
