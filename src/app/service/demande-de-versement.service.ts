import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeDeVersement } from '../models/demande-de-versement';
@Injectable({
  providedIn: 'root'
})
export class DemandeDeVersementService {

  constructor(private http: HttpClient) { }
  baseUrl:string="http://localhost:8083/api/test/Demandes/";
  
  public createDemande(demande:DemandeDeVersement) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/Demande",demande);
  }

  public  getDemandes() :Observable<any>
  {return this.http.get<any>("http://localhost:8083/api/test/Demandes");
 }
   
 
   getDemandeById(id:any):Observable<any>{
     return this.http.get<any>("http://localhost:8083/api/test/Demandes/" + id);
   }

   deleteDemande(id:number): Observable<any>{
    return this.http.delete<any>("http://localhost:8083/api/test/Demandes/"+id);
    } 
}
