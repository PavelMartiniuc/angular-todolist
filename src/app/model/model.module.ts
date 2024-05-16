import { NgModule } from "@angular/core";
import { ProductStaticRepository } from "./repositories/product.static.respositiry";
import { StaticDataSource } from "../dataSource/static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./repositories/order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "../dataSource/rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductStaticRepository, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource }
     ]
})
export class ModelModule { }