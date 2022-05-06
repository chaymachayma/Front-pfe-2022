import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';


@Component({
  selector: 'app-bordereaux',
  templateUrl: './bordereaux.component.html',
  styleUrls: ['./bordereaux.component.scss']
})
export class BordereauxComponent implements OnInit {
  date_De_creation_Du_Document:any;
  //LocalDate:String=new Date().toLocaleString();
  Datedeversemnent2emeage:any;
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDocument[]=[];
 suividocument=new SuiviDocument()
  searchValue!:string;
 
  displayedColumns: string[]=['id','chapitre_comptable','numero_document','date_De_creation_Du_Document','codedocument','numero_d_ordre','nombre_De_documents','Datedeversemnent2emeage'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id!:number 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:SuiviDocumentService,private _router:Router) { }

  ngOnInit(): void {
   const id =localStorage.getItem("suividocumentid")
  
      this.service.getDOcumentById(id).subscribe(
        data=>{ console.log("response recieved");
        this.dataSource=new MatTableDataSource([data]) ;
        console.log(id)
        console.log(data)
                 
        },
        error=>console.log("exception occured")
      )
                 
               
   
  }
//  this.dataSource=this.data
}
