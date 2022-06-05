import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { Structure } from 'src/app/models/structure';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { LieuArchive } from 'src/app/models/lieu-archive';

@Component({
  selector: 'app-update-structure',
  templateUrl: './update-structure.component.html',
  styleUrls: ['./update-structure.component.css']
})
export class UpdateStructureComponent implements OnInit {
  id !:any;
  structure:Structure= new Structure();
  lieux!:LieuArchive[];
  selectedId1!:number;
  selectedId2!:number;
  constructor(private _service:StructureService,private _router:Router,private route:ActivatedRoute
   , private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  

    this.getLieu();
    this.selectedId1=this.data.structure.lieu_archivage1ereAge.id ;
    this.selectedId2=this.data.structure.lieu_archivage2emeAge.id ;
   
}
enregStructure(){  
  
  this._service.getLieuById(this.selectedId1).subscribe(
    res=> {
      this.data.structure.lieu_archivage1ereAge=res;
      this._service.getLieuById(this.selectedId2).subscribe(
        res=>{
          this.data.structure.lieu_archivage2emeAge=res;
          
          this._service.updateStructure(this.data.structure.id,this.data.structure).subscribe(

            data=>{
                console.log(data)
              },
            error=>console.error());
        }
        
      )
    }
  )
  }
          
  getLieu(){
    this._service.getLieu().subscribe(
    res=>this.lieux=res
    )
    }

  opensweetalert(){
    Swal.fire({
      title:'Êtes-vous sûre?',
  
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Oui,modifiez-le!',
      cancelButtonText:'Non,gardez-le'
        
    }).then((result) => {
      console.log(result)
      if(result.isConfirmed){
        this.enregStructure();
      }
      if (result.value) {
        Swal.fire(
          'modifié!',
          'Votre structure a été modifié',
          'success'
        )
      window.location.reload()
      }else if (result.dismiss==Swal.DismissReason.cancel){
      Swal.fire(
        'Annulé',
        'Votre structure n`a pas été modifié',
        'error'
      )
      }
    })
 

  }
  retour(){
    window.location.reload()
  }
  
}