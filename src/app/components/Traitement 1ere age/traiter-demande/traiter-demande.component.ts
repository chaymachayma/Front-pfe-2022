import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeDeVersement } from 'src/app/models/demande-de-versement';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { Location } from '@angular/common';
import { PlanEnlevementComponent } from '../plan-enlevement/plan-enlevement.component';
import { ListeDemandeVersementComponent } from '../liste-demande-versement/liste-demande-versement.component';

@Component({
  selector: 'app-traiter-demande',
  templateUrl: './traiter-demande.component.html',
  styleUrls: ['./traiter-demande.component.css']
})
export class TraiterDemandeComponent implements OnInit {

  demandes:any;
  id!:number 
  demande=new DemandeDeVersement();
  constructor(public dialogRef: MatDialogRef<TraiterDemandeComponent>,private dialog:MatDialog,private service:DemandeDeVersementService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void  {
   this.demande = this.data[0];
   console.log(this.demande,"heii");
 }

  deleteDemande(id:number){
    console.log(id);    
    this.service.deleteDemande(id).subscribe(
      data=>{
        console.log(data);
      },
      error=>console.error(error)
      );  
    
      window.location.reload()
     
 } 

 opendialog(){
  this.dialog.open(PlanEnlevementComponent, {
    width:'35%'
   });
}
    
    onNoClickk(): void {
      this.dialogRef.close();
      this.opendialog()
      
    }
 
 return(){
  this.dialog.open(ListeDemandeVersementComponent, {
    width:'60%',
    height:'70%'
   });
 }
}

