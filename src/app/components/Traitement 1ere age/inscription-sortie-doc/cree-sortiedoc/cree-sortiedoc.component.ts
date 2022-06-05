import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-sortiedoc',
  templateUrl: './cree-sortiedoc.component.html',
  styleUrls: ['./cree-sortiedoc.component.css']
})
export class CreeSortiedocComponent implements OnInit {

  suividocument=new SuiviDocument();
  libelleDirections!:any[];
  designation_Nomenclatures!:any[];
   msg='';
   productForm !: FormGroup; 
   constructor(private _service:SuiviDocumentService,private service:DirectionService,private serviice:NomenclatureService) { }
 
   ngOnInit(): void {
  this.getDirections()
   
  this.getNomenclatures()
   }
   
   public  onSubmit(){ 
 
 
 
 this.service.getDirectionById(this.suividocument.libelleDirection).subscribe(
   res=>{this.suividocument.libelleDirection=res
   
   //
 this.serviice.getNomenclatureById(this.suividocument.designation_Nomenclature).subscribe(
   res=>{this.suividocument.designation_Nomenclature=res
 
    
 //
 
 
   this._service.createDocument(this.suividocument).subscribe(
     data=>{ 
       console.log("response received");
 },
      error =>{   
      console.log("exception occured");
       this.msg=error.error;
    
      }
   )
 
 },
 error=>{console.log(error);}
 )},
   error=>{console.log(error)}
 )
 }
   
   opensweetalert(){
            
     Swal.fire(
       'Crée!',
       'Votre document a été crée',
       'success'
     ).then( result => {
       console.log(result);
       if(result.isConfirmed ){
         
       
 
         this.suividocument.chapitre_comptable="";       
       
         this.suividocument.limite_de_conservation_1ere_age = "";
 
       }
     })
    
 
 }
 
 retour(){
 window.location.reload()
 }
 
 
   async getDirections() {
  await this.service.getDirections().subscribe(
     res=>{
       console.log(res)
       this.libelleDirections=res,
       console.log(this.libelleDirections)
     },
 
     error=>console.log(error)
   )
 }
 
 async getNomenclatures() {
  await this.serviice.getNomenclatures().subscribe(
    res=>{ 
      this.designation_Nomenclatures=res,
      console.log(this.designation_Nomenclatures)
    },
 
     error=>console.log(error)
 
    
  )
 
  
 }
}