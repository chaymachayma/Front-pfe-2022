import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';

import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { DirectionService } from 'src/app/service/direction.service';
@Component({
  selector: 'app-modifier-sortie-doc',
  templateUrl: './modifier-sortie-doc.component.html',
  styleUrls: ['./modifier-sortie-doc.component.css']
})
export class ModifierSortieDocComponent implements OnInit {
  libelleDirections!:any[];
  designation_Nomenclatures!:any[];
  id !:number;
  suividocument : any;
  
  constructor(private serviice:NomenclatureService,private service:DirectionService,   private _service:SuiviDocumentService,private route:ActivatedRoute, private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.suividocument =new SuiviDocument();
    console.log(this.data,"item")
    this.suividocument=this.data.sortie[0]
    console.log(this.suividocument)
    this.getDirections();
    console.log(this.libelleDirections)
    this.getNomenclatures();
    }
  
  public  onSubmit(){ 
   
    this._service.updateDocument(this.id,this.suividocument).subscribe(
      data=>console.log(data),error=>console.error()
      );
      this.suividocument =new SuiviDocument();
   
  
    
    }

opensweetalert(){
  Swal.fire({
    title:'Êtes-vous sûre?',
    text: "",
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'oui,modifiez-le!',
    cancelButtonText:'Non,gardez-le'
      
  }).then((result) => {
    console.log(result)
    if(result.isConfirmed){
      this.onSubmit();
    }
    if (result.value) {
      Swal.fire(
        'modifié!',
        'Votre inscription de sortie de document  a été modifié',
        'success'
      )
    window.location.reload()
    }else if (result.dismiss==Swal.DismissReason.cancel){
    Swal.fire(
      'non modifié',
      'Annulé la modification',
      'error'
    )
    window.location.reload()

    }
  })


}
retour(){
  window.location.reload()
}
async getDirections() {
  await this.service.getDirections().subscribe(
     res=>{
       console.log(res,'hh')
       this.libelleDirections=res,
       console.log(this.libelleDirections,'jj')
     },
 
     error=>console.log(error)
   )
 }
 
 async getNomenclatures() {
  await this.serviice.getNomenclatures().subscribe(
    res=>{ 
      this.designation_Nomenclatures=res,
      console.log(this.designation_Nomenclatures,'jj')
    },
 
     error=>console.log(error)
 
    
  )
 
  
 }
}
