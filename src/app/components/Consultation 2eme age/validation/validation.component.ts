import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
 
  dem:DemandeConsultation[]=[];
 demande=new DemandeConsultation()
 
 
 displayedColumns: string[] = ['code_centre','num_dde','chapitre_comptable','code','date_dde','objet','date_De_creation_Du_Document','nombre_de_copie','num_Ordre','TypeDocument','libelle','numero_document','Validation'];
  dataSource!: MatTableDataSource<any>;
id!:number
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data:any
 constructor( private route:ActivatedRoute, private service:DemandeConsultationService,private _router:Router,private dialog:MatDialog) { }


  ngOnInit(): void {
    this.demande=new DemandeConsultation()
    this.id=this.route.snapshot.params['id']
    
    this.service.getDemandeById(this.id).subscribe(
      data=>{ 
      this.demande=data;
      this.dataSource=new MatTableDataSource([data]);
      
            },
      error=>console.log(error));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  Execution(){
    this._router.navigate(['/dashboard/execution'])
  }

}
