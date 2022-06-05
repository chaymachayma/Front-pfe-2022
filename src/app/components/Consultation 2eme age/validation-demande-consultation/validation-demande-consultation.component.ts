import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
 
import { SuiviDocument } from 'src/app/models/suivi-document';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
 
import { Location } from '@angular/common';
@Component({
  selector: 'app-validation-demande-consultation',
  templateUrl: './validation-demande-consultation.component.html',
  styleUrls: ['./validation-demande-consultation.component.scss']
})
export class ValidationDemandeConsultationComponent implements OnInit {

 
  id!:number 
  demande=new DemandeConsultation();
 
  dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
  constructor(public dialogRef: MatDialogRef<ValidationDemandeConsultationComponent>,private dialog:MatDialog,private service:DemandeConsultationService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void  {
 
   this.demande= this.data[0];
   this.service.getDemandes().subscribe(
    data=>{ console.log("response recieved");
    
             
    },
    error=>console.log("exception occured")
  )
 
 }
 centralisation(){
   this.dialogRef.close()
   this._router.navigate(['/dashboard/centralisation'])
 }

 
 non(){
  this._router.navigate(['/dashboard/validation/'+this.demande.id])
}
  
  
 
 return(){
  window.location.reload()
}}