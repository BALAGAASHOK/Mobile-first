import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuardService {
  constructor(public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("I am in loginGuard");
    let data = localStorage.getItem('userInfo');
    let token = data ? data : '';
    if (token) {
      this.router.navigateByUrl('/employee/employee-list');
      return false;
    } else {
      // this.router.navigate(['login']);
      return true;
    }
  }
}

