import { Component } from "@angular/core";
import { Product } from "../../model/product.model";
import { ProductRestRepository } from "../../model/repositories/product.rest.Repositiry";

@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    constructor(private repository: ProductRestRepository) { 
        this.repository.fillProducts();
    }
    
    public getProducts(): Product[] {
        
        return this.repository.getProducts();
    }

    public deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}