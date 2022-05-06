import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeDeVersement } from 'src/app/models/demande-de-versement';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { Location } from '@angular/common';

import { ListeDemandeVersementComponent } from '../liste-demande-versement/liste-demande-versement.component';
import { PlanEnlevementComponent } from '../plan-enlevement/plan-enlevement.component';
import { InscriptionSortieDocComponent } from '../inscription-sortie-doc/inscription-sortie-doc.component';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-traiter-demande',
  templateUrl: './traiter-demande.component.html',
  styleUrls: ['./traiter-demande.component.css']
})
export class TraiterDemandeComponent implements OnInit {

  demandes:any;
  id!:number 
  demande=new DemandeDeVersement();
  suividocument=new SuiviDocument
  dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
  constructor(public dialogRef: MatDialogRef<TraiterDemandeComponent>,private dialog:MatDialog,private service:DemandeDeVersementService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void  {
    console.log(this.data,"hethi hiya ahaya jet ")
    this.suividocument=this.data[1]
   this.demande= this.data[0];
   this.service.getDemandes().subscribe(
    data=>{ console.log("response recieved");
    
             
    },
    error=>console.log("exception occured")
  )
   
  
   
 }

  deleteDemande(id:number){
    console.log(id);    
    this.service.deleteDemande(id).subscribe(
      data=>{
        console.log(data);
      },
      error=>console.error(error)
      );  
    

     this.onNoClickkk()
 

     
 }
 opendialog(item:any){
  this.dialog.open(PlanEnlevementComponent, {
    width:'35%',
    data:[item,this.suividocument]
   });
}
opendialogg(){
  this.dialog.open(InscriptionSortieDocComponent, {
    width:'60%',
    
   });
}
onNoClickkk():void
{
this.dialogRef.close();
this.opendialogg()
}   
 onNoClickk(): void {
      this.dialogRef.close();
      this.opendialog(1)
      
    }
 
 return(){
  this.dialog.open(ListeDemandeVersementComponent, {
    width:'100%',
    height:'80%'
   });
 }
}

