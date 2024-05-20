import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../order.model";
import { RestDataSource } from "../../dataSource/rest.datasource";

@Injectable()
export class OrderRestRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) {}

  public getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  public saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  public updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id == order.id),
        1,
        order
      );
    });
  }

  public deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe((order) => {
      this.orders.splice(this.orders.findIndex((o) => id == o.id));
    });
  }

  private loadOrders() {
    this.dataSource.getOrders().subscribe((orders) => {
      this.orders = orders;
      this.loaded = true;
    });
  }
}
