import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';


import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjoutDateDestructionComponent } from '../ajout-date-destruction/ajout-date-destruction.component';


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
 constructor(private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) { }

 ngOnInit(): void {
  console.log(this.data)
  this.dataSource=this.data
   }
  
   getdate(){
   this.LocalDate=new Date().toLocaleString();
   this.dateDestruction=this.LocalDate;
 
   }

/* openDialog() {
   this.dialog.open(AjoutDateDestructionComponent, {
    width:'35%'
   });
 }*/

 
 
/*
 openDialogg(item : any) { 

   this.dialog.open(DeleteStructureComponent, {
     width:'41%',
     data : {
       structure : item
     }
   });   
 }

 
 openDialoggg(item : any) {  
   this.dialog.open(ConsulterStructureComponent, {
     width:'41%',
     data : {
       structure : item
     }
   });
 }

   openDialogggg(item : any) {  
     this.dialog.open(UpdateStructureComponent, {
       width:'45%',
       data : {
         structure : item
       }
     });

   }*/
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
}

function AjouteDateDestructionComponent(AjouteDateDestructionComponent: any, arg1: { width: string; }) {
  throw new Error('Function not implemented.');
}
