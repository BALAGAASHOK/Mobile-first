import { Employee, IEmployee } from './../employee.model';
import { ApiService } from './../../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }
  employeeData: IEmployee[] = [];
  ngOnInit(): void {
    this.employeeList();
  }
  employeeList() {
    this.apiService.getService(this.apiService.apiList.employeeList).subscribe(response => {
      console.log(response);
      this.employeeData = response;
      console.log(this.employeeData);
    })
  }

  edit(row) {
    // this.router.navigateByUrl('/employee/add-employee'+)
    this.router.navigate(['/employee/add-employee'], { queryParams: { empId: row.id } });

  }
  delete(row) {
    this.apiService.deleteService(this.apiService.apiList.employeeList + "/" + row.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/employee/employee-list']);
    })
  }
  view(row) {
    this.router.navigate(['/employee/view-employee'], { queryParams: { empId: row.id } });
  }
}
