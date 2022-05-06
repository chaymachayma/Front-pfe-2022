import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
 
import { ConsulterAgenceComponent } from './components/agence/consulter-agence/consulter-agence.component';
import { CreeAgenceComponent } from './components/agence/cree-agence/cree-agence.component';
import { DeleteAgenceComponent } from './components/agence/delete-agence/delete-agence.component';
import { GestionAgenceComponent } from './components/agence/gestion-agence/gestion-agence.component';
import { UpdateAgenceComponent } from './components/agence/update-agence/update-agence.component';
import { DashComponent } from './components/dash/dash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsulterDirectionComponent } from './components/direction/consulter-direction/consulter-direction.component';
import { CreedirectionComponent } from './components/direction/creedirection/creedirection.component';
import { DeleteDirectionComponent } from './components/direction/delete-direction/delete-direction.component';
import { GestionDirectionComponent } from './components/direction/gestion-direction/gestion-direction.component';
import { UpdateDirectionComponent } from './components/direction/update-direction/update-direction.component';
import { ConsulterNomenclatureComponent } from './components/nomonclature/consulter-nomenclature/consulter-nomenclature.component';
import { CreeNomenclatureComponent } from './components/nomonclature/cree-nomenclature/cree-nomenclature.component';
import { DeleteNomenclatureComponent } from './components/nomonclature/delete-nomenclature/delete-nomenclature.component';
import { GestionNomenclatureComponent } from './components/nomonclature/gestion-nomenclature/gestion-nomenclature.component';
import { UpdateNomenclatureComponent } from './components/nomonclature/update-nomenclature/update-nomenclature.component';
import { ConsulterStructureComponent } from './components/structure/consulter-structure/consulter-structure.component';
import { CreerStructureComponent } from './components/structure/creer-structure/creer-structure.component';
import { DeleteStructureComponent } from './components/structure/delete-structure/delete-structure.component';
import { GestionStructureComponent } from './components/structure/gestion-structure/gestion-structure.component';
import { UpdateStructureComponent } from './components/structure/update-structure/update-structure.component';
import { AjoutDateDestructionComponent } from './components/Traitement 1ere age/ajout-date-destruction/ajout-date-destruction.component';
import { AjouteDateDestructionComponent } from './components/Traitement 1ere age/ajoute-date-destruction/ajoute-date-destruction.component';
import { BordereauxComponent } from './components/Traitement 1ere age/bordereaux/bordereaux.component';
import { CreeDocumentComponent } from './components/Traitement 1ere age/cree-document/cree-document.component';
import { DemandeDeVersementComponent } from './components/Traitement 1ere age/demande-de-versement/demande-de-versement.component';
import { DestructionDocumentComponent } from './components/Traitement 1ere age/destruction-document/destruction-document.component';
import { FicheDeRenseignementComponent } from './components/Traitement 1ere age/fiche-de-renseignement/fiche-de-renseignement.component';
import { ConsulterSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/consulter-sortie-doc/consulter-sortie-doc.component';
import { CreeSortiedocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/cree-sortiedoc/cree-sortiedoc.component';
import { InscriptionSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/inscription-sortie-doc.component';
import { ModifierSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/modifier-sortie-doc/modifier-sortie-doc.component';
import { InventaireDocument2emeageComponent } from './components/Traitement 1ere age/inventaire-document2emeage/inventaire-document2emeage.component';
import { ListeDemandeVersementComponent } from './components/Traitement 1ere age/liste-demande-versement/liste-demande-versement.component';
import { PlanEnlevementComponent } from './components/Traitement 1ere age/plan-enlevement/plan-enlevement.component';
import { TraiterDemandeComponent } from './components/Traitement 1ere age/traiter-demande/traiter-demande.component';
import { TriDocumentComponent } from './components/Traitement 1ere age/tri-document/tri-document.component';
import { AjoutInscriptionComponent } from './components/Traitement 2eme age/ajout-inscription/ajout-inscription.component';
import { AjouterEmplacementComponent } from './components/Traitement 2eme age/ajouter-emplacement/ajouter-emplacement.component';
import { AjouterReceptionDocComponent } from './components/Traitement 2eme age/ajouter-reception-doc/ajouter-reception-doc.component';
import { ClassementDocsComponent } from './components/Traitement 2eme age/classement-docs/classement-docs.component';
import { InscriptionDocRecusComponent } from './components/Traitement 2eme age/inscription-doc-recus/inscription-doc-recus.component';
import { ReceptionPhysiqueDocComponent } from './components/Traitement 2eme age/reception-physique-doc/reception-physique-doc.component';
import { CompteUtilisateurComponent } from './components/utilisateur/compte-utilisateur/compte-utilisateur.component';
import { ConsulterCompteComponent } from './components/utilisateur/consulter-compte/consulter-compte.component';
import { DeleteCompteComponent } from './components/utilisateur/delete-compte/delete-compte.component';
import { GestionParametragesComponent } from './components/utilisateur/gestion-parametrages/gestion-parametrages.component';
import { UpdateCompteComponent } from './components/utilisateur/update-compte/update-compte.component';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    
    path:'dashboard' ,
    component:DashComponent , 
    children:[

      {path:'gestionDirection',component:GestionDirectionComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'creerdirection',component:CreedirectionComponent,canActivate:[AuthGuard,RoleGuard] },
      {path:'updatedirection/:id',component:UpdateDirectionComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'deletedirection/:id',component:DeleteDirectionComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'consulterdirection/:id',component:ConsulterDirectionComponent,canActivate:[AuthGuard,RoleGuard]},
      //
      {path:'gestionAgence',component:GestionAgenceComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'creeragence',component:CreeAgenceComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'updateagence/:id',component:UpdateAgenceComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'deleteagence/:id',component:DeleteAgenceComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'consulteragence/:id',component:ConsulterAgenceComponent,canActivate:[AuthGuard,RoleGuard]},
      //
      {path:'gestionNomenclature',component:GestionNomenclatureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'creernomenclature',component:CreeNomenclatureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'updatenomenclature/:id',component:UpdateNomenclatureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'deletenomenclature/:id',component:DeleteNomenclatureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'consulternomenclature/:id',component:ConsulterNomenclatureComponent,canActivate:[AuthGuard,RoleGuard]},
      //
      {path:'compte-utilisateur',component:CompteUtilisateurComponent,canActivate:[AuthGuard,RoleGuard]},
      { path:'',component:DashboardComponent,canActivate:[AuthGuard,RoleGuard]},
      { path:'consulter-compte/:id',component:ConsulterCompteComponent,canActivate:[AuthGuard,RoleGuard] },
      { path:'gestion-parametrages',component:GestionParametragesComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'update-compte/:id',component:UpdateCompteComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'delete-compte/:id',component:DeleteCompteComponent,canActivate:[AuthGuard,RoleGuard]}, 
      //
      { path:'creer-structure',component: CreerStructureComponent,canActivate:[AuthGuard,RoleGuard]},
       {path:'gestion-structure',component: GestionStructureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'delete-structure/:id',component: DeleteStructureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'consulter-structure/:id',component: ConsulterStructureComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'update-structure/:id',component:UpdateStructureComponent,canActivate:[AuthGuard,RoleGuard]},
      { path:'dashboard',component: DashboardComponent,canActivate:[AuthGuard,RoleGuard]},
      {path:'triDoc1ereage',component:TriDocumentComponent,canActivate:[AuthGuard]},
      {path:'creeDocument',component:CreeDocumentComponent,canActivate:[AuthGuard]},
      {path:'fiche/:id',component:FicheDeRenseignementComponent,canActivate:[AuthGuard]},
      {path:'inscriptionSortie1ere',component:InscriptionSortieDocComponent,canActivate:[AuthGuard]},
      {path:'creeSortie1ere',component:CreeSortiedocComponent,canActivate:[AuthGuard]},
      {path:'modifierSortie1ere/:id',component:ModifierSortieDocComponent,canActivate:[AuthGuard]},
      {path:'ConsulterSortie1ere/:id',component:ConsulterSortieDocComponent,canActivate:[AuthGuard]},
      {path:'inventaire/:id',component:InventaireDocument2emeageComponent,canActivate:[AuthGuard]},
      { path:'destruction-document',component:DestructionDocumentComponent,canActivate:[AuthGuard]},
      { path:'ajoute-date-destruction', component:AjoutDateDestructionComponent,canActivate:[AuthGuard] },
      {path:'destruction-document/:id',component:DestructionDocumentComponent,canActivate:[AuthGuard]},
     { path:'ajoute-date-destruction',component:AjouteDateDestructionComponent,canActivate:[AuthGuard]},
     //demande
    {path:'liste-demande-versement',component: ListeDemandeVersementComponent,canActivate:[AuthGuard]},
    {path:'traiter-demande',component:TraiterDemandeComponent,canActivate:[AuthGuard]},
    {path:'demande-versement',component: DemandeDeVersementComponent,canActivate:[AuthGuard]},
    { path:'plan-enlevement',component: PlanEnlevementComponent,canActivate:[AuthGuard]},
    
    {path:'bordereaux',component: BordereauxComponent,canActivate:[AuthGuard]},
    /////2eme age
    {
      path:'receptionPhy2eme',
      component:ReceptionPhysiqueDocComponent,canActivate:[AuthGuard]
    },
    {
      path:'AjouterReceptionDoc',
      component: AjouterReceptionDocComponent,canActivate:[AuthGuard]
    },
    {
      path:'InscriptionDocRecus',
      component: InscriptionDocRecusComponent,canActivate:[AuthGuard]
    },
    {
      path:'AjoutInscriptionDocRecus',
      component: AjoutInscriptionComponent,canActivate:[AuthGuard]
    }
    ,
    {
      path:'classerDoc',
      component: ClassementDocsComponent,canActivate:[AuthGuard]
    },
    {
      path:'ajouterEmplacement',
      component: AjouterEmplacementComponent,canActivate:[AuthGuard]
    }
//
]},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
