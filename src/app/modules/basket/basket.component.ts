import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/core/interfaces/product-details';
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

  public deleteProductById(id: number) {

    this.products.forEach((value, index) => {
      if (value.id === id) {
        this.products.splice(index, 1);
      }
    })

    this.localStorageService.save('product7', this.products);
  }
  
  public totalAmountOfProducts(): number {
    let total: number = 0;
    let sumOfTotal: number = 0;

    this.products.forEach((el) => {
      total = el.price * el.quantity;
      sumOfTotal += total;
    })
    
    return sumOfTotal;
  }

  public subtractProduct(productId: number): void {

    this.products.forEach((product) => {
      if ((product.id === productId) && product.quantity > 1) {
        product.quantity -= 1;
      }
    })

    this.localStorageService.save('product7', this.products);
  }

  public addProduct(productId: number): void {

    this.products.forEach((prod: any) => {
      if (prod.id === productId) {
        prod.quantity += 1;
      }
    })

    this.localStorageService.save('product7', this.products);

  }

  public getOneProductPrice(productId: number): number {
    let totalSumOfOneProduct: number = 0;

    this.products.forEach((value) => {
      if (value.id === productId) {
        totalSumOfOneProduct = value.quantity * value.price;
      }
    })

    return totalSumOfOneProduct;
  }

}
