import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {  } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSidenavModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
    
  ],

  exports: [
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSliderModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class MaterialModule { }
