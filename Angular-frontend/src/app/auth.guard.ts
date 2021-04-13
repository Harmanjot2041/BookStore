import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router){}
  userInfo:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if(localStorage.getItem('Token')!= null)
      {
        this.userInfo = JSON.parse(localStorage.getItem('UserInfo')||'{}');
        let role:number =  route.data['permittedRoles'];
        if(role)
        {
          if(this.userInfo.role == role)
          {
            return true;
          }
        else
          {
            this.router.navigate(['/UserDashboard']);
            return false;
          }
        }
       
        return true;
      }
    else{
      this.router.navigate(['/Signin']);
      return false;
    }
  }
  
  
}
