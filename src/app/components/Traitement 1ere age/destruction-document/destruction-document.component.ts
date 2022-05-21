import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';


import { SuiviDocumentService } from 'src/app/service/suivi-document.service';


@Component({
  selector: 'app-destruction-document',
  templateUrl: './destruction-document.component.html',
  styleUrls: ['./destruction-document.component.css']
})
export class DestructionDocumentComponent implements OnInit {
 
  doc:SuiviDocument[]=[];
 suividocument=new SuiviDocument()
  searchValue!:string;
  Date1: Date=new Date();
  LocalDate :String=new Date().toLocaleString();

  displayedColumns: string[] = ['codedirection','libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','nombre_De_documents','date_De_creation_Du_Document','dateDestruction','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dateDestruction: any;
  id!:number
 constructor(private route:ActivatedRoute,private service:SuiviDocumentService,private _router:Router ) { }

 ngOnInit(): void {
  this.suividocument=new SuiviDocument()
  this.id=this.route.snapshot.params['id']
  console.log(this.id,"hetha id")
  this.service.getDOcumentById(this.id).subscribe(
    data=>{console.log(data,"gg")
    this.suividocument=data;
    this.dataSource=new MatTableDataSource([data]);
    console.log(this.dataSource,"datasource")
          },
    error=>console.log(error));
   
   }
  
   getdate(){
   this.LocalDate=new Date().toLocaleString();
   this.dateDestruction=this.LocalDate;
 
   }

 retour(){
   this._router.navigate(['/dashboard/triDoc1ereage'])
 }
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
}
 
