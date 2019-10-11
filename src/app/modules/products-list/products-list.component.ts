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
  public eventsArr: any[] = [];
  public dataArr: any[] = [];
  public data: any;
  public obj: {
    targets: any
  };


  constructor(private basketService: BasketService,
    public localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  getElement(data) {

    this.data = window.localStorage.getItem('product7');

    if (this.data) {
      this.dataArr = JSON.parse(this.data);
    }

    this.dataArr.push(data);

    this.localStorageService.save('product7', this.dataArr);
  }
}
