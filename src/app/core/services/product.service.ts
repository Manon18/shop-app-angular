import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { productDetails } from '../../core/interfaces/product-details';
import { PRODUCTS } from '../../core/config';

@Injectable({ 
    providedIn: 'root' 
})

export class ProductService implements OnInit {
    public productDetails: productDetails[] = PRODUCTS;
    public allProductsList: productDetails[] = [];
    public itemsFromStorage: any[];
    public desiresFromStorage: productDetails[] = [];
    public oneProductFromProductsList: any[] = [];
    public existedProducts: productDetails[] = [];
    public productsIds: number[] = [];

    constructor(private localStorageService: LocalStorageService) {
        this.itemsFromStorage = this.localStorageService.get('product7') || [];
        this.desiresFromStorage = this.localStorageService.get('desires') || [];
    }

    ngOnInit() {
        this.getAllProductsList();
    }

    public getProduct(id: number) {
        return this.oneProductFromProductsList = this.getAllProductsList().filter((product) => product.id === id);
    }

    public addProductToBasket(data: any) {
        this.existedProducts = this.localStorageService.get('product7') || [];

        this.productsIds = this.existedProducts.map((el) => el.id);
        
        if (!this.productsIds.includes(data.id)) {
            data.isAddedToBasket = true;
    
            this.existedProducts.push(data);
        }
    
        this.localStorageService.save('product7', this.existedProducts);

    }

    public getAllProductsList(): productDetails[] {
        this.productDetails.forEach((el) => this.itemsFromStorage.forEach((val) => {
            if (el.id === val.id) {
                el.isAddedToBasket = true;
            }
        }))
      
        this.allProductsList = this.productDetails;

        this.allProductsList.forEach((product) => this.desiresFromStorage.forEach((desire) => {
            if (product.id === desire.id) {
                product.like = true;
            }
        }))
      
        return this.allProductsList;
    }
}
