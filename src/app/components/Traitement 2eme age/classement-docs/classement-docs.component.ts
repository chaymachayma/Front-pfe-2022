import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjouterReceptionDocComponent } from '../ajouter-reception-doc/ajouter-reception-doc.component';
import { AjouterEmplacementComponent } from '../ajouter-emplacement/ajouter-emplacement.component';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { FicheDeRenseignement2emeAgeComponent } from '../fiche-de-renseignement2eme-age/fiche-de-renseignement2eme-age.component';
import { EnvoyerDemandeConsultationComponent } from '../../Consultation 2eme age/envoyer-demande-consultation/envoyer-demande-consultation.component';
import { Nomenclature } from 'src/app/models/nomenclature';


@Component({
  selector: 'app-classement-docs',
  templateUrl: './classement-docs.component.html',
  styleUrls: ['./classement-docs.component.scss']
})
export class ClassementDocsComponent implements OnInit {
 
  selected!:SuiviDoc2emeAge
  Datedeversemnent2emeage:any;
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDoc2emeAge[]=[];
  searchValue!:string;
  displayedColumns: string[]=['codeDirection','code_centre','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','nombre_De_documents','date_De_creation_Du_Document','EmplSalleConservation','EmplCote','action'];
  sortedData:SuiviDoc2emeAge[];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id!:number 
  constructor(private service:SuiviDoc2emeAgeServiceService,private _router:Router,private dialog:MatDialog) {
    this.sortedData=this.doc.slice();
   }
  ngOnInit(): void {
    this.service.getDocuments().subscribe(
      data=>{ 
          
      this.dataSource=new MatTableDataSource(data) ; 
      this.doc=data;
      this.sortedData=this.doc;
                         
      },
      error=>console.log("exception occured")
      )
     
      
   }
   

  opendialog(item :any){
   
   this.dialog.open(AjouterEmplacementComponent, {
     width:'36%',
     data:[item]
    });
 }


sortData(sort: Sort) {
  const data = this.doc.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'chapitre_comptable':
        return compare(a.chapitre_comptable, b.chapitre_comptable, isAsc);
        case 'codedocument':
          return compare(a.codedocument, b.codedocument, isAsc);
          case 'numero_document':
            return compare(a.numero_document, b.numero_document, isAsc);   
            case 'numero_d_ordre':
            return compare(a.numero_d_ordre, b.numero_d_ordre, isAsc);     
        case 'nombre_De_documents':
        return compare(a.nombre_De_documents, b.nombre_De_documents, isAsc);
        case 'date_De_creation_Du_Document':
          return compare(a.date_De_creation_Du_Document, b.date_De_creation_Du_Document, isAsc);
          case 'EmplSalleConservation':
            return compare(a.emplSalleConservation, b.emplSalleConservation, isAsc);
        case 'EmplCote':
          return compare(a.emplCote, b.emplCote, isAsc);
        case 'designation_Nomenclature':
          return compare(a.designation_Nomenclature ,b.designation_Nomenclature ,isAsc)
      default:
        return 0;
    }
    
  });
}

Onchange(item:any){
 
  this.selected=item
  }
  consulter(){
    this.dialog.open(EnvoyerDemandeConsultationComponent, {
    width:'40%',
     
     
    });
    }

openDialogg(){
  this.dialog.open(FicheDeRenseignement2emeAgeComponent, {
  width:'42%',
  height:'45%',
  data:[this.selected]
  });
  }
}


  
function compare(a: number | string|Date | Nomenclature, b: number | string|Date |Nomenclature, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}






