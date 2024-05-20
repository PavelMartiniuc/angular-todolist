import { Injectable } from "@angular/core";
import { Product } from "../product.model";
import { ArrayHelper } from "../../common/array.Helper";
import { RestDataSource } from "../../dataSource/rest.datasource";

@Injectable()
export class ProductRestRepository {
  private products: Product[] = [];

  private categories: (string | undefined)[] = [];

  constructor(private dataSource: RestDataSource) {}

  public fillProducts(): void {
    this.dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = ArrayHelper.ToDistinct(
        data.map((p) => p.category)
      ).sort();
    });
  }

  public get TotalProductsCount(): number {
    return this.products.length;
  }

  public getProducts(category: string | null = null): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }

  public getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  public getCategories(): (string | undefined)[] {
    return this.categories;
  }

  public saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product
        );
      });
    }
  }

  public deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1
      );
    });
  }
}