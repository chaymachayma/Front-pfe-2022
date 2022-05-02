import { Component, OnInit } from '@angular/core';
import {  SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import {CentrePreArchivageService} from 'src/app/service/centre-pre-archivage.service'
import Swal from 'sweetalert2';
import { StructureService } from 'src/app/service/structure.service';
import { ReceptionPhysiqueDocComponent } from '../reception-physique-doc/reception-physique-doc.component';
@Component({
  selector: 'app-ajouter-reception-doc',
  templateUrl: './ajouter-reception-doc.component.html',
  styleUrls: ['./ajouter-reception-doc.component.scss']
})
export class AjouterReceptionDocComponent implements OnInit {
  Lieux!:any[];
  designation_Nomenclatures!:any[];
  libelleDirections!:any[];
  code_centres!:any[]
  suividocument=new SuiviDoc2emeAge();

  constructor(private servicce:StructureService ,private service:DirectionService,private servicee:CentrePreArchivageService ,private serviice:NomenclatureService,private _service:SuiviDoc2emeAgeServiceService,@Inject(MAT_DIALOG_DATA) public data : any,
  public dialogRef: MatDialogRef<ReceptionPhysiqueDocComponent>) { }

  ngOnInit(): void {
    console.log(this.data,"amal")
    this.suividocument=this.data[0]
    this.getDirections()
    console.log(this.libelleDirections)
    this.getNomenclatures()
    this.getCentrePreArchivage()
  
    
  }
  public enregistre(){
    this.suividocument.nbrPhy <= this.suividocument.nombre_De_documents
    this.suividocument.ecart=this.suividocument.nombre_De_documents-this.suividocument.nbrPhy
    
    this.service.getDirectionById(this.suividocument.libelleDirection).subscribe(
      res=>{this.suividocument.libelleDirection=res
      console.log(this.suividocument)

      this.serviice.getNomenclatureById(this.suividocument.designation_Nomenclature).subscribe(
        res=>{this.suividocument.designation_Nomenclature=res
      
          console.log(this.suividocument)
         
      this.servicee.getCentrePreArchivageById(this.suividocument.code_centre).subscribe(
        res=>{this.suividocument.code_centre=res     
          console.log(this.suividocument);

 
 const data={
  toEmail: "najjaramal220@gmail.com" ,
  subject : "test" ,
  body :  this.suividocument.ecart

}
if(this.suividocument.ecart==0){
console.log(this.suividocument.ecart,"gvudfgvudfvfu")
console.log(data)
this.servicce.sendmail(data).subscribe(
  res=>console.log("emailsended"),
  err=>console.log(err)
)
}

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
