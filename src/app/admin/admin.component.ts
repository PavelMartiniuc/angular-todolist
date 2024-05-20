import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {

    constructor(private auth: AuthService, private router: Router) {

    }
        
    public logout() {
        this.auth.clearAuth();
        this.router.navigateByUrl("/");
    }
}