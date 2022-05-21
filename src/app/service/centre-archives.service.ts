import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentreArchives } from '../models/centre-archives';

@Injectable({
  providedIn: 'root'
})
export class CentreArchivesService {

  constructor(private http: HttpClient) {
  }            
 
  isAuth:boolean =false;
 public  getCentreArchive() 
 {return this.http.get<any>("http://localhost:8083/api/test/CentreArchives");
}
  

  getCentreArchiveById(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8083/api/test/CentreArchives/" + id);
  }
  
  public createCentreArchive(CentreArchives:CentreArchives) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/CentreArchive",CentreArchives);
  }


  updateCentreArchive(id:number, CentreArchives:CentreArchives):Observable<any>{
    return this.http.put<any>("http://localhost:8083/api/test/CentreArchives/" + CentreArchives.id,CentreArchives);
  }

  deleteCentreArchives(id:number): Observable<any>{
    return this.http.delete<any>("http://localhost:8083/api/test/CentreArchives/"+id);
    }
  }