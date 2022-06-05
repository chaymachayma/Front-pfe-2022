import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import { FicheDeSortieComponent } from '../fiche-de-sortie/fiche-de-sortie.component';
import { ReceptionEtValidationComponent } from '../reception-et-validation/reception-et-validation.component';

@Component({
  selector: 'app-decharge-de-transfert',
  templateUrl: './decharge-de-transfert.component.html',
  styleUrls: ['./decharge-de-transfert.component.scss']
})
export class DechargeDeTransfertComponent implements OnInit {

  demande=new DemandeConsultation()
  
  searchValue!:string;
  displayedColumns: string[] = ['code_centre','num_dde','chapitre_comptable','code','date_dde','objet','date_De_creation_Du_Document','nombre_de_copie','TypeDocument','libelleAgence','numero_document','nombre_document','num_Ordre','date_retour','date_sortie','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  selected!:DemandeConsultation
  constructor(private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog,private route:ActivatedRoute) { }


  ngOnInit(): void {
  
  this.demande=this.data
  
  this._service.getDemandeById(this.route.snapshot.params['id']).subscribe(
    data=>{ console.log("response recieved");
    
             this.dataSource=new MatTableDataSource([data]) ;
         
             this.dataSource.sort=this.sort
             this.demande=data
            
    },
    error=>console.log("exception occured")
    
    )
  }
  openDialogg(){
    this.dialog.open(FicheDeSortieComponent, {
    width:'40%',
    height:'44%',
    data:[this.selected]
    });
    }
     
  Onchange(item:any){
  
    this.selected=item
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
