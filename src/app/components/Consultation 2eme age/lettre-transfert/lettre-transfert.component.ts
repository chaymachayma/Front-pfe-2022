import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lettre-transfert',
  templateUrl: './lettre-transfert.component.html',
  styleUrls: ['./lettre-transfert.component.scss']
})
export class LettreTransfertComponent implements OnInit {
  LocalDate:String=new Date().toLocaleDateString();
  constructor(private router:Router,public dialogRef: MatDialogRef<LettreTransfertComponent>) { }

  ngOnInit(): void {
  }
envoyer(){
   this.router.navigate(["/dashboard/receptionetvalidation"])
this.dialogRef.close()
}
}
