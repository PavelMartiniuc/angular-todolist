import { NgModule } from "@angular/core";
import { ProductStaticRepository } from "./repositories/product.static.respositiry";
import { StaticDataSource } from "../dataSource/static.datasource";
import { Cart } from "./cart.model";

@NgModule({
 providers: [ProductStaticRepository, StaticDataSource, Cart]
})
export class ModelModule { }