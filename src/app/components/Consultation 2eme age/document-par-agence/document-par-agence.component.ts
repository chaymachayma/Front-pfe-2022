import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { ReceptionEtValidationComponent } from '../reception-et-validation/reception-et-validation.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-document-par-agence',
  templateUrl: './document-par-agence.component.html',
  styleUrls: ['./document-par-agence.component.scss']
})
export class DocumentParAgenceComponent implements OnInit {

  
  id!:number 
  dem=new DemandeConsultation();
 
  dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
  constructor(public dialogRef: MatDialogRef<ReceptionEtValidationComponent>,private dialog:MatDialog,private service:DemandeConsultationService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }
   

  ngOnInit(): void {
    this.dem= this.data.dema[0];
    this.service.getDemandes().subscribe(
     data=>{ console.log("response recieved");
     
              
     },
     error=>console.log("exception occured")
   )
  }
  oui(){
    this._router.navigate(["/dashboard/reception/"+this.dem.id])
  }
  non(){
    
    this._router.navigate(["/dashboard/receptionparstructure/"+this.dem.id])
  }
return(){
  window.location.reload()
}
}
