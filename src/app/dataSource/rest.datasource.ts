import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable, map, of } from "rxjs";
import { Product } from "../model/product.model";
import { Cart } from "../model/cart.model";
import { Order } from "../model/order.model";
import { RequestVerb } from "../common/enums/request.Verbs";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
   public baseUrl: string;

    constructor(private http:HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    
    public getProducts(): Observable<Product[]>  {
        return this.sendRequest<Product[]>(RequestVerb.Get, "products");
    }
    
    
    public saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestVerb.Post, "orders", order);
    }
    
    private sendRequest<T>(verb: RequestVerb, url: string, body?: Product | Order): Observable<T> {
        let _url = this.baseUrl + url;
    
        switch(verb) {
            case RequestVerb.Get: {
                return this.http.get<T>(_url)
            }
            case RequestVerb.Post: {
                return this.http.post<T>(_url, body)
            }
            default: {
                return undefined;
            }
        }
    }
}