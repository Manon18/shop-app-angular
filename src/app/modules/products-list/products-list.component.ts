import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../core/config';
import { productDetails } from '../../core/interfaces/product-details';
import { BasketService } from 'src/app/core/services/basket.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public productDetails: productDetails[] = PRODUCTS;
  public mapArr: any[] = [];
  public dataArr: any[] = [];
  public itemsFromStorage: any;
  public filteredDataFromStorage: any;
  public data: any;

  constructor(private basketService: BasketService,
    public localStorageService: LocalStorageService) {
      this.itemsFromStorage = JSON.parse(window.localStorage.getItem('product7')) || [];
     }

  ngOnInit() {
    this.getAddedProductsFromStogare();
  }

  public addProductToBasket(data: any) {

    this.data = window.localStorage.getItem('product7') || [];

    if (this.data) {
      this.dataArr = JSON.parse(this.data);

      this.mapArr = this.dataArr.map((el) => el.id);

      if (!this.mapArr.includes(data.id)) {
        data.isAddedToBasket = true;
        
        this.dataArr.push(data);
      }

      this.localStorageService.save('product7', this.dataArr);

    }

  }

  public getAddedProductsFromStogare(): any {

    this.filteredDataFromStorage = this.productDetails.filter((el) => !this.itemsFromStorage.find((val) => el.id === val.id));

    return this.filteredDataFromStorage;

  }
}
