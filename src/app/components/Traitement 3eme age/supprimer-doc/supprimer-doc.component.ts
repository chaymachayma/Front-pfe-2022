import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { SuiviDoc3emeAge } from 'src/app/models/suivi-doc-3eme-age';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-supprimer-doc',
  templateUrl: './supprimer-doc.component.html',
  styleUrls: ['./supprimer-doc.component.scss']
})
export class SupprimerDocComponent implements OnInit {
  suividocuments:any;
  id!:number 
  suividocument=new SuiviDoc3emeAge();
  constructor(private service:SuiviDocument3emeAgeService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void  {
    this.suividocument = this.data.suividocument;
  if ( this.id=this.route.snapshot.params['id']){
    this.suividocument=new SuiviDoc3emeAge();
    this.service.getDOcumentById(this.id).subscribe(
      data=>{ console.log(data);
               this.suividocument=data;
      },
      error=>console.log(error)
      )
  }}

  deleteDocument(id:number){
    console.log(id);    
    this.service.deleteDocument(id).subscribe(
      data=>{
        console.log(data);
        this.suividocuments=this.service.getDocuments();
      },
      error=>console.error(error)
      );  
    
      window.location.reload()
     
 } 


 return(){
 }
}
