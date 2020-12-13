import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolRegistrationComponent } from './school-registration/school-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {
    path : '' ,
    component :  UserRegistrationComponent
  },
  {
    path : 'school-registration' ,
    component :  SchoolRegistrationComponent
  },
  {
    path : 'student-registration' ,
    component :  StudentRegistrationComponent
  },
  { path: '' , redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
    static components = [ SchoolRegistrationComponent, StudentRegistrationComponent, UserRegistrationComponent ];
}
