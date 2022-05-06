import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjouterReceptionDocComponent } from '../ajouter-reception-doc/ajouter-reception-doc.component';

import { InscriptionDocRecusComponent } from '../inscription-doc-recus/inscription-doc-recus.component';


@Component({
  selector: 'app-reception-physique-doc',
  templateUrl: './reception-physique-doc.component.html',
  styleUrls: ['./reception-physique-doc.component.scss']
})
export class ReceptionPhysiqueDocComponent implements OnInit {

  suividocument=new SuiviDoc2emeAge();
  date_De_creation_Du_Document:any;
  //LocalDate:String=new Date().toLocaleString();
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
     console.log("hne 7echetna biha")
    this.dialog.open(AjouterReceptionDocComponent, {

      width:'36%',
      data:[item]
     });
  }

 opendialogg(){
  this.dialog.open(InscriptionDocRecusComponent, {
     width:'100%',
     height:'90%'
    });
 }
 
 }
 

 
