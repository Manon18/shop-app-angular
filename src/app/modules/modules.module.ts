import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [ProductsListComponent, BasketComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [ ProductsListComponent, BasketComponent ],
  providers: [],
  bootstrap: []
})
export class ModulesModule { }
