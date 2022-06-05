import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjoutInscriptionComponent } from '../ajout-inscription/ajout-inscription.component';
import { AjouterReceptionDocComponent } from '../ajouter-reception-doc/ajouter-reception-doc.component';
import { FicheDeRenseignement2emeAgeComponent } from '../fiche-de-renseignement2eme-age/fiche-de-renseignement2eme-age.component';

@Component({
  selector: 'app-inscription-doc-recus',
  templateUrl: './inscription-doc-recus.component.html',
  styleUrls: ['./inscription-doc-recus.component.scss']
})
export class InscriptionDocRecusComponent implements OnInit {

  suividocument=new SuiviDoc2emeAge();
  date_De_creation_Du_Document:any;
 
  Datedeversemnent2emeage:any;
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDoc2emeAge[]=[];
  searchValue!:string;
  displayedColumns: string[]=['chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','date_De_creation_Du_Document','date_De_entree_Du_Document','Datedeversemnent2emeage','limite_de_conservation_2eme_age','action'];
  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id!:number 
  constructor(private _service:SuiviDoc2emeAgeServiceService,  private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }
  ngOnInit(): void {
    this._service.getDocuments().subscribe(
      data=>{
       
        this.dataSource=new MatTableDataSource(data)
        
      }
    )
    
   
}
  opendialog(item :any){
  
   this.dialog.open(AjoutInscriptionComponent, {
     width:'36%',
     data:[item]
    });
 }



}
