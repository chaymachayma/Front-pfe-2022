import { Component, OnInit } from '@angular/core';
import { SuiviDoc2emeAge } from 'src/app/models/suivi-doc-2eme-age';
import { SuiviDoc2emeAgeServiceService } from 'src/app/service/suivi-doc2eme-age-service.service';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { CentrePreArchivageService } from 'src/app/service/centre-pre-archivage.service'
import Swal from 'sweetalert2';
import { StructureService } from 'src/app/service/structure.service';
import { Nomenclature } from 'src/app/models/nomenclature';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { ReceptionDocComponent } from '../reception-doc/reception-doc.component';
import { SuiviDoc3emeAge } from 'src/app/models/suivi-doc-3eme-age';
import { SuiviDocument3emeAgeService } from 'src/app/service/suivi-document3eme-age.service';
import { CentreArchivesService } from 'src/app/service/centre-archives.service';

@Component({
  selector: 'app-ajouter-reception-doc3eme',
  templateUrl: './ajouter-reception-doc3eme.component.html',
  styleUrls: ['./ajouter-reception-doc3eme.component.scss']
})
export class AjouterReceptionDoc3emeComponent implements OnInit {

  Lieux!: any[];
  designation_Nomenclatures!: any[];
  libelleDirections!: any[];
  codeDirection!:any[];
  code_centres!: any[]
  suividocument = new SuiviDoc3emeAge();
  suiviDoc3eme!: any[];
  selecteDID1!: number
  selecteDID2!: number
  selecteDID3!: number
  selecteDID4!:number
  constructor(private serrvice: SuiviDocumentService, private servicce: StructureService, private service: DirectionService, private servicee: CentreArchivesService, private serviice: NomenclatureService, private _service: SuiviDocument3emeAgeService, @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<ReceptionDocComponent>) { }

  async ngOnInit(): Promise<void> {

      
      this.suividocument = this.data[0]
      this.selecteDID1 = this.data[0].designation_Nomenclature.id;
      this.selecteDID2 = this.data[0].libelleDirection.id;
      this.selecteDID3 = this.data[0].codedirection.id;
      this.selecteDID4 = this.data[0].code_centre.id;
      await this.service.getDirections().subscribe(
          res => {
            
              this.libelleDirections = res,
              this.codeDirection = res,
                  this.serviice.getNomenclatures().subscribe(
                      res => {
                          
                          this.designation_Nomenclatures = res
                          
                             this.servicee.getCentreArchive().subscribe(
                               res=>{
                                
                                 this.code_centres=res
                                
                               },
                               error=>console.log(error)
                             )
                          
                      },
                      error => console.log(error)
                  )
          },
          error => console.log(error)


      )
      this._service.getDocuments().subscribe(
res=>{
  this.suiviDoc3eme=res;
}
      )       

  }
  
  public enregistre() {
      
      this.service.getDirectionById(this.selecteDID2).subscribe(
          res => {
              this.suividocument.libelleDirection = res
             

              this.service.getDirectionById(this.selecteDID3).subscribe(
                res => {
                    this.suividocument.codedirection = res
                 

              this.serviice.getNomenclatureById(this.selecteDID1).subscribe(
                  res => {
                      this.suividocument.designation_Nomenclature= res
                   

                      this.servicee.getCentreArchiveById(this.selecteDID4).subscribe(
                        res=>{this.suividocument.code_centre=res     
                          

                          this._service.createDocument(this.suividocument).subscribe(

                              data => {
                                  console.log("reponse received");
                              },
                              error => {
                                 
                                  console.log("exception occured");
                              }
                          )
                  },
               error=>{console.log(error);}
            )},

                  error => { console.log(error) }
              )},
          error => { console.log(error) }
      ) },
      error=>{console.log(error);}
   )
  }



  opensweetalert() {

      Swal.fire(
          'ajout??e!',
          'Votre Document a ??t?? ajout??e',
          'success'
      ).then(result => {
          console.log(result);
          if (result.isConfirmed) {

            
              this.suividocument.chapitre_comptable="";       
            
              this.dialogRef.close();
          }
      })


  }




  retour() {
      window.location.reload()
  }

}