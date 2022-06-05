import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDoc3emeAge } from 'src/app/models/suivi-doc-3eme-age';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';

@Component({
  selector: 'app-documents-historiques',
  templateUrl: './documents-historiques.component.html',
  styleUrls: ['./documents-historiques.component.scss']
})
export class DocumentsHistoriquesComponent implements OnInit {
 
  doc:SuiviDoc3emeAge[]=[];
 suividocument=new SuiviDoc3emeAge()
   
 
 displayedColumns: string[]=['code_centre','codedirection','libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','date_De_creation_Du_Document','limite_de_conservation_3eme_age'];
 dataSource!: MatTableDataSource<any>;
  id!:number
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data:any
 constructor( private route:ActivatedRoute, private service:SuiviDocument3emeAgeService,private _router:Router,private dialog:MatDialog) { }

 ngOnInit(): void {
  this.suividocument=new SuiviDoc3emeAge()
 this.id=this.route.snapshot.params['id']

 this.service.getDOcumentById(this.id).subscribe(
   data=>{
   this.suividocument=data;
   this.dataSource=new MatTableDataSource([data]);
   
         },
   error=>console.log(error));
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

}
retour()
{
this._router.navigate(['/dashboard/Approbationglobaleoupartielle'])
}
}