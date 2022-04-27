import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog ,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { StructureService } from 'src/app/service/structure.service';
import { TraiterDemandeComponent } from '../traiter-demande/traiter-demande.component';




@Component({
  selector: 'app-liste-demande-versement',
  templateUrl: './liste-demande-versement.component.html',
  styleUrls: ['./liste-demande-versement.component.css']
})
export class ListeDemandeVersementComponent implements OnInit {
  
  searchValue!:string;
  displayedColumns: string[] = ['date_dde','objet','nbrCarton','libelleDirection','designation_Nomenclature','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialogRef: MatDialogRef<ListeDemandeVersementComponent>,private _service:DemandeDeVersementService,private _router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this._service.getDemandes().subscribe(
      data=>{ console.log(data,"response recieved");
               this.dataSource=new MatTableDataSource(data) ;
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort
      },
      error=>console.log("exception occured")
      
      )
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  opendialog(item :any){
    this.dialog.open(TraiterDemandeComponent, {
      width:'45%',
      
      data:[item]
     });
  }
      
      onNoClickk(item :any): void {
        this.dialogRef.close();
        this.opendialog(item)
      }
}
