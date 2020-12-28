import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.scss']
})
export class SchoolRegistrationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
     console.log(this.router.getCurrentNavigation());

  }
}
