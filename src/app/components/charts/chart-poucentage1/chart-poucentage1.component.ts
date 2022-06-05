import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';
@Component({
  selector: 'app-chart-poucentage1',
  templateUrl: './chart-poucentage1.component.html',
  styleUrls: ['./chart-poucentage1.component.scss']
})
export class ChartPoucentage1Component implements OnInit {

  chart:any;
 
  dat1:any=0
  dat2=0
  dat3=0
  constructor(private service:SuiviDocumentService,private servicee:SuiviDoc2emeAgeServiceService,private serviice:SuiviDocument3emeAgeService) { }

  ngOnInit(): void {
    this.service.getDocuments().subscribe(
      (data:any)=>{
         console.log("response recieved");
      this.dat1=data.length
    



     this.servicee.getDocuments().subscribe(
      (data:any)=>{
         console.log("response recieved");
      this.dat2=data.length
  
     

     this.serviice.getDocuments().subscribe(
      (data:any)=>{
         console.log("response recieved");
      this.dat3=data.length
     


      this.chart=document.getElementById('courbe');
      Chart.register(...registerables);
      this.loadChart();
      })} )}) 
  
  }
  loadChart():void{
    var myChart = new Chart("myChart1", {
      type: 'doughnut',
      data : {
        labels: [
          'Documents 1er âge',
          'Documents 2ème âge',
          'Documents 3ème âge'
        ],
        datasets: [{
          data: [this.dat1,this.dat2,this.dat3],
          backgroundColor: [
            'rgb(60,179,113)',
            'rgb(30,144,255)',
            'rgb(105,105,105)'
          ],
          hoverOffset: 4
        }]
      }
      ,
    });
  
  }
   
}
