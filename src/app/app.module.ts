import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EmployeeListComponent } from './components/Employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/Employee/employee-form/employee-form.component';
import { EmployeeDetailViewComponent } from './components/Employee/employee-detail-view/employee-detail-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    // EmployeeListComponent,
    // EmployeeFormComponent,
    // EmployeeDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class AppModule { }
