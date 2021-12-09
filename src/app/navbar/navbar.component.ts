import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;
  authMessage = 'Welcome!';
  
  constructor(private router: Router, private authService: AuthService) { 
    this.loggedIn = this.authService.isUserLoggedIn();
  }

  ngOnInit(): void {
    if (this.loggedIn) {
      this.authMessage = 'Log Out';
    }
    else {
      this.authMessage = 'Welcome!';
    }
  }

  onLogOut() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('savedReservations');
    this.router.navigate(["login"]);
  }
}
