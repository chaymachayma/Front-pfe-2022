import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDoc3emeAge } from 'src/app/models/suivi-doc-3eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';
import { InvitationMembresComponent } from '../invitation-membres/invitation-membres.component';
import { LettreApprobationComponent } from '../lettre-approbation/lettre-approbation.component';

@Component({
  selector: 'app-approbation-globale-ou-partielle',
  templateUrl: './approbation-globale-ou-partielle.component.html',
  styleUrls: ['./approbation-globale-ou-partielle.component.scss']
})
export class ApprobationGlobaleOuPartielleComponent implements OnInit {
  suividocument=new SuiviDoc3emeAge();
  date_De_creation_Du_Document:any;
  //LocalDate:String=new Date().toLocaleString();
  Datedeversemnent2emeage:any;
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDoc3emeAge[]=[];
  searchValue!:string;
  displayedColumns: string[]=['code_centre','codedirection','libelleDirection','chapitre_comptable','codedocument','designation_Nomenclature','numero_document','numero_d_ordre','date_De_creation_Du_Document','limite_de_conservation_3eme_age','action'];
  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id!:number 
  constructor(private _service:SuiviDocument3emeAgeService,private service:SuiviDoc2emeAgeServiceService,private _router:Router,private dialog:MatDialog) { }
  ngOnInit(): void {
    this._service.getDocuments().subscribe(
      data=>{
        console.log(data,"hethi 2eme age")
        this.dataSource=new MatTableDataSource(data)
        
      }
    )
}     
   
  openDialoogg(id:number) { 
    this._router.navigate([`/dashboard/DocumentsDetruits/${id}`])
  }


  openDialooogg(id:number){
    this._router.navigateByUrl(`/dashboard/DocumentsHistriques/${id}`)
 
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 





}
