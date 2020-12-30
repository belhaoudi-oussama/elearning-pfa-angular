import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolRegistrationComponent } from './school-registration/school-registration.component';
import { SchoolRegistrationGuard } from './school-registration/school-registration.guard';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentRegistrationGuard } from './student-registration/student-registration.guard';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {
    path : '' ,
    component :  UserRegistrationComponent
  },
  {
    path : 'school_registration/:id' ,
    canActivate : [SchoolRegistrationGuard],
    component :  SchoolRegistrationComponent
  },
  {
    path : 'student_registration/:id' ,
    canActivate : [StudentRegistrationGuard],
    component :  StudentRegistrationComponent
  },
  { path: '**', redirectTo: 'pages/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
    static components = [ SchoolRegistrationComponent, StudentRegistrationComponent, UserRegistrationComponent ];
}
