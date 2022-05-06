import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';
import { DirectionService } from 'src/app/service/direction.service';
import { Location } from '@angular/common'
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { TypeDirection } from 'src/app/models/type-direction';
import { LieuArchive } from 'src/app/models/lieu-archive';
@Component({
  selector: 'app-update-direction',
  templateUrl: './update-direction.component.html',
  styleUrls: ['./update-direction.component.css']
})
export class UpdateDirectionComponent implements OnInit {

id:any;
   direction :any;
   lieux!:LieuArchive[];
   types!:TypeDirection[];
   selectedId1!:number
   selectedId2!:number
  constructor(  private service:DirectionService,private router:Router,private route:ActivatedRoute, 
    private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
   
  
      /////
      this.getLieu();
      this.selectedId2=this.data.direction.lieu_d_archivage_1_ere_age.id ;
      console.log(this.selectedId2);
     console.log(this.data.selectedId2);
     ////////
     this.getType();
     this.selectedId2=this.data.direction.typeDirection.id ;
     console.log(this.selectedId2);
    console.log(this.data.selectedId2);

  }
  getType(){
    this.service.getType().subscribe(
    res=>this.types=res
    )
    }
  getLieu(){
    this.service.getLieu().subscribe(
    res=>this.lieux=res
    )
    }
  
   onModif(){
     this.service.updateDirection(this.data.id,this.data.direction).subscribe(
    data=>console.log(data),error=>console.error());
    this.direction=new Direction();
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
  }}
    
//alert(){
  //this.dialogService.OpenConfirmDialog('Etes vous sur de modifier cette direction')
  //.afterClosed().subscribe(res=>{
//if (res){
  //this.service.updateDirection(this.id,this.direction);
  //this.router.navigate(['/gestionDirection'])
  //this.notservice.warn('modification avec succee');
//}
//else{
  //this.service.updateDirection(this.id,this.direction).subscribe(
    //data=>console.log(data),error=>console.error());
 // this.service.getDirections();
  //this.router.navigate(['/gestionDirection'])
//}
  //});
//}
