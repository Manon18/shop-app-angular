import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})

export class LocalStorageService {

    save(key: string, product: any) {
        window.localStorage.setItem(key, JSON.stringify(product));
    }

    get(key: string) {
        return JSON.parse(window.localStorage.getItem(key));
    }
}
