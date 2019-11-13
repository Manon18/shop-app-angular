import { Injectable } from '@angular/core';
import { productDetails } from 'src/app/core/interfaces/product-details';

@Injectable({ 
    providedIn: 'root' 
})

export class LocalStorageService {

    save(key: string, product: productDetails[]) {
        window.localStorage.setItem(key, JSON.stringify(product));
    }

    get(key: string) {
        return JSON.parse(window.localStorage.getItem(key));
    }
}
