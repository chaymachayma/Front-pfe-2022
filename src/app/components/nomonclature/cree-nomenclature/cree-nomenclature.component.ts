import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Nomenclature } from 'src/app/models/nomenclature';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common'
@Component({
  selector: 'app-cree-nomenclature',
  templateUrl: './cree-nomenclature.component.html',
  styleUrls: ['./cree-nomenclature.component.css']
})
export class CreeNomenclatureComponent implements OnInit {

  nomenclature=new Nomenclature();
  msg='';
 
  constructor(   private location: Location,
    private _service:NomenclatureService,private router: Router) { }
  ngOnInit(): void {
}
 public  onSubmit(){ 
        this._service.createNomenclature(this.nomenclature).subscribe(
          data=>{ 
            console.log("response received");
 },
           error =>{   
           console.log("exception occured");
            this.msg=error.error;
         
           }
        )
      
      }
    
      opensweetalert(){
           
          Swal.fire(
            'Crée!',
            'Votre nomenclature a été crée',
            'success'
          ).then( result => {
            console.log(result);
            if(result.isConfirmed ){
              
            
             this.nomenclature.code_Nomenclature= "";
              this.nomenclature.designation_Nomenclature = "";       
              this.nomenclature.dureeConservation_1ereAge = "";
              this.nomenclature.dureeConservation_2emeAge ="";
              this.nomenclature.valeurHistorique_3emeAge = "";

            }
          })
 
         
      
    }
  
    retour(){
      window.location.reload()
    }
}
