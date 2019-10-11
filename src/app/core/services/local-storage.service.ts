import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})

export class LocalStorageService {
    //productData: any;

    save(key: string, product: any) {
        //this.productData = product;
        window.localStorage.setItem(key, JSON.stringify(product));
    }

    get(key: string) {
        return JSON.parse(window.localStorage.getItem(key));
    }
}
