import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { ValidationDemandeConsultationComponent } from '../validation-demande-consultation/validation-demande-consultation.component';
import { Location } from '@angular/common';
import { LettreTransfertComponent } from '../lettre-transfert/lettre-transfert.component';
@Component({
  selector: 'app-consulter-demande',
  templateUrl: './consulter-demande.component.html',
  styleUrls: ['./consulter-demande.component.scss']
})
export class ConsulterDemandeComponent implements OnInit {

  
  id!:number 
  dem=new DemandeConsultation();
 
  dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
  constructor(public dialogRef: MatDialogRef<ValidationDemandeConsultationComponent>,private dialog:MatDialog,private service:DemandeConsultationService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }
   

  ngOnInit(): void {
    this.dem= this.data.dema[0];
    this.service.getDemandes().subscribe(
     data=>{ console.log("response recieved");
     
              
     },
     error=>console.log("exception occured")
   )
  }
  openDialoggg() {  
    this.dialog.open(LettreTransfertComponent, {
      width:'56%',
      height:'55%'
      
      
    });
  }

 oui(){
   this._router.navigate(['/dashboard/decharge/'+this.dem.id])
 }
  return(){
    window.location.reload()
  }}
