import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  authErrorMessage = 'Unknown authentication error.'
  authError = false;

  firstName = '';
  lastName = '';

  constructor(private router: Router, private route: ActivatedRoute,) {
    localStorage.removeItem('isAuthenticated');
  }
  ngOnInit() {
  }

  onSubmit() {
    if (this.email == '' || this.email == '') {
      this.authError = true;
      this.authErrorMessage = "Email and password are required!";
    }
    else {
      if (this.email == 'test' && this.password == 'test') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('firstName', 'Test');
        localStorage.setItem('lastName', 'User');
        this.authError = false;
        this.authErrorMessage = '';
        this.router.navigate(["dashboard"]);
      }
      else {
        this.password = '';
        this.authError = true;
        this.authErrorMessage = 'Invalid credentials. Please try again.'
      }
    }
  }
}
