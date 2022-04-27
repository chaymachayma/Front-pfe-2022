import { Direction } from "./direction"
import { LieuArchive } from "./lieu-archive"
import { Nomenclature } from "./nomenclature"

export class DemandeDeVersement {
    id !:number
    num_dde!:number
    date_dde!:Date
    objet!:string
    nbrCarton!:number
    etat!:string
    destinataire!:LieuArchive
    expediteur!:Direction
    designation_nomenclature!:Nomenclature

}
