import { Component, OnInit } from '@angular/core';
import { productDetails } from '../../core/interfaces/product-details';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { BasketService } from 'src/app/core/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public products: productDetails[];

  constructor(public localStorageService: LocalStorageService,
    public basketService: BasketService) { }

  ngOnInit() {
    this.products = this.basketService.getProductsFromLocalStorage();
  }

  //public getDataFromStogare(): any {
    
  //}

}
