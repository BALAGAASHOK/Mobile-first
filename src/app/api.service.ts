import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;
  apiList = {
    employeeList: "employees"
  }
  constructor(
    private http: HttpClient
  ) { }
  getService(url: string) {
    return this.http
      .get(this.baseUrl + url)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
  }

  postService(url, data) {
    return this.http
      .post(this.baseUrl + url, data)
      .pipe(
        map((response: any) => {
          return response;
        }, (error) => {
          console.log("in get server", error);

        })
      )
  }
  putService(url, data) {
    return this.http
      .put(this.baseUrl + url, data)
      .pipe(
        map((response: any) => {
          return response;
        }, (error) => {
          console.log("in get server", error);

        })
      )
  }
  deleteService(url) {
    return this.http
      .delete(this.baseUrl + url)
      .pipe(
        map((response: any) => {
          return response;
        })
      )

  }
}
