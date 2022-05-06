import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.initFormBuilder()
  }

  private initFormBuilder(): void{
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]],
    })
  }

  public errorMessage(formControlName: string, email?: boolean): string | void {
    if (this.signupForm.controls[formControlName]?.errors?.['required']){
      return 'Champ obligatoire'
    }else if (email && this.signupForm.controls[formControlName]?.errors?.['email']) {
      return 'Adresse e-mail invalide'
    }
  }

  public signup(): void {
      console.log(this.signupForm.value);
      const u=this.signupForm.value
      u.role="user"
      console.log(u)
      this.service.register(u).subscribe(
        ok=>{
          alert("vous avez ajoutez un utilisateur")
          this.router.navigate(['/'])
        },
        no=>{
          alert("warning")
        }
      )

  }
}
