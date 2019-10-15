import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { BasketComponent } from './modules/basket/basket.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsListComponent },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  declarations: [
    HomeComponent, 
    ProductsListComponent, 
    BasketComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [
    RouterModule, 
    HomeComponent, 
    ProductsListComponent, 
    BasketComponent
  ],
  entryComponents: [HomeComponent, ProductsListComponent, BasketComponent]
})
export class AppRoutingModule { }
