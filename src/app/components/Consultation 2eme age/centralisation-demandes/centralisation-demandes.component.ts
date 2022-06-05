import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeDeVersement } from 'src/app/models/demande-de-versement';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';

@Component({
  selector: 'app-centralisation-demandes',
  templateUrl: './centralisation-demandes.component.html',
  styleUrls: ['./centralisation-demandes.component.scss']
})
export class CentralisationDemandesComponent implements OnInit {

   
  
  searchValue!:string;
  displayedColumns: string[] = ['code_centre','num_dde','chapitre_comptable','code','date_dde','objet','date_De_creation_Du_Document','nombre_de_copie','num_Ordre','TypeDocument','libelle','numero_document','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  demande:DemandeConsultation[]=[];
  constructor(private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  
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

  
valider(id:number){
  this._router.navigateByUrl(`/dashboard/validation/${id}`)
}
}
