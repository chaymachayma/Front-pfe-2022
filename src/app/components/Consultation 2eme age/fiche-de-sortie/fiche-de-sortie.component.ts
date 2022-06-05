import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeConsultation } from 'src/app/models/demande-consultation';
import { DemandeConsultationService } from 'src/app/service/demande-consultation.service';
import{NgxPrintModule} from 'ngx-print'
@Component({
  selector: 'app-fiche-de-sortie',
  templateUrl: './fiche-de-sortie.component.html',
  styleUrls: ['./fiche-de-sortie.component.scss']
})
export class FicheDeSortieComponent implements OnInit {


  id!:number 
  demande=new DemandeConsultation();
  constructor(private service:DemandeConsultationService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.demande=this.data[0]
  }

}
