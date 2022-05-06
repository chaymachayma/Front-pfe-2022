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
    console.log(this.data,"hmmmmmmmmmmmmm")
    this.suividocument=this.data[1]
  }
  
envoyer(){
const data={
  toEmail: "chaymagharbi615@gmail.com" ,
  subject : "test",
  body :  this.planEnlevement

}
this.service.sendmail(data).subscribe(
  res=>console.log("emailsended"),
  err=>console.log(err)
)
}
opendialog(item:any){
   this.dialog.open(BordereauxComponent, {
    width:'70%',
    data:[item,this.suividocument],
   })
   }

  //this._router.navigate(['dashboard/demandedeversement']);
  

opensweetalert(){    
     Swal.fire(
        'Validée!',
        'Vous pouvez consulter votre e-mail :)',
        'success'
       ).then( result => {
        console.log(result);
        this.dialogRef.close()
        this.opendialog(1)

        //this.router.navigate(['/dashboard/bordereaux'])
      })
}
}


