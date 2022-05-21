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
    console.log(this.data,"amal")
    this.suividocument=this.data[0]
    this.getDirections()
    console.log(this.libelleDirections)
    this.getNomenclatures()
    this.getCentrePreArchivage()
    this.selected1=this.data[0].libelleDirection.id ;
    this.selected3=this.data[0].designation_Nomenclature.id ;
   
    this._service.getDocuments().subscribe(
      data=>{
        console.log(data,"hethi 2eme age")
        this.data=data
        console.log(this.suividocument,"suividocument")
      }
    )
 
 
    
  }
  public enregistre(){
 
    
    this.service.getDirectionById(this.selected1).subscribe(
      res=>{this.suividocument.libelleDirection=res
      console.log(this.suividocument)

      this.serviice.getNomenclatureById(this.selected3).subscribe(
        res=>{this.suividocument.designation_Nomenclature=res
      
          console.log(this.suividocument)
         
      this.servicee.getCentrePreArchivageById(this.selected2).subscribe(
        res=>{this.suividocument.code_centre=res     
          console.log(this.suividocument);

 

console.log(this.suividocument,"lllll")
  this._service.createDocument(this.suividocument).subscribe(     
    
    data =>{
    console.log("reponse received");  
   },
   error =>{
    console.log(this.suividocument,"ahmed")
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
        'ajoutée!',
        'Votre Document a été ajoutée',
        'success'
      ).then( result => {
        console.log(result);
        if(result.isConfirmed ){
         
        // this.suividocument.date_De_creation_Du_Document=;
          //this.suividocument.chapitre_comptable="";       
        // this.suividocument.nombre_De_pages = 
          //this.suividocument.nombre_De_documents=;
          //this.suividocument.limite_de_conservation_1ere_age = "";
          this.dialogRef.close();
        }
      })
     
  
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


async getCentrePreArchivage()  {
  await this.servicee.getCentrePreArchivage().subscribe(
     res=>{
       console.log(res,'hh')
       this.code_centres=res,
       console.log(this.code_centres,10)
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

   
 )}
retour(){
  window.location.reload()
}

}
