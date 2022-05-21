import { LieuArchive } from "./lieu-archive";

export class Structure {
    
        id!:number;
        code!:string;
        libelle!:string;
        lieu_archivage1ereAge!:LieuArchive;
        lieu_archivage2emeAge!:LieuArchive;
        constructor(){}     
}
export class planEnlevement{
        code!:number;
        date_!:Date;
        materiel!:String;
        humain!:String;
        constructor(){};
      }
      export class invitationComission{
        nom!:String;
        prenom!:String;
        structure!:String;
        dateTenueCommission!:Date;
        ordreJour !:number;
        signature!:String;
        constructor(){};
      }