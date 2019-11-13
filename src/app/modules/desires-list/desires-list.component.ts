import { Component, OnInit } from '@angular/core';
import { productDetails } from '../../core/interfaces/product-details';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { BasketService } from 'src/app/core/services/basket.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-desires-list',
  templateUrl: './desires-list.component.html',
  styleUrls: ['./desires-list.component.css']
})
export class DesiresListComponent implements OnInit {
  public desiresFromStorage: productDetails[] = [];
  public getIdOfUserDesire: number[] = [];
  public allProductsList: productDetails[] = [];
  public productsFromBasket: productDetails[] = [];

  constructor(public localStorageService: LocalStorageService,
    public basketService: BasketService,
    public productService: ProductService ) { }

  ngOnInit() {
    this.allProductsList = this.productService.getAllProductsList();

    this.desiresFromStorage = this.localStorageService.get('desires') || [];

    this.productsFromBasket = this.basketService.getProductsFromLocalStorage();

    let getIdAndIsAddToBasket = {
      isAddToBasket: Boolean,
      id: Number
    }

    let getIsAddToBasket = this.allProductsList.map((val) => getIsAddToBasket = { 
      isAddToBasket: val.isAddedToBasket, 
      id: val.id
    });

    this.desiresFromStorage.forEach((el) => {
      getIsAddToBasket.forEach((val) => {
        if (el.id === val.id) {
          el.isAddedToBasket = val.isAddToBasket;
        }
      })
    })
  }

  public removeDesire(desireId: number) {
    console.log(this.desiresFromStorage);

    this.getIdOfUserDesire = this.desiresFromStorage.map((val) => val.id);

    console.log(this.getIdOfUserDesire);

    this.getIdOfUserDesire.forEach((id, index) => {
      if (desireId === id) {
        this.desiresFromStorage.splice(index, 1);
      }
    })

    this.localStorageService.save('desires', this.desiresFromStorage);
  }
}
