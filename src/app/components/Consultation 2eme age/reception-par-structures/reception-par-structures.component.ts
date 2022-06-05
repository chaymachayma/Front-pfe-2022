import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reception-par-structures',
  templateUrl: './reception-par-structures.component.html',
  styleUrls: ['./reception-par-structures.component.scss']
})
export class ReceptionParStructuresComponent implements OnInit {

  
  demande=new DemandeConsultation()
  
  searchValue!:string;
  displayedColumns: string[] = ['code_centre','num_dde','chapitre_comptable','code','date_dde','objet','date_De_creation_Du_Document','nombre_de_copie','TypeDocument','libelle','numero_document','nombre_document','num_Ordre','date_retour','date_sortie'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: any;
  selected!:DemandeConsultation
  constructor(private route :ActivatedRoute,   private _service:DemandeConsultationService,private _router:Router,private dialog:MatDialog) { }


  ngOnInit(): void {
  
  this.demande=this.data
  this._service.getDemandeById(this.route.snapshot.params['id']).subscribe(

    data=>{ 
      
      let d=new Date(data.date_retour)
  
      let y= d.getFullYear()
  
    let r=y
      let date_alert=r.toString()
 
      d.setFullYear(r)
      let date_dejour= new Date()
      
      if(date_dejour>d){
          Swal.fire({
            icon: 'error',
            title: 'Attention...',
            text: 'Vous avez dépassez la date de retour puisque la date courante > date de retour !',
            })
          }
        
      
      console.log("response recieved");
             this.dataSource=new MatTableDataSource([data]) ;
             this.dataSource.paginator=this.paginator;
             this.dataSource.sort=this.sort
             this.demande=data
            
    },
    error=>console.log("exception occured")
    
    )
  }

  
  retour()
  {
  this._router.navigate(['/dashboard/receptionetvalidation'])
  }      
      






















  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
