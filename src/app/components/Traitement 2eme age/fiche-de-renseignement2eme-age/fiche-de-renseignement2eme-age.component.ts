
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument } from 'src/app/models/suivi-document';
import Swal from 'sweetalert2';
import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';

@Component({
  selector: 'app-fiche-de-renseignement2eme-age',
  templateUrl: './fiche-de-renseignement2eme-age.component.html',
  styleUrls: ['./fiche-de-renseignement2eme-age.component.scss']
})
export class FicheDeRenseignement2emeAgeComponent implements OnInit {

  doc:SuiviDoc2emeAge[]=[];
  id!:number 
  suividocument=new SuiviDoc2emeAge();
  constructor(private service:SuiviDoc2emeAgeServiceService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any,public dialogRef: MatDialogRef<FicheDeRenseignement2emeAgeComponent>) { }
  ngOnInit(): void {
/*
    if(this.id=this.route.snapshot.params['id']){
      this.suividocument=new SuiviDocument();
      this.service.getDOcumentById(this.id).subscribe(
        data=>{ console.log(data);
                 this.suividocument=data[0];
        },
        error=>console.log(error)
        )
    }
    console.log(this.suividocument,"suiviiiiii");
    }*/
    

this.suividocument=this.data[0]


  }
retour(){
 
let d=new Date(this.data[0].date_de_versement_2eme_age)
 
let y= d.getFullYear()
let g=this.data[0].limite_de_conservation_2eme_age

let x=this.data[0].limite_de_conservation_2eme_age.substr(0,g.indexOf(" "))

let q=parseInt(x)

let r=y+q
let date_alert=r.toString()

d.setFullYear(r)

 
let date_dejour= new Date()

if(date_dejour>d){
 
Swal.fire({

icon: 'success',
title: 'le document  a fini son 2ème age',
showConfirmButton: false,
timer: 3000

})

}
else {
  
Swal.fire({

icon: 'info',
title: 'le document n`a pas fini encore son 2ème age',
showConfirmButton: false,
timer: 3000
})
}
this.router.navigate(['dashboard/InscriptionDocRecus/dashboard/classerDoc'])
this.dialogRef.close()
}
  }