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
import { ReceptionPhysiqueDocComponent } from '../reception-physique-doc/reception-physique-doc.component';
import { Nomenclature } from 'src/app/models/nomenclature';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
@Component({
    selector: 'app-ajouter-reception-doc',
    templateUrl: './ajouter-reception-doc.component.html',
    styleUrls: ['./ajouter-reception-doc.component.scss']
})
export class AjouterReceptionDocComponent implements OnInit {
    Lieux!: any[];
    designation_Nomenclatures!: any[];
    libelleDirections!: any[];
    code_centres!: any[]
    suividocument = new SuiviDoc2emeAge();
    suiviDoc2eme!: any[];
    selecteDID1!: number
    selecteDID2!: number
    constructor(private serrvice: SuiviDocumentService, private servicce: StructureService, private service: DirectionService, private servicee: CentrePreArchivageService, private serviice: NomenclatureService, private _service: SuiviDoc2emeAgeServiceService, @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ReceptionPhysiqueDocComponent>) { }

    async ngOnInit(): Promise<void> {
  
        
        this.suividocument = this.data[0]
        this.selecteDID1 = this.data[0].designation_Nomenclature.id;
        this.selecteDID2 = this.data[0].libelleDirection.id;
        await this.service.getDirections().subscribe(
            res => {
                console.log(res, 'directionservice')
                this.libelleDirections = res,
                    this.serviice.getNomenclatures().subscribe(
                        res => {
                            console.log(res, "nomenclature service")
                            this.designation_Nomenclatures = res
                        },
                        error => console.log(error)
                    )
                console.log(this.designation_Nomenclatures, 'nomenclature local')
            },
            error => console.log(error)


        )
        this._service.getDocuments().subscribe(
res=>{
    this.suiviDoc2eme=res;
}
        )       

    }
    
    public enregistre() {
        this.suividocument.nbrPhy <= this.suividocument.nombre_De_documents
        this.suividocument.ecart = this.suividocument.nombre_De_documents - this.suividocument.nbrPhy

        this.service.getDirectionById(this.selecteDID2).subscribe(
            res => {
                this.suividocument.libelleDirection = res
                

                this.serviice.getNomenclatureById(this.selecteDID1).subscribe(
                    res => {
                        this.suividocument.designation_Nomenclature= res

                     

                        const data = {
                            toEmail: "responsabledag@gmail.com",
                            subject: "test",
                            body: this.suividocument.ecart

                        }
                        if (this.suividocument.ecart != 0) {

                            console.log(this.suividocument.ecart)
                         
                            this.servicce.sendmail(data).subscribe(
                                res => console.log("emailsended"),
                                err => console.log(err)
                            )
                        }
 
                        
                        let x = this.suiviDoc2eme.findIndex(s => s.codedocument === this.suividocument.codedocument)
                       
                        if (x < 0) {
                             
                            this._service.createDocument(this.suividocument).subscribe(

                                data => {
                                    console.log("reponse received");
                                },
                                error => {
                              
                                    console.log("exception occured");
                                }
                            )
                        }
                    },

                    error => { console.log(error) }
                )
            },
            error => { console.log(error) }
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