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
      console.log(data,"response recieved");     
      this.dataSource=new MatTableDataSource(data) ; 
      this.doc=data;
      this.sortedData=this.doc;
      console.log("slice",this.doc.slice());                      
      },
      error=>console.log("exception occured")
      )
      console.log(this.doc,"doc");
      console.log("hello",this.sortedData);
      
   }
   

  opendialog(item :any){
    console.log(item,'hethi eli neb3ethou');
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

      default:
        return 0;
    }
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  this.sortedData=this.dataSource.data;
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
Onchange(item:any){
  console.log(item,"check")
  this.selected=item
  }
openDialogg(){
  this.dialog.open(FicheDeRenseignement2emeAgeComponent, {
  width:'42%',
  height:'45%',
  data:[this.selected]
  });
  }
}
function compare(a: number | string|Date, b: number | string|Date, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}





