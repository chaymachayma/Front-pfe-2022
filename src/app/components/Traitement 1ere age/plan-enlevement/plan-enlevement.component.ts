import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { planEnlevement } from 'src/app/models/structure';
import { StructureService } from 'src/app/service/structure.service';
import Swal from 'sweetalert2';
import { TraiterDemandeComponent } from '../traiter-demande/traiter-demande.component';

@Component({
  selector: 'app-plan-enlevement',
  templateUrl: './plan-enlevement.component.html',
  styleUrls: ['./plan-enlevement.component.scss']
})
export class PlanEnlevementComponent implements OnInit {
 planEnlevement= new planEnlevement();
  constructor(private service:StructureService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
envoyer(){
const data={
  toEmail: "najjaramal220@gmail.com" ,
  subject : "test" ,
  body :  this.planEnlevement

}
this.service.sendmail(data).subscribe(
  res=>console.log("emailsended"),
  err=>console.log(err)
)
}

opensweetalert(){    
     Swal.fire(
        'Validée!',
        'Vous pouvez consulter votre e-mail :)',
        'success'
       ).then( result => {
        console.log(result);
      })
}
}


