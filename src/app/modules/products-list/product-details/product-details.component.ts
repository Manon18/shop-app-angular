import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PRODUCTS } from 'src/app/core/config';
import { productDetails } from 'src/app/core/interfaces/product-details';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails: productDetails[] = PRODUCTS;
  public product: productDetails[];
  public id: number;
  public allProductsList: productDetails[] = [];

  constructor(public localStorageService: LocalStorageService,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneProduct();
  }

  public getOneProduct(): productDetails[] {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );

      console.log(this.product);

    return this.product;
  }

}
