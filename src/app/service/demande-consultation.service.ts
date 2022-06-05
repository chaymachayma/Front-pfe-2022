import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeConsultation } from '../models/demande-consultation';

@Injectable({
  providedIn: 'root'
})
export class DemandeConsultationService {

  constructor(private http: HttpClient) { }
  baseUrl:string="http://localhost:8083/api/test/DemandesConsultation/";
  public createDemande(demande:DemandeConsultation) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/DemandeConsultation",demande);
  }

  public  getDemandes() :Observable<any>
  {return this.http.get<any>("http://localhost:8083/api/test/DemandesConsultation");
 }
   
 
   getDemandeById(id:any):Observable<any>{
     return this.http.get<any>("http://localhost:8083/api/test/DemandesConsultation/" + id);
   }

}