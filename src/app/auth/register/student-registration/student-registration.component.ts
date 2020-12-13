import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  constructor(private register : RegisterService , private auth : AuthService) { }

  ngOnInit(): void {
  this.register.asignUserToStudent({
    firstName : 'oussama',
    lastName  : 'virtek',
    phoneNumber : '0666666666'
  }).subscribe(
      next=>{
        this.auth.setLocalStorage(next);
      },
      error=>{
        console.log(error)
      }
    );
  }
}
