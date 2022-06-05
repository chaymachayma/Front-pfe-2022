
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Agence } from 'src/app/models/agence';
import { AgenceService } from 'src/app/service/agence.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { LieuArchive } from 'src/app/models/lieu-archive';
import { DirectionService } from 'src/app/service/direction.service';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrls: ['./update-agence.component.css']
})
export class UpdateAgenceComponent implements OnInit {

  id:any;
   agence :any;
   lieux!:LieuArchive[];
   selectedId1!:number
   selectedId2!:number
  constructor(  private _service:DirectionService,   private service:AgenceService,private router:Router,private route:ActivatedRoute, 
    private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
   
    this.getLieu();
    this.selectedId1=this.data.agence.lieu_d_archivage_1_ere_age.id ;
    this.selectedId2=this.data.agence.lieu_d_archivage_2_eme_age.id ;
    
}
onModif(){  
 
  this.service.getLieuById(this.selectedId1).subscribe(
    res=> {
      this.data.agence.lieu_d_archivage_1_ere_age=res;
      this._service.getLieuById(this.selectedId2).subscribe(
        res=>{
          this.data.agence.lieu_d_archivage_2_eme_age=res;
          
          this.service.updateAgence(this.data.agence.id,this.data.agence).subscribe(

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
        this.onModif();
      }
      if (result.value) {
        Swal.fire(
          'Modifié!',
          'Votre agence a été modifié',
          'success'
        )
      window.location.reload()
      }else if (result.dismiss==Swal.DismissReason.cancel){
      Swal.fire(
        'Annulé',
        'Votre agence n`a pas été modifié',
        'error'
      )

      }
    })
 

  }
  retour(){
    window.location.reload()
  }
}
