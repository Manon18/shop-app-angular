import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { ProductDetailsComponent } from './modules/products-list/product-details/product-details.component';
import { BasketComponent } from './modules/basket/basket.component';
import { DesiresListComponent } from './modules/desires-list/desires-list.component';
import { LocationComponent } from 'src/app/modules/location/location.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { UserComponent } from 'src/app/modules/login/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'basket', component: BasketComponent },
  { path: 'desires-list', component: DesiresListComponent },
  { path: 'location', component: LocationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  declarations: [
    HomeComponent, 
    ProductsListComponent,
    ProductDetailsComponent,
    BasketComponent,
    DesiresListComponent,
    LocationComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [BrowserModule, FormsModule, MDBBootstrapModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [
    RouterModule, 
    HomeComponent, 
    ProductsListComponent,
    ProductDetailsComponent,
    BasketComponent,
    DesiresListComponent,
    LocationComponent,
    LoginComponent,
    UserComponent
  ],
  entryComponents: [
    HomeComponent, 
    ProductsListComponent, 
    ProductDetailsComponent, 
    BasketComponent, 
    DesiresListComponent, 
    LocationComponent, 
    LoginComponent, 
    UserComponent
  ]
})
export class AppRoutingModule { }
