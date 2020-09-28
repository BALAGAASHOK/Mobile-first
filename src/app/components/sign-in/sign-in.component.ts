import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  signIn() {
    let accessToken = "testTOKEN"
    localStorage.setItem("userInfo", accessToken);
    this.router.navigateByUrl('');

  }

}
