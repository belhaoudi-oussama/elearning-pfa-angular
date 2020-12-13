import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private register : RegisterService) { }

  ngOnInit(): void {

    this.register.createUser({
      email : 'oussama@gmail.com',
      password : 'Qwerty123456',
      confirmPassword : 'Qwerty123456',
      type : 'school'
    }).subscribe();
  }

}
