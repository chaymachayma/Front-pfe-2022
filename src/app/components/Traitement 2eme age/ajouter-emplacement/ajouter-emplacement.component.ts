import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import {CentrePreArchivageService} from 'src/app/service/centre-pre-archivage.service'
import Swal from 'sweetalert2';
import { StructureService } from 'src/app/service/structure.service';
import { ReceptionPhysiqueDocComponent } from '../reception-physique-doc/reception-physique-doc.component';
import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { ClassementDocsComponent } from '../classement-docs/classement-docs.component';

@Component({
  selector: 'app-ajouter-emplacement',
  templateUrl: './ajouter-emplacement.component.html',
  styleUrls: ['./ajouter-emplacement.component.scss']
})
export class AjouterEmplacementComponent implements OnInit {
  select1!:number
  select2!:number
  select3!:number
  Lieux!:any[];
  designation_Nomenclatures!:any[];
  libelleDirections!:any[];
  code_centres!:any[]
  suividocument=new SuiviDoc2emeAge();
  constructor(private servicce:StructureService ,private service:DirectionService,private servicee:CentrePreArchivageService ,private serviice:NomenclatureService,private _service:SuiviDoc2emeAgeServiceService,@Inject(MAT_DIALOG_DATA) public data : any,
  public dialogRef: MatDialogRef<ClassementDocsComponent>) { }
//
  ngOnInit(): void {
 
    this.suividocument=this.data[0]
    this.getDirections()
 
    this.getNomenclatures()
    this.getCentrePreArchivage() 
    this._service.getDocuments().subscribe(
      data=>{
      
        this.data=data
       
      }
    )
    this.select1=this.suividocument.code_centre.id;
    this.select2=this.suividocument.libelleDirection.id;
    this.select3=this.suividocument.designation_Nomenclature.id;

         
  }

  public enregistre(){  
    this.service.getDirectionById(this.suividocument.libelleDirection).subscribe(
      res=>{this.suividocument.libelleDirection=res
   

      this.serviice.getNomenclatureById(this.suividocument.designation_Nomenclature).subscribe(
        res=>{this.suividocument.designation_Nomenclature=res     
       
         
      this.servicee.getCentrePreArchivageById(this.suividocument.code_centre).subscribe(
        res=>{this.suividocument.code_centre=res     
      
 
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
  )},
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
 
      this.libelleDirections=res
    },
    error=>console.log(error)
  )
}


async getCentrePreArchivage()  {
  await this.servicee.getCentrePreArchivage().subscribe(
     res=>{
    
       this.code_centres=res
     },
     error=>console.log(error)
   )
 }

async getNomenclatures() {
 await this.serviice.getNomenclatures().subscribe(
   res=>{ 
     this.designation_Nomenclatures=res
   },
    error=>console.log(error)

   
 )}

  
}



