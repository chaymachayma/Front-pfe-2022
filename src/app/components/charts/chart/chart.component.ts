import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit  {
chart:any;
doc!:any;
doc1!:any;
doc2!:any;
  dataTable1: any=[0,0,0,0,0,0,0,0,0,0,0,0];
  dataTable2: any=[0,0,0,0,0,0,0,0,0,0,0,0];
  dataTable3: any=[0,0,0,0,0,0,0,0,0,0,0,0];
  constructor(private servicce:SuiviDocument3emeAgeService,private service:SuiviDocumentService,private servicee:SuiviDoc2emeAgeServiceService,private serviice:SuiviDocument3emeAgeService) { }


  ngOnInit(): void {
    this.service.getDocuments().subscribe(
      (data:any)=>{ console.log("response recieved");
        this.doc=data; 
        
        this.doc?.forEach((document:any) => {
          let d=new Date(document.date_d_entree_Du_Document)
          
    switch(d.getMonth()+1){
      case 1:this.dataTable1[d.getMonth()]++

      break;
      case 2:this.dataTable1[d.getMonth()]++
      break;
      case 3:this.dataTable1[d.getMonth()]++

      break;
      case 4:this.dataTable1[d.getMonth()]++
      break;
      case 5:this.dataTable1[d.getMonth()]++       
      break;
      case 6:this.dataTable1[d.getMonth()]++
      break;
      case 7:this.dataTable1[d.getMonth()]++
      break;
      case 8:this.dataTable1[d.getMonth()]++
      break;
      case 9:this.dataTable1[d.getMonth()]++
      break;
      case 10:this.dataTable1[d.getMonth()]++
      break;
      case 11:this.dataTable1[d.getMonth()]++
      break;
      case 12:this.dataTable1[d.getMonth()]++
      break;
    }
          
        });  
        this.servicee.getDocuments().subscribe(
          (data:any)=>{ console.log("response recieved");
            this.doc1=data; 
              
            this.doc1?.forEach((document:any) => {
              let d=new Date(document.date_d_entree_Du_Document)
            
        switch(d.getMonth()+1){
          case 1:this.dataTable2[d.getMonth()]++
        
          break;
          case 2:this.dataTable2[d.getMonth()]++
          break;
          case 3:this.dataTable2[d.getMonth()]++
        
          break;
          case 4:this.dataTable2[d.getMonth()]++
          break;
          case 5:this.dataTable2[d.getMonth()]++
        
            
          break;
          case 6:this.dataTable2[d.getMonth()]++
          break;
          case 7:this.dataTable2[d.getMonth()]++
          break;
          case 8:this.dataTable2[d.getMonth()]++
          break;
          case 9:this.dataTable2[d.getMonth()]++
          break;
          case 10:this.dataTable2[d.getMonth()]++
          break;
          case 11:this.dataTable2[d.getMonth()]++
          break;
          case 12:this.dataTable2[d.getMonth()]++
          break;
        }
              
            });  
          this.servicce.getDocuments().subscribe(
            (data:any)=>{ console.log("response recieved");
              this.doc2=data; 
              this.doc2?.forEach((document:any) => {
                let d=new Date(document.date_d_entree_Du_Document)
                
          switch(d.getMonth()+1){
            case 1:this.dataTable3[d.getMonth()]++
          
            break;
            case 2:this.dataTable3[d.getMonth()]++
            break;
            case 3:this.dataTable3[d.getMonth()]++
          
            break;
            case 4:this.dataTable3[d.getMonth()]++
            break;
            case 5:this.dataTable3[d.getMonth()]++
          
              
            break;
            case 6:this.dataTable3[d.getMonth()]++
            break;
            case 7:this.dataTable3[d.getMonth()]++
            break;
            case 8:this.dataTable3[d.getMonth()]++
            break;
            case 9:this.dataTable3[d.getMonth()]++
            break;
            case 10:this.dataTable3[d.getMonth()]++
            break;
            case 11:this.dataTable3[d.getMonth()]++
            break;
            case 12:this.dataTable3[d.getMonth()]++
            break;
          }
                
              });  
              this.chart=document.getElementById('courbe');
              Chart.register(...registerables);
              this.loadChart();
            },
          
            error=>console.log("exception occured")
            
            )}, 
          error=>console.log("exception occured")
          
          )
      },

      error=>console.log("exception occured")
      
      )



 
   
  }
  loadChart():void{
   var myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        datasets: [{
            label: 'Documents 1er âge',
            data: this.dataTable1,
            backgroundColor: [
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)'
            ],
            borderColor: [
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
            ],
            borderWidth: 1,
            tension:0.3
        },
        {
          label: 'Documents 2ème âge',
          data:this.dataTable2,
          backgroundColor: [
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
          ],
          borderColor: [
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
              'rgb(30,144,255)',
          ],
          borderWidth: 1,
          tension:0.3,
    },
    {
      label: 'Documents 3ème âge',
      data:this.dataTable3,
      backgroundColor: [
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
      ],
      borderColor: [
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
          'rgb(105,105,105)',
      ],
      borderWidth: 1,
      tension:0.3,
     
    }]
},
    options: {
      
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  }

   
   

}
