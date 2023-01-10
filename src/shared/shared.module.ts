import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ]
})
export class SharedModule { }
