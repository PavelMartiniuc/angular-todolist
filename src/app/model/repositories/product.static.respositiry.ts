import { Injectable } from "@angular/core";
import { Product } from "../product.model";
import { StaticDataSource } from "../../dataSource/static.datasource";
import { ArrayHelper } from "../../common/array.Helper";

@Injectable()
export class ProductStaticRepository {
  
    private products: Product[] = [];
  
    private categories: (string | undefined)[] = [];
  
    constructor(private dataSource: StaticDataSource) {
        dataSource
        .getProducts()
        .subscribe(data => {
            this.products = data;
            this.categories = ArrayHelper.ToDistinct(data.map(p => p.category)).sort();
        });
    }
    
    public getProducts(category: string | null  = null): Product[] 
    {
        return this.products.filter(p => category == null || category == p.category);
    }
  
    public getProduct(id: number): Product | undefined
    {
        return this.products.find(p => p.id == id);
    }
  
    public getCategories(): (string | undefined)[] 
    {
        return this.categories;
    }
}