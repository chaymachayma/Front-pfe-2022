import { CentrePreArchivages } from "./centre-pre-archivages";
import { Direction } from "./direction";
import { Nomenclature } from "./nomenclature";


export class SuiviDoc2emeAge  {
    id!:number;
numero_document!:number;
chapitre_comptable!:string;
nombre_De_pages!:number;
date_De_creation_Du_Document!:Date;
date_d_entree_Du_Document!:Date;
date_de_versement_2eme_age!:Date;
nombre_De_documents !:number;
codedocument!:number;
numero_d_ordre!:number;
emplacement_physique!:number;
limite_de_conservation_2eme_age!:string;
code_centre!:CentrePreArchivages;
designation_Nomenclature!:Nomenclature;
libelleDirection!:Direction;
codedirection!:Direction;
nbrPhy!:number;
ecart!:number;
emplSalleConservation!:number;
emplCote!:number;
    
}
