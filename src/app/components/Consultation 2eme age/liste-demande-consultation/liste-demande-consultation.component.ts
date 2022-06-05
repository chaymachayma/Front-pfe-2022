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
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { TraiterDemandeComponent } from '../../Traitement 1ere age/traiter-demande/traiter-demande.component';
import { ValidationDemandeConsultationComponent } from '../validation-demande-consultation/validation-demande-consultation.component';

@Component({
  selector: 'app-liste-demande-consultation',
  templateUrl: './liste-demande-consultation.component.html',
  styleUrls: ['./liste-demande-consultation.component.scss']
})
export class ListeDemandeConsultationComponent implements OnInit {

  demande=new DemandeConsultation()
  
  searchValue!:string;
  displayedColumns: string[] = ['num_dde','date_dde','objet','nombre_de_copie','num_Ordre','TypeDocument','libelle','numero_document',/*'Date_De_creation_Du_Document',*/'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  demandee:DemandeConsultation[]=[];
  constructor(private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog) { }

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

//
//

      
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  opendialog(item :any){
    this.dialog.open(ValidationDemandeConsultationComponent, {
      width:'37%',
      
      data:[item,this.demande]
     });
  }
}
