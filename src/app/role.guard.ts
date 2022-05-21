import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './service/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:TokenService,private router:Router){}
  canActivate(){
    //let Role=localStorage.getItem("userType")
if(this.service.isAdmin() ){
  return true;
      }
     else{
        alert("you don't have admin rights")
     this.router.navigate(['/'])
     
      return false;
    }
  
  }
  
}
