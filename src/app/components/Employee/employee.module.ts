import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from 'src/app/guard-service/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    canActivateChild:[AuthGuardService],
    children:[
      {
        path: "employee-list",
        component: EmployeeListComponent
      },
      {
        path: 'add-employee',
        component: EmployeeFormComponent
      },
      {
        path: 'view-employee',
        component: EmployeeDetailViewComponent
      }
    ]
  }
  
]

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailViewComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
