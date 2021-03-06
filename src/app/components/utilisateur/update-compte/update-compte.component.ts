import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { switchAll } from 'rxjs/operators';
import { Location } from '@angular/common'
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistrationService } from 'src/app/service/registration.service';
import { Compte } from 'src/app/models/compte';
import { DirectionService } from 'src/app/service/direction.service';
import { Direction } from 'src/app/models/direction';


@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
   id :any;
   lieux!:Direction[];
   selectedId1!:number;
   compte:Compte=new Compte();
  constructor(private _service:RegistrationService,private _router:Router,private route:ActivatedRoute
   , private location: Location , @Inject(MAT_DIALOG_DATA) public data : any,private service:DirectionService) { }

  ngOnInit(): void {
  this.getDirections()
  this.selectedId1=this.data.compte.libelleDirection.id ;
}

      enregCompte(){      
 
            this.service.getDirectionById(this.selectedId1).subscribe(
              
              res=>{
                this.data.compte.libelleDirection=res;
                 
                this._service.updateCompte(this.data.compte.id,this.data.compte).subscribe(
               
                  data=>{
                      console.log(data)
                    },
                  error=>console.error());
              }
              
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
        this.enregCompte();
      }
      if (result.value) {
        Swal.fire(
          'modifié!',
          'Le compte utilisateur a été modifié',
          'success'
        )
      window.location.reload()
      }else if (result.dismiss==Swal.DismissReason.cancel){
      Swal.fire(
        'Annulé',
        'Le compte utilisateur n`a pas été modifié',
        'error'
      )
      }
    })
 

  }
 

    
async getDirections() {
  await this.service.getDirections().subscribe(
     res=>{
       this.lieux=res
     },
     error=>console.log(error)
   )
 }
  retour(){
    window.location.reload()
  }
  
}
