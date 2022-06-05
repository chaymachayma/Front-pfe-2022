import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { CentrePreArchivageService } from 'src/app/service/centre-pre-archivage.service';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { StructureService } from 'src/app/service/structure.service';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import Swal from 'sweetalert2';
import { ReceptionPhysiqueDocComponent } from '../reception-physique-doc/reception-physique-doc.component';

@Component({
  selector: 'app-ajout-inscription',
  templateUrl: './ajout-inscription.component.html',
  styleUrls: ['./ajout-inscription.component.scss']
})
export class AjoutInscriptionComponent implements OnInit {


  Lieux!:any[];
  designation_Nomenclatures!:any[];
  libelleDirections!:any[];
  code_centres!:any[]
  suividocument=new SuiviDoc2emeAge();
  selected1!:number
  selected2!:number
  selected3!:number

  constructor(private servicce:StructureService ,private service:DirectionService,private servicee:CentrePreArchivageService ,private serviice:NomenclatureService,private _service:SuiviDoc2emeAgeServiceService,@Inject(MAT_DIALOG_DATA) public data : any,
  public dialogRef: MatDialogRef<ReceptionPhysiqueDocComponent>,private serviceee:SuiviDocumentService) { }

  ngOnInit(): void {
 
    this.suividocument=this.data[0]
    this.getDirections()
  
    this.getNomenclatures()
    this.getCentrePreArchivage()
    this.selected1=this.data[0].libelleDirection.id ;
    this.selected3=this.data[0].designation_Nomenclature.id ;
   
    this._service.getDocuments().subscribe(
      data=>{
        
        this.data=data
         
      }
    )
 
 
    
  }
  public enregistre(){
 
    
    this.service.getDirectionById(this.selected1).subscribe(
      res=>{this.suividocument.libelleDirection=res
 

      this.serviice.getNomenclatureById(this.selected3).subscribe(
        res=>{this.suividocument.designation_Nomenclature=res
      
       
         
      this.servicee.getCentrePreArchivageById(this.selected2).subscribe(
        res=>{this.suividocument.code_centre=res     
          

 


this.suividocument.limite_de_conservation_2eme_age=this.suividocument.limite_de_conservation_2eme_age+" ans";

  this._service.createDocument(this.suividocument).subscribe(     
    
    data =>{
    console.log("reponse received");  
   },
   error =>{
    
     console.log("exception occured");
    }
    )
  
  },
  error=>{console.log(error);}
  )},
    error=>{console.log(error)}
  )
  },
  error=>{console.log(error)}
    )}
 
    
    
    opensweetalert(){
           
      Swal.fire(
        'Ajouté!',
        'Votre document a été ajouté',
        'success'
      ).then( result => {
        console.log(result);
        if(result.isConfirmed ){
     
          this.dialogRef.close();
        }
      })
     
  
  }   
    


  async getDirections() {
 await this.service.getDirections().subscribe(
    res=>{
 
      this.libelleDirections=res,
      console.log(this.libelleDirections)
    },
    error=>console.log(error)
  )
}


async getCentrePreArchivage()  {
  await this.servicee.getCentrePreArchivage().subscribe(
     res=>{
  
       this.code_centres=res,
       console.log(this.code_centres)
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

   
 )}
retour(){
  window.location.reload()
}

}
