import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { invitationComission} from 'src/app/models/structure';

@Component({
  selector: 'app-lettre-approbation',
  templateUrl: './lettre-approbation.component.html',
  styleUrls: ['./lettre-approbation.component.scss']
})
export class LettreApprobationComponent implements OnInit {
  LocalDate:String=new Date().toLocaleDateString();
  
  constructor(private router:Router,public dialogRef: MatDialogRef<LettreApprobationComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  Envoyer(){
    
    this.dialogRef.close()
    this.router.navigate(['/dashboard/Approbationglobaleoupartielle'])
  }
}
