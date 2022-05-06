import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:TokenService,private router:Router,private auth:AuthService){}
  canActivate(){
    console.log(this.auth.IsLoggedIn())
    if( this.auth.IsLoggedIn())
    {

      return true;
    }
    else{ alert("warn")
    this.router.navigate(['/'])
       
      
      return false
    }

}
}
