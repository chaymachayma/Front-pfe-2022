import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentrePreArchivages } from '../models/centre-pre-archivages';

@Injectable({
  providedIn: 'root'
})
export class CentrePreArchivageService {

 
  constructor(private http: HttpClient) {
  }            
 
  isAuth:boolean =false;
 public  getCentrePreArchivage() 
 {return this.http.get<any>("http://localhost:8083/api/test/CentrePreArchivages");
}
  

  getCentrePreArchivageById(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8083/api/test/CentrePreArchivages/" + id);
  }
  
  public createCentrePreArchivage(CentrePreArchivages:CentrePreArchivages) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/CentrePreArchivage",CentrePreArchivages);
  }


  updateCentrePreArchivage(id:number, CentrePreArchivages:CentrePreArchivages):Observable<any>{
    return this.http.put<any>("http://localhost:8083/api/test/CentrePreArchivages/" + CentrePreArchivages.id,CentrePreArchivages);
  }

  deleteCentrePreArchivages(id:number): Observable<any>{
    return this.http.delete<any>("http://localhost:8083/api/test/CentrePreArchivages/"+id);
    }
}