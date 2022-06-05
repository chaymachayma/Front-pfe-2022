import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { Structure } from 'src/app/models/structure';
import { AgenceService } from 'src/app/service/agence.service';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { StructureService } from 'src/app/service/structure.service';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { DemandeDeVersementComponent } from '../../Traitement 1ere age/demande-de-versement/demande-de-versement.component';
import { ListeDemandeConsultationComponent } from '../liste-demande-consultation/liste-demande-consultation.component';

@Component({
  selector: 'app-envoyer-demande-consultation',
  templateUrl: './envoyer-demande-consultation.component.html',
  styleUrls: ['./envoyer-demande-consultation.component.scss']
})
export class EnvoyerDemandeConsultationComponent implements OnInit {
  Structures!:any[];
  Agences!:any[];
  Suividoc2eme!:any[];
  demande=new DemandeConsultation();
  msg='';
  constructor(private router:Router,public dialogRef: MatDialogRef<EnvoyerDemandeConsultationComponent >,@Inject(MAT_DIALOG_DATA) public data: any,private _service:DemandeConsultationService,private service:StructureService,private serviice:AgenceService,private serviiice:SuiviDoc2emeAgeServiceService    ,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getStructures()
    
    this.getAgences()
    this.getsuivi2eme()
 
  }


  public  Envoyer(){ 

    this.service.getStructureById(this.demande.libelle).subscribe(
      res=>{this.demande.libelle=res
      
 
      this.serviiice.getDOcumentById(this.demande.numero_document).subscribe(
        res=>{
                   
              this.demande.numero_document=res

              this.serviiice.getDOcumentById(this.demande.nombre_De_documents).subscribe(
                res=>{
                 this.demande.nombre_De_documents=res
                 this.serviiice.getDOcumentById(this.demande.date_De_creation_Du_Document).subscribe(
                  res=>{
                   this.demande.date_De_creation_Du_Document=res
                 
              this.serviiice.getDOcumentById(this.demande.codedocument).subscribe(
                res=>{
                 this.demande.codedocument=res
                  
                 this.serviice.getAgenceById(this.demande.libelleAgence).subscribe(
                  res=>{
                   this.demande.libelleAgence=res
          
   
    this._service.createDemande(this.demande).subscribe(
      data=>{ 
      
        console.log("reponse received");
        
        
},
       error =>{   
       console.log("exception occured");
        this.msg=error.error;
     
      }
      )
    
    },
    error=>{console.log(error);}
    )},
      error=>{console.log(error);})},
      error=>{console.log(error);})},
      error=>{console.log(error);})},
      error=>{console.log(error);})},


error=>{console.log(error);})

      

      
      this.dialogRef.close()
      this.router.navigate(['/dashboard/liste-demande-Consultation'])
      
    }
  async getStructures() {
    await this.service.getStructures().subscribe(
       res=>{
    
         this.Structures=res
         
       },
   
       error=>console.log(error)
     )
   }

   

   async getAgences() {
    await this.serviice.getAgences().subscribe(
      res=>{ 
        this.Agences=res,
        console.log(this.Agences)
      },
   
       error=>console.log(error)
   
      
    )
   
    
   }

   async getsuivi2eme() {
    await this.serviiice.getDocuments().subscribe(
      res=>{ 
        this.Suividoc2eme=res,
        console.log(this.Suividoc2eme)
      },
   
       error=>console.log(error)
   
      
    )
 
  //  
   }
   
    
      
      
   
  }





