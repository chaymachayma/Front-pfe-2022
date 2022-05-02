import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SuiviDoc2emeAge } from '../models/suivi-doc-2eme-age';
import { SuiviDocument } from '../models/suivi-document';
@Injectable({
  providedIn: 'root'
})
export class SuiviDoc2emeAgeServiceService {

  constructor(private http: HttpClient) { }
  public  getDocuments() 
  {
    return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments2eme");
 }
 getDOcumentById(id:number):Observable<any>{
   return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments2eme/" + id);
 }
 public createDocument(suividocument2emeage:SuiviDoc2emeAge) :Observable<any>{
   return this.http.post<any>("http://localhost:8083/api/test/SuiviDocument2eme",suividocument2emeage);
 }
}
