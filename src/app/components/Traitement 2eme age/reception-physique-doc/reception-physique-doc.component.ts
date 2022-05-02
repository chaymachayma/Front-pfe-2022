import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjouterReceptionDocComponent } from '../ajouter-reception-doc/ajouter-reception-doc.component';
import { data } from 'jquery';
import { InscriptionDocRecusComponent } from '../inscription-doc-recus/inscription-doc-recus.component';


@Component({
  selector: 'app-reception-physique-doc',
  templateUrl: './reception-physique-doc.component.html',
  styleUrls: ['./reception-physique-doc.component.scss']
})
export class ReceptionPhysiqueDocComponent implements OnInit {

  suividocument=new SuiviDoc2emeAge();
 
   Datedeversemnent2emeage:any;
   LocalDate:String=new Date().toLocaleString();
   doc:SuiviDoc2emeAge[]=[];
   searchValue!:string;
   displayedColumns: string[]=[/*'code_centre',*/'libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','nombre_De_documents','nbrPhy','ecart','date_De_creation_Du_Document','Datedeversemnent2emeage','action'];
   
   dataSource!: MatTableDataSource<any>;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
   id!:number 
   constructor(private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }
 
   ngOnInit(): void {
     //console.log(this.data,"item")
     //this.suividocument=this.data
     this.service.getDocuments().subscribe(
       data=>{ console.log(data,"response recieved");      
       data.forEach((item:any)=>{      
               this.doc.push(item)
       }
        )
       this.dataSource=new MatTableDataSource(this.doc) ;              
       },
       error=>console.log("exception occured")
       )
       console.log(this.doc,"doc");
   }
   opendialog(item :any){
     console.log(item,'hethi eli neb3ethou');
    this.dialog.open(AjouterReceptionDocComponent, {
      width:'36%',
      data:[item]
     });
  }


  opendialogg(/*item :any*/){
    //console.log(item,'inscription');
   this.dialog.open(InscriptionDocRecusComponent, {
     width:'45%',
     //data:[item]
    });
 }
  /* 
    getdate(){
    this.LocalDate=new Date().toLocaleString();
    this.dateDestruction=this.LocalDate;
  
    }*/
  /*  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  */
 }
 
 function AjouteDateDestructionComponent(AjouteDateDestructionComponent: any, arg1: { width: string; }) {
   throw new Error('Function not implemented.');
 }
 
 