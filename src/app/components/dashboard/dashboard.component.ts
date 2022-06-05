import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { DirectionService } from 'src/app/service/direction.service';
import { StructureService } from 'src/app/service/structure.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { AgenceService } from 'src/app/service/agence.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  countDir=0
  countStructure=0
  countCompte=0
  countAgence=0
  constructor(private serrvice:AgenceService,private servicce:RegistrationService ,private servvice:StructureService,private breakpointObserver: BreakpointObserver,private service:TokenService,private sservice:DirectionService) {}
  ngOnInit(): void {
  
 this.sservice.getDirections().subscribe(
  data=>{ console.log("response received");
  
          this.countDir=data.length 
  },
  error=>console.log("exception occured")
)
this.servvice.getStructures().subscribe(
  data=>{ console.log("response recieved");
  this.countStructure=data.length  
  },
  error=>console.log("exception occured")
  
  )

  this.servicce.getComptes().subscribe(
    data=>{ 
      this.countCompte=data.length  
    },
    error=>console.log("exception occured")
    
    )

    this.serrvice.getAgences().subscribe(
      data=>{ 
        this.countAgence=data.length  
    },
    error=>console.log("exception occured")
    
    )

  }


}
