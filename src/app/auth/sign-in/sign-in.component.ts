import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide :boolean = true;
  email: string="";
  password :string="";
  BackEndError :boolean=false;
  errorMessage :string="";


  constructor(private signIn:SignInService ,private auth:AuthService,private route:Router ) { }

  signInProcesses(data :any){
    console.log(data);
    if(data.regCompleted === false){
        let type = `${data.type}_registration`
        this.route.navigate([`/auth/register/${type}`,data.id]);
    }else if(data.regCompleted === true){
        this.auth.setLocalStorage(data);
        this.route.navigate(['/home']);
    }
  }

  onSubmit(loginForm: NgForm){
    if(loginForm.valid){
      let data ={
        email :this.email,
        password :this.password
      }
      this.signIn.signInPost(data).subscribe(
        next=>{
            if(next.success){
              this.BackEndError=false;
              this.errorMessage='';
              this.signInProcesses(next);
            }
        },
        error=>{
          if(error){
            this.BackEndError=true;
            this.errorMessage=error;
          }
        }
      );
    }
  }

  ngOnInit(): void {
      if(this.auth.isSignIn()){
        this.route.navigate(['/home']);
      }
  }

}
