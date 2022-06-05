import { Agence } from "./agence";
import { Structure } from "./structure";
import { SuiviDoc2emeAge } from "./suivi-doc-2eme-age";

export class DemandeConsultation {
id!:number
num_dde!:number;
date_dde!:Date
objet!:string;
num_Ordre!:number;
 
type_document!:string;
libelle!:Structure
date_De_creation_Du_Document!:SuiviDoc2emeAge
numero_document!:SuiviDoc2emeAge
nombre_de_copie!:number
nombre_De_documents!:SuiviDoc2emeAge
libelleAgence!:Agence
date_retour!:Date
date_sortie!:Date
codedocument!:SuiviDoc2emeAge
 
}