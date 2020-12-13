import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path : 'sign-in' ,
    component :  SignInComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module')
      .then(m => m.RegisterModule),
  },
  { path: '' , redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
    static components = [ SignInComponent ];
}
