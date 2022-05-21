import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';

import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { DemandeDeVersementComponent } from '../demande-de-versement/demande-de-versement.component';


@Component({
  selector: 'app-inventaire-document2emeage',
  templateUrl: './inventaire-document2emeage.component.html',
  styleUrls: ['./inventaire-document2emeage.component.css']
})
export class InventaireDocument2emeageComponent implements OnInit {
  Datedeversemnent2emeage:any;
  
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDocument[]=[];
 suividocument=new SuiviDocument()
  searchValue!:string;
 
  displayedColumns: string[] = ['id','chapitre_comptable','numero_document','nombre_De_pages','date_De_creation_Du_Document','date_d_entree_Du_Document','codedocument','numero_d_ordre','empl_physique','nombre_De_documents','Datedeversemnent2emeage','limite_de_conservation_1ere_age','action'];
  dataSource!: MatTableDataSource<any>;
id!:number
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data:any
 constructor( private route:ActivatedRoute, private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }


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
    this.Datedeversemnent2emeage=this.LocalDate;
    //this.dialog.open(AjoutDateVersement2emeAgeComponent, {
      //width:'50%',
     //} )
    }

    
    opendialog(){
      localStorage.setItem("suividocumentid",this.id.toString())
      this.dialog.open(DemandeDeVersementComponent, {
       width:'36%',
         
       });
    }
        
        
     
    }
  
     


