import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable, map, of } from "rxjs";
import { Product } from "../model/product.model";
import { Cart } from "../model/cart.model";
import { Order } from "../model/order.model";
import { RequestVerb } from "../common/enums/request.Verbs";
import { AuthResult } from "../auth/model/auth.result";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
  
    public baseUrl: string;
    private authToken: string;   

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  public getProducts(): Observable<Product[]> {
    return this.sendRequest<Product[]>(RequestVerb.Get, 'products');
  }

  public saveOrder(order: Order): Observable<Order> {
    return this.sendRequest(RequestVerb.Post, 'orders', order);
  }

  public authenticate(user: string, pass: string): Observable<boolean> {
    let authBody = { name: user, password: pass };
    return this.sendRequest<AuthResult>(RequestVerb.Post, 'login', authBody)
        .pipe(map(authResult => {
            this.authToken = authResult.token;
            return authResult.success
        }));
  }

  public get authenticated(): boolean {
    return this.authToken != null;
  }

  public clearAuth(): void  {
    return this.authToken = null;
  }

  private sendRequest<T>(
    verb: RequestVerb,
    url: string,
    body?: any
  ): Observable<T> {
    let _url = this.baseUrl + url;

    switch (verb) {
      case RequestVerb.Get: {
        return this.http.get<T>(_url, { headers: this.getAuthHeader() } );
      }
      case RequestVerb.Post: {
        return this.http.post<T>(_url, body, { headers: this.getAuthHeader() });
      }
      default: {
        return undefined;
      }
    }
  }

  private getAuthHeader() : HttpHeaders {
    if (this.authToken)
    {
        let header = new HttpHeaders({ "Authorization" : `Bearer<${this.authToken}>` });
        return header;
    }
    
    return undefined;
  }
}