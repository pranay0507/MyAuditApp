import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
      }
      this.router.navigate(['myauditapp/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
  
}
