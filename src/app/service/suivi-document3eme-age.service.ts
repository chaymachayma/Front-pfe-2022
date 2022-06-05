import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SuiviDoc3emeAge } from '../models/suivi-doc-3eme-age';

@Injectable({
  providedIn: 'root'
})
export class SuiviDocument3emeAgeService {
  constructor(private http: HttpClient) { }
  public  getDocuments() 
  {
    return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments3eme");
 }
 public  getDocumentsDeleted() 
 {
   return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments3eme/deleted");
}

 getDOcumentById(id:number):Observable<any>{
   return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments3eme/" + id);
 }
 public createDocument(suividocument3emeage:SuiviDoc3emeAge) :Observable<any>{
   return this.http.post<any>("http://localhost:8083/api/test/SuiviDocument3eme",suividocument3emeage);
 }

 update(id:number, suividocument3emeage:SuiviDoc3emeAge):Observable<any>{
  return this.http.put<any>("http://localhost:8083/api/test/SuiviDocument3eme/" + suividocument3emeage.id,suividocument3emeage);
}
  deleteDocument(id:number): Observable<any>{
  return this.http.patch<any>("http://localhost:8083/api/test/SuiviDocument3eme/"+id,{});
  } 
}