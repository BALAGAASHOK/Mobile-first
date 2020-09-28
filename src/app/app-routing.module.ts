import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guard-service/auth-guard.service';
import { SignInGuardService } from './guard-service/sign-in-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-up',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate:[SignInGuardService]
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate:[SignInGuardService]
  },
  {
    path:'employee',
    loadChildren: () => import('./components/Employee/employee.module').then(m => m.EmployeeModule),
    canLoad:[AuthGuardService]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
