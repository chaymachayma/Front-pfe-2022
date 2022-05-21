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
    
console.log(this.data,"data")
this.suividocument=this.data[0]
console.log(this.suividocument,"suibiii")

  }
retour(){
 
let d=new Date(this.data[0].date_De_creation_Du_Document)
console.log(d,"avant") 
let y= d.getFullYear()
let g=this.data[0].limite_de_conservation_1ere_age
console.log(g,"gg")
let x=this.data[0].limite_de_conservation_1ere_age.substr(0,g.indexOf(" "))
//console.log(x,"xxxxxxxx")
let q=parseInt(x)
//console.log(q,"qqqq")
let r=y+q
let date_alert=r.toString()
//console.log(date_alert,"dddddd")
d.setFullYear(r)

//console.log(d,"apres")  
let date_dejour= new Date()
//console.log(date_dejour,"datedejour")

//console.log(date_dejour);
//console.log(date_dejour>d,"comparison")
if(date_dejour>d){
 
Swal.fire({

icon: 'success',
title: 'le document  a fini son 1ere age',
showConfirmButton: false,
timer: 3000
})

}
else {
  
Swal.fire({

icon: 'info',
title: 'le document n`a pas fini encore son 1 ere age',
showConfirmButton: false,
timer: 3000
})
}
window.location.reload() 
}
  }