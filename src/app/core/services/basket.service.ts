import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { productDetails } from 'src/app/core/interfaces/product-details';
import { PRODUCTS } from 'src/app/core/config';

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
