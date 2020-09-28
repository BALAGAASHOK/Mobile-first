import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  constructor(public router: Router) { }
  canActivate(): boolean {
    let data = JSON.parse(localStorage.getItem('userInfo'));
    let token = data ? data : '';
    if (!token) {
      this.router.navigate(['sign-up']);
      return false;
    }
    return true;
  }

  canLoad(): boolean {
    console.log("I am in AuthGuard");

    let data = localStorage.getItem('userInfo');
    let token = data ? data : '';
    if (!token) {
      this.router.navigate(['sign-up']);
      return false;
    }
    return true;
  }
  canActivateChild() {
    console.log("I am in AuthGuard");
    let data = localStorage.getItem('userInfo');
    let token = data ? data : '';
    if (!token) {
      this.router.navigate(['sign-up']);
      return false;
    }
    return true;
  }
  isAuthorized() {
    let data = localStorage.getItem('userInfo');
    let token = data ? data : '';
    return token ? true : false;
  }
}
