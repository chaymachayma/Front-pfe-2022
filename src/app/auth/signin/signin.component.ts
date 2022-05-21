import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm!: FormGroup;
msg="";
show=false;
  constructor(private fb: FormBuilder , private router: Router,private service:AuthService,private _service:TokenService) { }
 
  ngOnInit(): void {
    this.initFormBuilder()
  }
  private initFormBuilder(): void{
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(4)]],
    })
  }
  public errorMessage(formControlName: string, email?: boolean): string | void {
    if (this.signinForm.controls[formControlName]?.errors?.['required']){
      return 'Champ obligatoire'
    }
  }
  
  public signin(): void {
    console.log(this.signinForm.value)
    this.service.login(this.signinForm.value).subscribe(
      ok=>{localStorage.setItem("token",ok)
      localStorage.setItem("role",ok.roles[0])
      console.log(ok,"ok")
        this._service.saveToken(ok,ok.roles)

        if(this._service.isAdmin()){
this.router.navigate(['dashboard'])}
else{
  this.router.navigate(['dashboard/triDoc1ereage'])
}
      },
      no=>{
        this.show=true;
                this.msg="Vérifiez votre nom utilisateur et/ou mot de passe";
      }

    )
    
    
  
  }
}
