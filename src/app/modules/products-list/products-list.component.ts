import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../core/config';
import { productDetails } from '../../core/interfaces/product-details';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
