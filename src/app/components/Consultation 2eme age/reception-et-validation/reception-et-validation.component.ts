import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { ValidationDemandeConsultationComponent } from '../validation-demande-consultation/validation-demande-consultation.component';
import { Location} from '@angular/common';
import { DocumentParAgenceComponent } from '../document-par-agence/document-par-agence.component';
@Component({
  selector: 'app-reception-et-validation',
  templateUrl: './reception-et-validation.component.html',
  styleUrls: ['./reception-et-validation.component.scss']
})
export class ReceptionEtValidationComponent implements OnInit {

  demande=new DemandeConsultation()
  
  searchValue!:string;
  displayedColumns: string[] = ['code_centre','num_dde','chapitre_comptable','code','date_dde','objet','date_De_creation_Du_Document','nombre_de_copie','TypeDocument','libelleAgence','numero_document','nombre_document','num_Ordre','date_retour','date_sortie','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  selected!:DemandeConsultation
  constructor(private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.demande=this.data
    this._service.getDemandes().subscribe(
      data=>{ console.log("response recieved");
               this.dataSource=new MatTableDataSource(data) ;
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort
               this.demande=data
              
      },
      error=>console.log("exception occured")
      
      )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialoggg(item : any) {  
    this.dialog.open(DocumentParAgenceComponent, {
      width:'38%',
      data : {
        dema: [item]
      }
    });
  }

}