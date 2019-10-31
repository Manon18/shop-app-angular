import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { ProductDetailsComponent } from './modules/products-list/product-details/product-details.component';
import { BasketComponent } from './modules/basket/basket.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  declarations: [
    HomeComponent, 
    ProductsListComponent,
    ProductDetailsComponent,
    BasketComponent
  ],
  imports: [BrowserModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [
    RouterModule, 
    HomeComponent, 
    ProductsListComponent,
    ProductDetailsComponent,
    BasketComponent
  ],
  entryComponents: [HomeComponent, ProductsListComponent, ProductDetailsComponent, BasketComponent]
})
export class AppRoutingModule { }
