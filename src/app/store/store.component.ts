import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductStaticRepository } from '../model/repositories/product.static.respositiry';
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router";

@Component({
  selector: 'store',
  //moduleId: module.id,
  templateUrl: './store.component.html',
})
export class StoreComponent {
  
    public selectedCategory?: string | null = null;
    
    public productsPerPage = 4;
    
    public selectedPage = 1;

    constructor(
        private repository: ProductStaticRepository,
        private cart: Cart,
        private router: Router
    ) {}
  
    get Products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get Categories(): (string | undefined)[] {
        return this.repository.getCategories();
    }

    public changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    public changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    public changePageSize(newSize: number | null | string) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    /*
    public get PageNumbers(): number[] {
        return Array(Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0)
            .map((x, i) => i + 1);
    }
    */
    public get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    /* Cart */

    public addProductToCart(product: Product) {
        this.cart.addLine(product);
        //this.router.navigateByUrl("/cart");
    }
    /* _ Cart */
}
