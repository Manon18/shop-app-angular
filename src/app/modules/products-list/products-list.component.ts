import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../core/config';
import { productDetails } from '../../core/interfaces/product-details';
import { BasketService } from 'src/app/core/services/basket.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public productDetails: productDetails[] = PRODUCTS;
  public getIdsOfUserDesires: any[] = [];
  public desiresFromStorage: productDetails[] = [];
  public itemsFromStorage: any[];
  public desires: any;
  public filteredDataFromStorage: any;
  public allProductsList: productDetails[] = [];

  constructor(private basketService: BasketService,
    public localStorageService: LocalStorageService,
    public productService: ProductService) {
      this.itemsFromStorage = JSON.parse(window.localStorage.getItem('product7')) || [];
    }

  ngOnInit() {
    this.getAddedProductsFromStogare();
    this.allProductsList = this.productService.getAllProductsList();
  }

  public addProductToDesireList(product: any) {
    this.desires = window.localStorage.getItem('desires') || [];

    if (this.desires) {
      this.desiresFromStorage = JSON.parse(this.desires);
    }

    this.getIdsOfUserDesires = this.desiresFromStorage.map((desire) => desire.id);

    if (!this.getIdsOfUserDesires.includes(product.id)) {
      product.like = true;

      this.desiresFromStorage.push(product);
    }

    this.localStorageService.save('desires', this.desiresFromStorage);
  }

  public getAddedProductsFromStogare(): any[] {

    this.filteredDataFromStorage = this.productDetails.filter((el) => !this.itemsFromStorage.find((val) => el.id === val.id));

    return this.filteredDataFromStorage;

  }
}
