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

   Datedeversemnent2emeage:any;
   LocalDate:String=new Date().toLocaleString();
   doc:SuiviDoc2emeAge[]=[];
   searchValue!:string;
   displayedColumns: string[]=['libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','nombre_De_documents','nbrPhy','ecart','date_De_creation_Du_Document','action'];
   
   dataSource!: MatTableDataSource<any>;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
   id!:number 
   constructor(private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }
 
   ngOnInit(): void {
     this.service.getDocuments().subscribe(
       data=>{ console.log(data,"itemponse recieved");  
       

       data.forEach((item:any)=>{  
        let d=new Date(item.date_De_creation_Du_Document)
       
        let y= d.getFullYear()
        let g=item.limite_de_conservation_1ere_age
      
        let x=item.limite_de_conservation_1ere_age.substr(0,g.indexOf(" "))
       
        let q=parseInt(x)
       
        let r=y+q
        let date_alert=r.toString()
        
        d.setFullYear(r)
        let date_dejour= new Date()
        
        if(!(date_dejour<d)){
          this.doc.push(item)
        }       
       }
        )
       this.dataSource=new MatTableDataSource(this.doc) ;              
       },
       error=>console.log("exception occured")
       )
      
   }
   opendialog(item :any){
    
    this.dialog.open(AjouterReceptionDocComponent, {

      width:'36%',
      data:[item]
     });
  }

 opendialogg(){
this._router.navigate(['/dashboard/InscriptionDocRecus'])
 }
 
 }


 
