import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterService } from '../register.service';
import { User } from './user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  newUser =new User();

  hide :boolean =true;
  ConfirmPasswordMatch :boolean=true;
  constructor(private register : RegisterService ,private router:Router,private auth:AuthService) { }


  onSubmit(registerForm:NgForm){
      if(registerForm.valid && this.newUser.password == this.newUser.confirmPassword){
          this.register.createUser(this.newUser).subscribe(
            next=>{
                if(next.id){
                  this.router.navigate([`/auth/register/${this.newUser.type}_registration`,next.id])
                }
              },
            error=>{
                console.log(error);
            }
          );
      }
  }

  ngOnInit(): void {
    if(this.auth.isSignIn()){
      this.router.navigate(['/home']);
    }

  /*  this.register.createUser({
      email : 'oussama@gmail.com',
      password : 'Qwerty123456',
      regCompleted : false,
      confirmPassword : 'Qwerty123456',
      type : 'school'
    }).subscribe();
    */
  }
}
