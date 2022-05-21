import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { Router } from '@angular/router';

import { CreeDocumentComponent } from '../cree-document/cree-document.component';
import { MatDialog } from '@angular/material/dialog';
import { FicheDeRenseignementComponent } from '../fiche-de-renseignement/fiche-de-renseignement.component';

import { DestructionDocumentComponent } from '../destruction-document/destruction-document.component';
import { InventaireDocument2emeageComponent } from '../inventaire-document2emeage/inventaire-document2emeage.component';
import { SuiviDocument } from 'src/app/models/suivi-document';
import Swal from 'sweetalert2';
@Component({
selector: 'app-tri-document',
templateUrl: './tri-document.component.html',
styleUrls: ['./tri-document.component.css']
})
export class TriDocumentComponent implements OnInit {

selected!:SuiviDocument
doc:SuiviDocument[]=[];
sortedData:SuiviDocument[];
suividocument=new SuiviDocument()
displayedColumns: string[] = ['id','codeDirection','chapitre_comptable','numero_document','nombre_De_pages','date_De_creation_Du_Document','date_d_entree_Du_Document','codedocument','numero_d_ordre','empl_physique','nombre_De_documents','limite_de_conservation_1ere_age','LibelleDirection','designation_Nomenclature','Destruction'];
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;

@ViewChild(MatSort) sort!: MatSort;

constructor(private _router:Router,private service:SuiviDocumentService,private dialog:MatDialog) {
this.sortedData=this.doc.slice();
}

ngOnInit(): void {


this.service.getDocuments().subscribe(

data=>{ console.log("received response");
this.dataSource=new MatTableDataSource(data) ;

this.dataSource.paginator=this.paginator;
//this.doc=data;

this.sortedData=data.slice();

console.log("slice",data.slice());

},
error=>console.log("exception occured")

)
console.log("hello",this.sortedData);
}



openDialoggg(id:number ) { 

this._router.navigateByUrl(`/dashboard/destruction-document/${id}`)
}

inventaire(id:number){
    this.service.getDOcumentById(id).subscribe(
        res=>{
            
            let d=new Date(res.date_De_creation_Du_Document)
            console.log(d,"avant") 
            let y= d.getFullYear()
            let g=res.limite_de_conservation_1ere_age
            console.log(g,"gg")
            let x=res.limite_de_conservation_1ere_age.substr(0,g.indexOf(" "))
            //console.log(x,"xxxxxxxx")
            let q=parseInt(x)
            //console.log(q,"qqqq")
            let r=y+q
            let date_alert=r.toString()
            //console.log(date_alert,"dddddd")
            d.setFullYear(r)
            let date_dejour= new Date()
            
            if(date_dejour<d){
                Swal.fire({
                    icon: 'error',
                    title: 'Attention...',
                    text: 'le document n`a pas ancore fini son 1 ere age !',
                   
                  })
            }
            else
            this._router.navigateByUrl(`/dashboard/inventaire/${id}`)
        }
    )

}

sortData(sort: Sort) {
const data = this.sortedData.slice();
if (!sort.active || sort.direction === '') {
this.sortedData = data;
return;
}

this.sortedData = data.sort((a, b) => {
const isAsc = sort.direction === 'asc';
switch (sort.active) {
case 'id':
return compare(a.id, b.id, isAsc);
case 'chapitre_comptable':
return compare(a.chapitre_comptable, b.chapitre_comptable, isAsc);
case 'nombre_De_documents':
return compare(a.nombre_De_documents, b.nombre_De_documents, isAsc);
case 'nombre_De_pages':
return compare(a.nombre_De_pages, b.nombre_De_pages, isAsc);
case 'numero_document':
return compare(a.numero_document, b.numero_document, isAsc);


case 'date_d_entree_Du_Document':
return compare(a.date_d_entree_Du_Document, b.date_d_entree_Du_Document, isAsc);
case 'date_De_creation_Du_Document':
return compare(a.date_De_creation_Du_Document, b.date_De_creation_Du_Document, isAsc);
case 'limite_de_conservation_1ere_age':
return compare(a.limite_de_conservation_1ere_age, b.limite_de_conservation_1ere_age, isAsc);

default:
return 0;
}
});
}
applyFilter(event: Event) {
 console.log(event)   
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
this.dataSource.paginator.firstPage();
}
}

openDialog() {
this.dialog.open(CreeDocumentComponent, {
width:'35%'
});
}
Onchange(item:any){
console.log(item,"check")
this.selected=item
}
openDialogg(){
this.dialog.open(FicheDeRenseignementComponent, {
width:'40%',
height:'50%',
data:[this.selected]
});
}
}


function compare(a: number | string|Date, b: number | string|Date, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}








