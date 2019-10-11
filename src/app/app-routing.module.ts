import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { BasketComponent } from './modules/basket/basket.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  declarations: [ProductsListComponent, BasketComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsListComponent, BasketComponent],
  entryComponents: [ProductsListComponent, BasketComponent]
})
export class AppRoutingModule { }
