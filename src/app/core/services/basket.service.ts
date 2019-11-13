import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { productDetails } from '../../core/interfaces/product-details';
import { PRODUCTS } from '../../core/config';

@Injectable({ 
    providedIn: 'root' 
})

export class BasketService {
    public productDetails: productDetails[] = PRODUCTS;

    constructor(private localStorageService: LocalStorageService) {}

    public getProductsFromLocalStorage(): productDetails[] {
        return this.localStorageService.get('product7') || [];
    }
}
