import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeDeVersement } from 'src/app/models/demande-de-versement';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { ConsulterDemandeComponent } from '../consulter-demande/consulter-demande.component';

@Component({
  selector: 'app-execution-demandes-consultations',
  templateUrl: './execution-demandes-consultations.component.html',
  styleUrls: ['./execution-demandes-consultations.component.scss']
})
export class ExecutionDemandesConsultationsComponent implements OnInit {
   
 
  displayedColumns: string[] = ['code_centre','num_dde','chapitre_comptable','code','date_dde','objet','date_De_creation_Du_Document','nombre_de_copie','TypeDocument','libelle','numero_document','nombre_document','num_Ordre','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 dema=new DemandeConsultation();
  demande:DemandeConsultation[]=[];
  sortedData:DemandeConsultation[];
  constructor(private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog) {   this.sortedData=this.demande.slice();}

  ngOnInit(): void {
  
    this._service.getDemandes().subscribe(
      data=>{ console.log("response recieved");
               this.dataSource=new MatTableDataSource(data) ;
               
this.dataSource.paginator=this.paginator;
               this.demande=data;
               this.sortedData=this.demande;
          
               this.sortedData=data.slice();
               
              
      },
      error=>console.log("exception occured")
      
      )

 
      
  }


  openDialoggg(item : any) {  
    this.dialog.open(ConsulterDemandeComponent, {
      width:'38%',
      data : {
        dema: [item]
      }
    });
  }

  sortData(sort: Sort) {
    const data = this.demande.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
  
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'num_dde':
          return compare(a.num_dde, b.num_dde, isAsc);
          case 'date_dde':
            return compare(a.date_dde, b.date_dde, isAsc);
            case 'objet':
              return compare(a.objet, b.objet, isAsc);   
              case 'num_Ordre':
              return compare(a.num_Ordre, b.num_Ordre, isAsc);     
          case 'type_document':
          return compare(a.type_document, b.type_document, isAsc);
          case 'nombre_de_copie':
            return compare(a.nombre_de_copie, b.nombre_de_copie, isAsc);
            
  
        default:
          return 0;
      }
    });
  }


 

  
}

function compare(a: number | string|Date, b: number | string|Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  