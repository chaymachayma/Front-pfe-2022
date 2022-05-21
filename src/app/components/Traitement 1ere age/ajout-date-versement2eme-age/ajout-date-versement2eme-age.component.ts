import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import Swal from 'sweetalert2';
import { ReceptionPhysiqueDocComponent } from '../../Traitement 2eme age/reception-physique-doc/reception-physique-doc.component';

@Component({
  selector: 'app-ajout-date-versement2eme-age',
  templateUrl: './ajout-date-versement2eme-age.component.html',
  styleUrls: ['./ajout-date-versement2eme-age.component.scss']
})
export class AjoutDateVersement2emeAgeComponent implements OnInit {
  suividocument=new SuiviDocument();
 
   msg='';
   productForm !: FormGroup; 
   constructor( @Inject(MAT_DIALOG_DATA) public data : any, public dialogRef: MatDialogRef<AjoutDateVersement2emeAgeComponent>,private _service:SuiviDocumentService,private service:DirectionService,private serviice:NomenclatureService) { }
 
   ngOnInit(): void {
    this.suividocument=this.data[0]
    this._service.getDocuments().subscribe(
      data=>{
        console.log(data,"hethi 2eme age")
        this.data=data
        console.log(this.suividocument,"suividocument")
      }
    )
   }
   
   public  onSubmit(){ 
 console.log(this.suividocument)

 this._service.createDocument(this.suividocument).subscribe(
     data=>{ 
       console.log("response received");
 },
      error =>{   
      console.log("exception occured");
       this.msg=error.error;}
   )
      
    }
 
   
   opensweetalert(){
            
     Swal.fire(
       'ajoutée!',
       'Votre Date a été ajoutée',
       'success'
     ).then( result => {
       console.log(result);
       if(result.isConfirmed ){
        this.dialogRef.close();
       
       
 
       }
       
    
     })
    
 
 }
 
 
 
  
 
}
 