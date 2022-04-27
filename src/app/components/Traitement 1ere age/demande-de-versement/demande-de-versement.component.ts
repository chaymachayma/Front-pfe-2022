import { Component, Inject, OnInit } from '@angular/core';
import { DemandeDeVersement } from 'src/app/models/demande-de-versement';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { MatDialog, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import { TraiterDemandeComponent } from '../traiter-demande/traiter-demande.component';
import { ListeDemandeVersementComponent } from '../liste-demande-versement/liste-demande-versement.component';


@Component({
  selector: 'app-demande-de-versement',
  templateUrl: './demande-de-versement.component.html',
  styleUrls: ['./demande-de-versement.component.css']
})
export class DemandeDeVersementComponent implements OnInit {
  Expediteurs!:any[];
  Lieux!:any[];
  designation_Nomenclatures!:any[];
  demande=new DemandeDeVersement();
  msg='';
  constructor(public dialogRef: MatDialogRef<DemandeDeVersementComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private _service:DemandeDeVersementService,private service:DirectionService,private serviice:NomenclatureService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getDirections()
    console.log(this.Expediteurs)
    this.getNomenclatures()
    this.getLieux()
    console.log(this.data , 'init data')
  }


  public  Envoyer(){ 

    this.service.getDirectionById(this.demande.expediteur).subscribe(
      res=>{this.demande.expediteur=res
      console.log(this.demande)
      //this.service.getLieuById(this.demande.Destinataire).subscribe(
        //res=>{this.demande.Destinataire=res
        //console.log(this.demande)
//
this.service.getLieuById(this.demande.destinataire).subscribe(
  res=>{this.demande.destinataire=res
  

        //

      this.serviice.getNomenclatureById(this.demande.designation_nomenclature).subscribe(
        res=>{
          this.demande.designation_nomenclature=res
    
          
   
    this._service.createDemande(this.demande).subscribe(
      data=>{ 
        console.log("amal",data) 
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
      error=>{console.log(error);},
      )},
      error=>{console.log(error);
      

      })
    }
  async getDirections() {
    await this.service.getDirections().subscribe(
       res=>{
         console.log(res,'hh')
         this.Expediteurs=res,
         console.log(this.Expediteurs,'jj')
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

   async getLieux() {
    await this.service.getLieu().subscribe(
      res=>{ 
        this.Lieux=res,
        console.log(this.Lieux,'jj')
      },
   
       error=>console.log(error)
   
      
    )
    
   }
   
   opendialog(){
    this.dialog.open(ListeDemandeVersementComponent, {
      width:'60%',
      height:'70%'
     });
  }
      
      onNoClickk(): void {
        this.dialogRef.close();
        this.opendialog()
        this.Envoyer()
      
      }
   
  }


