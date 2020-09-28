import { Employee } from './../employee.model';
import { ApiService } from './../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styles: [
  ]
})
export class EmployeeDetailViewComponent implements OnInit {
  employee: Employee = {};
  params = {};
  employeeId: number;
  constructor(private route: ActivatedRoute, private ApiService: ApiService, private router: Router) { }
  ngOnInit(): void {
    console.log(this.employee);
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
    this.ApiService.getService(this.ApiService.apiList.employeeList + "/" + id).subscribe(response => {
      console.log(response);
      this.employee = response;
      console.log(this.employee);
    })
  }
}
