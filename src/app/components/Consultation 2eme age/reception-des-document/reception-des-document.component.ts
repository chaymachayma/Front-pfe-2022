import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';

@Component({
  selector: 'app-reception-des-document',
  templateUrl: './reception-des-document.component.html',
  styleUrls: ['./reception-des-document.component.scss']
})
export class ReceptionDesDocumentComponent implements OnInit {


  displayedColumns: string[] = ['code_centre','num_dde','date_dde','chapitre_comptable','date_De_creation_Du_Document','objet','nombre_de_copie','TypeDocument','numero_document','nombre_document','date_retour','date_sortie','num_Ordre'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 demande=new DemandeConsultation();
  data: any;
  constructor(private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog,private route:ActivatedRoute) {    }

  ngOnInit(): void {
  
    this.demande=this.data
    this._service.getDemandeById(this.route.snapshot.params['id']).subscribe(
      data=>{ console.log("response recieved");
               this.dataSource=new MatTableDataSource([data]) ;
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort
               this.demande=data
              
      },
      error=>console.log("exception occured")
      
      )

//
//

      
  }
  retour()
  {
  this._router.navigate(['/dashboard/receptionetvalidation'])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
