import { ApiService } from './../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
  ]
})
export class EmployeeFormComponent implements OnInit {
  rolesList = [{
    name: "Developer",
    value: "DEV"
  },
  {
    name: "Tech Lead",
    value: "LEAD"
  },
  {
    name: "QA",
    value: "QA"
  }];
  model: Employee = new Employee();
  params = {};
  employeeId: number;
  constructor(private route: ActivatedRoute, private ApiService: ApiService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.model);
    this.route.queryParamMap
      .subscribe((params) => {
        this.params = { ...params.keys, ...params };
        console.log(this.params['params'].empId);
        this.employeeId = Number(this.params['params'].empId);
        if (this.employeeId) {
          this.getEmployeeDetailsById(this.employeeId);
        }
      }
      );
  }
  getEmployeeDetailsById(id) {
    // this.ApiService.getService(this.ApiService.apiList.employeeList + "/" + id).subscribe(response => {
    //   console.log(response);

    // })
    this.ApiService.getService(this.ApiService.apiList.employeeList + "/" + id).subscribe(response => {
      console.log(response);
      this.model = response;
      console.log(this.model);
    })
  }
  onSubmit() {
    if (this.model.id) {
      this.updateEmployee()
    } else {
      this.addEmployee();
    }
  }
  addEmployee() {
    this.ApiService.postService(this.ApiService.apiList.employeeList, this.model).subscribe(response => {
      console.log(response);
      this.router.navigate(['/employee/employee-list']);
    })
  }
  updateEmployee() {
    this.ApiService.putService(this.ApiService.apiList.employeeList + "/" + this.model.id, this.model).subscribe(response => {
      console.log(response);
      this.router.navigate(['/employee/employee-list']);
    })
  }
}

