import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';


@Component({
  selector: 'app-consulter-sortie-doc',
  templateUrl: './consulter-sortie-doc.component.html',
  styleUrls: ['./consulter-sortie-doc.component.css']
})
export class ConsulterSortieDocComponent implements OnInit {

  id!:number 
  suividocument=new SuiviDocument();
  constructor(private service:SuiviDocumentService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    console.log(this.data,"hethi li hajetna biha")
   this.suividocument=this.data.sortie[0]
   console.log(this.suividocument)
   
  }
}
