import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  signUp() {
    let accessToken = "testTOKEN"
    localStorage.setItem("userInfo", accessToken);
    this.router.navigateByUrl('');

  }
}
