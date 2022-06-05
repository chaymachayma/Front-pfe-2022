import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginInfo } from '../models/login-info';
import { Compte } from '../models/compte';

import { SignUpInfo } from '../models/sign-up-info';

import { TokenService } from './token.service';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  const TOKEN_KEY='AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl:string="http://localhost:8083/api/test/authentification/";
  private signupUrl = 'http://localhost:8083/api/auth/signup';
  private signinUrl = 'http://localhost:8083/api/auth/';
  constructor(private http:HttpClient,private jwtHelper:JwtHelperService,
    private tokenstorage:TokenService,private router:Router){
   }

   IsLoggedIn(){
     const token=localStorage.getItem('token');
     if(token){
       return true;
     }
     else{
       return false;
     }
    }
    register(signupinfo:SignUpInfo): Observable<any> {
      return this.http.post(this.signupUrl,signupinfo)
        
    }
 
  login(login:LoginInfo): Observable<any> {
    return this.http.post(this.signinUrl + 'signin', {
      username: login.username,
      password: login.password
    }, httpOptions);
  }
   

  
    deleteCompteAuth(id:number): Observable<any>{
    return this.http.delete<any>(this.baseUrl+id);
    } 
  
    updateCompteAuth(id:number, compte:Compte):Observable<any>{
      return this.http.put<any>(this.baseUrl + compte.id,compte);
    }
  
 



 

























































  /*  token: string|undefined;
  public loggedUser:string|undefined;
  public isloggedIn: Boolean = false;
  public roles:Role[]|undefined;

  private helper = new JwtHelperService();

   
  constructor(private router: Router,
             private http : HttpClient) { }



    signIn(user :User){
      this.loggedUser = user.username;
      this.isloggedIn = true;
      this.roles = user.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
  

  saveToken(jwt:string | any){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true; 
    this.decodeJWT(); 
  }
  
  decodeJWT()
  {   if (this.token == undefined)
            return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }
 


  loadToken() {
    this.token == localStorage.getItem('jwt');
    this.decodeJWT();
  }

  getToken():string |undefined{
    return this.token;
  }

logout() { 
  this.loggedUser = undefined;
  this.roles = undefined;
  this.token= undefined;
  this.isloggedIn = false;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);
}

  

  isAdmin():Boolean{
    let admin: Boolean = false;
if (!this.roles) //this.roles== undefiened
return false;
this.roles.forEach((curRole) => {
if(curRole.role == 'ADMIN') {
admin = true;
}
});
return admin;
  }

   

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username :string){    
    this.getUserFromDB(username).subscribe((user: User)=>{
      this.roles = user.roles;
      });
    
  }
  getUserFromDB(username:string):Observable<User>
{
const url = `${this.apiURL}`;
return this.http.get<User>(url);
}
*/

}
