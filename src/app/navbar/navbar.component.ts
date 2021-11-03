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
  
  constructor(private router: Router, private authService: AuthService) { 
    this.loggedIn = this.authService.isUserLoggedIn();
  }

  ngOnInit(): void {
    
  }

  onLogOut() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(["login"]);
  }
}
