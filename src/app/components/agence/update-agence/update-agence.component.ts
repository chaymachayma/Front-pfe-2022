
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
  constructor(  private _service:DirectionService,   private service:AgenceService,private router:Router,private route:ActivatedRoute, 
    private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
   
    this.getLieu();
    this.selectedId1=this.data.agence.lieu_d_archivage_1_ere_age.id ;
    console.log(this.selectedId1);
   console.log(this.data.agence);
      

  }
  getLieu(){
    this._service.getLieu().subscribe(
    res=>this.lieux=res
    )
    }
  
   onModif(){
    this.service.updateAgence(this.data.agence.id,this.data.agence).subscribe(
      data=>{
          console.log(data)
        },
      error=>console.error());
   // this.router.navigate(['/updatedirection']);
  }
  opensweetalert(){
    Swal.fire({
      title:'Êtes-vous sûre?',
      text: "Vous ne pourrez pas récupérer ce fichier imaginaire?",
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'oui,modifiez-le!',
      cancelButtonText:'Non,gardez-le'
        
    }).then((result) => {
      console.log(result)
      if(result.isConfirmed){
        this.onModif();
      }
      if (result.value) {
        Swal.fire(
          'modifié!',
          'Votre fichier imaginaire a été modifié',
          'success'
        )
      window.location.reload()
      }else if (result.dismiss==Swal.DismissReason.cancel){
      Swal.fire(
        'Annulé',
        'Votre fichier imaginaire est en sécurité :)',
        'error'
      )

      }
    })
 

  }
  retour(){
    window.location.reload()
  }
}
