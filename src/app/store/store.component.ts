import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductStaticRepository } from '../model/repositories/product.static.respositiry';

@Component({
  selector: 'store',
  //moduleId: module.id,
  templateUrl: './store.component.html',
})
export class StoreComponent {
  
    public selectedCategory?: string | null = null;

    constructor(private repository: ProductStaticRepository) {}
  
    get Products(): Product[] {
        return this.repository.getProducts(this.selectedCategory);
    }

    get Categories(): (string | undefined)[] {
        return this.repository.getCategories();
    }

    public changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
}
