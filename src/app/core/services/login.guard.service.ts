/**
 * Created by th3ee on 11/7/17.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { LoginAuthService } from './login.auth.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginAuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: LoginAuthService, private router: Router) {}
    Returns = JSON.parse(localStorage.getItem('_user'));
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkLogin(url: string): boolean {
        if (localStorage.getItem('_user')) {
            console.log(this.Returns.access_token);
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}