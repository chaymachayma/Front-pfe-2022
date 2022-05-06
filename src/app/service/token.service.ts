import { Injectable } from '@angular/core';
//const TOKEN_KEY = 'AuthToken';
//const USERNAME_KEY = 'AuthUsername';
//const AUTHORITIES_KEY='AuthAuthorities';
const TOKEN_KEY = 'auth-token';
const role = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
//private roles:Array<string>|any;

  constructor() { }

 

  public saveToken(token: string,roles:any) {
   localStorage.removeItem(TOKEN_KEY);
   localStorage.setItem(TOKEN_KEY, token);
   localStorage.removeItem(role)
   localStorage.setItem(role,roles)
  }

  public getToken(): string|null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isAdmin(){
    const token=localStorage.getItem("role")
    if (token){
  
      if (token!="ROLE_ADMIN")
            return false;
      else
      return true;

    }
    return false;
  }
}



  