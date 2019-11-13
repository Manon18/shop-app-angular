import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/core/config';
import { productDetails } from 'src/app/core/interfaces/product-details';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public productDetails: productDetails[] = PRODUCTS;
  public getIdsOfUserDesires: number[] = [];
  public desiresFromStorage: productDetails[] = [];
  public itemsFromStorage: productDetails[] = [];
  public allProductsList: productDetails[] = [];

  constructor(public localStorageService: LocalStorageService,
    public productService: ProductService) {
      this.itemsFromStorage = this.localStorageService.get('product7') || [];
    }

  ngOnInit() {
    this.allProductsList = this.productService.getAllProductsList();
  }

  public addProductToDesireList(product: any) {
    this.desiresFromStorage = this.localStorageService.get('desires') || [];

    this.getIdsOfUserDesires = this.desiresFromStorage.map((desire) => desire.id);

    if (!this.getIdsOfUserDesires.includes(product.id)) {
      product.like = true;

      this.desiresFromStorage.push(product);
    }

    this.localStorageService.save('desires', this.desiresFromStorage);
  }
}
