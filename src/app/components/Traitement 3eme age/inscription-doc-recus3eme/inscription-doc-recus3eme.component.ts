import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDoc3emeAge } from 'src/app/models/suivi-doc-3eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';
import { InvitationMembresComponent } from '../invitation-membres/invitation-membres.component';


@Component({
  selector: 'app-inscription-doc-recus3eme',
  templateUrl: './inscription-doc-recus3eme.component.html',
  styleUrls: ['./inscription-doc-recus3eme.component.scss']
})
export class InscriptionDocRecus3emeComponent implements OnInit {

 
  suividocument=new SuiviDoc3emeAge();
  date_De_creation_Du_Document:any;
  
  Datedeversemnent2emeage:any;
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDoc3emeAge[]=[];
  searchValue!:string;
  displayedColumns: string[]=['codedirection','libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','date_De_creation_Du_Document','limite_de_conservation_3eme_age','action'];
  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id!:number 
  constructor(private _service:SuiviDocument3emeAgeService,private service:SuiviDoc2emeAgeServiceService,private _router:Router,private dialog:MatDialog) { }
  ngOnInit(): void {
    this._service.getDocuments().subscribe(
      data=>{
    
        this.dataSource=new MatTableDataSource(data)
        
      }
    )
}     
   openDialooogg(){
    
    this.dialog.open(InvitationMembresComponent, {
     width:'36%',      
     });
  }




 opendialogg(){
this._router.navigate(['/dashboard/InscriptionDocRecus'])
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 
}
