import { Injectable } from '@angular/core';
import { productDetails } from '../../core/interfaces/product-details';
import { PRODUCTS } from '../../core/config';

@Injectable({ 
    providedIn: 'root' 
})

export class ProductService {
    public productDetails: productDetails[] = PRODUCTS;

    getProduct(id: number) {
        return this.productDetails.filter((product) => product.id === id);
    }
}
