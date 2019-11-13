import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/core/interfaces/product-details';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
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

  constructor(public localStorageService: LocalStorageService,
    public productService: ProductService ) { }

  ngOnInit() {
    this.allProductsList = this.productService.getAllProductsList();

    this.desiresFromStorage = this.localStorageService.get('desires') || [];

    this.desiresFromStorage.forEach((el) => {
      this.allProductsList.forEach((val) => {
        if (el.id === val.id) {
          el.isAddedToBasket = val.isAddedToBasket;
        }
      })
    })
  }

  public removeDesire(desireId: number): void {

    this.getIdOfUserDesire = this.desiresFromStorage.map((val) => val.id);

    this.getIdOfUserDesire.forEach((id, index) => {
      if (desireId === id) {
        this.desiresFromStorage.splice(index, 1);
      }
    })

    this.localStorageService.save('desires', this.desiresFromStorage);
  }
}
