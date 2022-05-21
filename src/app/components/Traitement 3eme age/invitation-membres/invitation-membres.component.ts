import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { invitationComission} from 'src/app/models/structure';

 
@Component({
  selector: 'app-invitation-membres',
  templateUrl: './invitation-membres.component.html',
  styleUrls: ['./invitation-membres.component.scss']
})
export class InvitationMembresComponent implements OnInit {
  invitationComission=new invitationComission()
 
  constructor(private router:Router,public dialogRef: MatDialogRef<InvitationMembresComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog) { }

  ngOnInit(): void {
    
    
  }


  public  Envoyer(){ 

  
      this.dialogRef.close()
      this.router.navigate(['/dashboard/ApprobationTableau'])
      
    }
  
    

  }
