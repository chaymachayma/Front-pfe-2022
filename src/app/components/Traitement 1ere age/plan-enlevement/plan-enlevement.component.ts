import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { planEnlevement } from 'src/app/models/structure';
import { SuiviDocument } from 'src/app/models/suivi-document';

import { StructureService } from 'src/app/service/structure.service';
import Swal from 'sweetalert2';
import { BordereauxComponent } from '../bordereaux/bordereaux.component';
import { TraiterDemandeComponent } from '../traiter-demande/traiter-demande.component';

@Component({
  selector: 'app-plan-enlevement',
  templateUrl: './plan-enlevement.component.html',
  styleUrls: ['./plan-enlevement.component.scss']
})
export class PlanEnlevementComponent implements OnInit {
 planEnlevement= new planEnlevement();
 suividocument=new SuiviDocument()
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<PlanEnlevementComponent>,private service:StructureService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
 
    this.suividocument=this.data[1]
  }
  
envoyer(){
const data={
  toEmail: "responsabledag@gmail.com" ,
  subject : "test",
  body :{
    code:this.planEnlevement.code,
    date_:this.planEnlevement.date_,
    materiel:this.planEnlevement.materiel,
    humain:this.planEnlevement.humain

    
  } 

}
 
this.service.sendmaill(data).subscribe(
  res=>console.log("emailsended"),
  err=>console.log(err)
)
}
opendialog(item:any){
   this.dialog.open(BordereauxComponent, {
    width:'65%',
    height:'45%',
    data:[item,this.suividocument],
   })
   }

  
  

opensweetalert(){    
     Swal.fire(
        'Validée!',
        'Vous pouvez consulter votre e-mail :)',
        'success'
       ).then( result => {
        console.log(result);
        this.dialogRef.close()
        this.opendialog(1)

    
      })
}
}


