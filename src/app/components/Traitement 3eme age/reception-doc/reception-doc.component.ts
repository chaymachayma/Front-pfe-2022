import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjouterReceptionDoc3emeComponent } from '../ajouter-reception-doc3eme/ajouter-reception-doc3eme.component';
import { SuiviDoc3emeAge } from 'src/app/models/suivi-doc-3eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';

@Component({
  selector: 'app-reception-doc',
  templateUrl: './reception-doc.component.html',
  styleUrls: ['./reception-doc.component.scss']
})
export class ReceptionDocComponent implements OnInit {
  suividocument=new SuiviDoc3emeAge();
  date_De_creation_Du_Document:any;

   Datedeversemnent3emeage:any;
   LocalDate:String=new Date().toLocaleString();
   doc:SuiviDoc2emeAge[]=[];
   searchValue!:string;
   displayedColumns: string[]=['codedirection','libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','date_De_creation_Du_Document','action'];
   
   dataSource!: MatTableDataSource<any>;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
   id!:number 
   constructor(private service:SuiviDoc2emeAgeServiceService,private _router:Router,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.service.getDocuments().subscribe(
      data=>{ console.log(data,"response recieved"); 
      
      
      data.forEach((item:any)=>{  
        let d=new Date(item.date_de_versement_2eme_age)
         
        let y= d.getFullYear()
        let g=item.limite_de_conservation_2eme_age
       
        let x=item.limite_de_conservation_2eme_age.substr(0,g.indexOf(" "))
       
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
       console.log(this.doc,"doc");
   }

  opendialog(item :any){
  
   this.dialog.open(AjouterReceptionDoc3emeComponent, {

     width:'36%',
     data:[item]
    });
 }

opendialogg(){
this._router.navigate(['/dashboard/inscription3eme'])
}

}
