import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd, NavigationStart, Navigation, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPreviousUrl();
  }

  checkPreviousUrl(){
    let previous :string|undefined;
    previous = this.router.getCurrentNavigation()?.previousNavigation?.extractedUrl.toString();
    if(previous=='/auth/register'|| previous=='/auth/sign_in'){
      return true;
    }
    return false;
  }

}
