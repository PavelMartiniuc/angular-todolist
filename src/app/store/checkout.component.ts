import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrderRestRepository } from "../model/repositories/order.rest.repository";
import { Order } from "../model/order.model";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {

    public orderSent: boolean = false;
    
    public submitted: boolean = false;
    
    constructor(public repository: OrderRestRepository, public order: Order) {

    }
    
    public submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository
            .saveOrder(this.order)
            .subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}