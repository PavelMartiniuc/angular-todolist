import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { ProductRestRepository } from '../model/repositories/product.rest.Repositiry';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'store',
  //moduleId: module.id,
  templateUrl: './store.component.html',
})
export class StoreComponent {
  
    public selectedCategory?: string | null = null;
    
    public productsPerPageCount = 4;
    
    public selectedPage = 1;

    public totalProductsCount = 0;

    faGear = faGear

    private productsPerPage: Product[] = null;

    constructor(
        private repository: ProductRestRepository,
        private cart: Cart,
        private router: Router,
        private authService : AuthService
    ) {
        this.productsPerPage = [];
        this.FillProducts()
    }
  
    public get ProductsPerPage(): Product[] {
        if (!this.productsPerPage) {
            this.FillProducts();
        }
             
        let pageIndex = (this.selectedPage - 1) * this.productsPerPageCount
        
        this.productsPerPage = this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPageCount);
        
        return this.productsPerPage;
    }

    public get TotalProductsCount() : number {
        return this.repository.TotalProductsCount;
    }

    private FillProducts(): void {
        
        this.repository.fillProducts();
    }

    public get Categories(): (string | undefined)[] {
        return this.repository.getCategories();
    }

    
    public changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    public changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    public changePageSize(newSize: number | null | string) {
        this.productsPerPageCount = Number(newSize);
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
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPageCount)
    }

    /* Cart */

    public addProductToCart(product: Product) {
        this.cart.addLine(product);
        //this.router.navigateByUrl("/cart");
    }
    /* _ Cart */
}
