import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../order.model";
import { RestDataSource } from "../../dataSource/rest.datasource";

@Injectable()
export class OrderRestRepository {
    
    private orders: Order[] = [];
    
    constructor(private dataSource: RestDataSource) {}
    
    public getOrders(): Order[] {
        return this.orders;
    }
    
    public saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}
