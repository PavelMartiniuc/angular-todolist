import { Injectable } from "@angular/core";
import { Observable, pipe, map } from "rxjs";
import { RestDataSource } from "../dataSource/rest.datasource";
import { AuthResult } from "./model/auth.result";


@Injectable()
export class AuthService {
    
    constructor(private datasource: RestDataSource) {

    }
 
    public authenticate(username: string, password: string): Observable<boolean> {
        return this.datasource.authenticate(username, password)
    }
    
    public get authenticated(): boolean {
        return this.datasource.authenticated;
    }
    
    public clearAuth() {
        this.datasource.clearAuth()
    }
}