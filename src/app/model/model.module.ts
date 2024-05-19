import { NgModule } from "@angular/core";
import { ProductStaticRepository } from "./repositories/product.static.respositiry";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRestRepository } from "./repositories/order.rest.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "../dataSource/rest.datasource";
import { AuthService } from "../auth/auth.service";
import { StaticDataSource } from "../dataSource/static.datasource";
import { ProductRestRepository } from "./repositories/product.rest.Repositiry";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductStaticRepository, Cart, Order, OrderRestRepository,
        /*{ provide: StaticDataSource, useClass: RestDataSource },*/
        RestDataSource, AuthService, StaticDataSource, ProductRestRepository
     ]
})
export class ModelModule { }