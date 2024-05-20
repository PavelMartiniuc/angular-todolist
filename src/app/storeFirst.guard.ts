import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";

import { StoreComponent } from "./store/store.component";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class StoreFirstGuard {
    
    private firstNavigation = true;
    
    constructor(private router: Router, private auth: AuthService) { }
    
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        
        if (!this.auth.authenticated) {
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        
        return true;
    }
}