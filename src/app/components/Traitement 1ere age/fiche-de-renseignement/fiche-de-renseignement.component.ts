import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument } from 'src/app/models/suivi-document';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fiche-de-renseignement',
  templateUrl: './fiche-de-renseignement.component.html',
  styleUrls: ['./fiche-de-renseignement.component.css']
})
export class FicheDeRenseignementComponent implements OnInit {
  doc:SuiviDocument[]=[];
  id!:number 
  suividocument=new SuiviDocument();
  constructor(private service:SuiviDocumentService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }
  ngOnInit(): void {
 
    
 
this.suividocument=this.data[0]


  }
retour(){
 
let d=new Date(this.data[0].date_De_creation_Du_Document)
 
let y= d.getFullYear()
let g=this.data[0].limite_de_conservation_1ere_age
 
let x=this.data[0].limite_de_conservation_1ere_age.substr(0,g.indexOf(" "))
 
let q=parseInt(x)
 
let r=y+q
let date_alert=r.toString()
 
d.setFullYear(r)
  
let date_dejour= new Date()
 
if(date_dejour>d){
 
Swal.fire({

icon: 'success',
title: 'le document  a fini son 1er âge car la date courante > date alerte ! ',
showConfirmButton: false,
timer: 4500
})

}
else {
  
Swal.fire({

icon: 'info',
title: 'le document n`a pas encore fini son 1er âge car la date courante < date alerte !',
showConfirmButton: false,
timer: 4500
})
}
window.location.reload() 
}
  }