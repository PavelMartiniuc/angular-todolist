import { NgModule } from "@angular/core";
import { ProductStaticRepository } from "./repositories/product.static.respositiry";
import { StaticDataSource } from "../dataSource/static.datasource";

@NgModule({
 providers: [ProductStaticRepository, StaticDataSource]
})
export class ModelModule { }