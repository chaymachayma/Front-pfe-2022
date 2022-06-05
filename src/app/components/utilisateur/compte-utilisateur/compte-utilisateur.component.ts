import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Compte } from 'src/app/models/compte';
import { RegistrationService } from 'src/app/service/registration.service';
import { DirectionService } from 'src/app/service/direction.service';


@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {
  compte=new Compte();
 
  msg='';
  productForm !: FormGroup;
  lieux!:Compte[];
  selectedId1!:number;
  libelleDirections!:any[];
  constructor(private _service:RegistrationService,private _router:Router,private formBuilder : FormBuilder,private service:DirectionService) { }
  ngOnInit(): void {
    this.getDirections()
  }
  
  enregCompte(){   
    this.service.getDirectionById(this.selectedId1).subscribe(
      res=>{
      this.compte.libelleDirection=res
 
      this._service.registrerCompteFromRemote(this.compte).subscribe(     
        data =>{
          Swal.fire(
            'Crée!',
            'Votre Compte a été crée :)',
            'success').then( result => {
              console.log(result);
              if(result.isConfirmed ){
         
                this.compte.nom = "";
                this.compte.prenom = "";       
             
                this.compte.email=""; 
                this.compte.password =""; 
              }
            })
       },
       error =>{
        Swal.fire(
          'Annulé',
          'Votre adresse e-mail est déja existe :(',
         'error')
     
       }
    )
  },
  error=>{console.log(error);}
  )}


  retourner(){
    this._router.navigate(['/gestion-parametrages']);
  }
 
 
  opensweetalert(){ 
     this.enregCompte();      
  }

  getDirections(){
    this.service.getDirections().subscribe(
    res=>this.lieux=res
    )
    }
  retour(){
    window.location.reload()
  }
}






