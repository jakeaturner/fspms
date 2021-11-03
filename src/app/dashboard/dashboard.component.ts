import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstName = '';
  lastName = '';

  constructor() {
    this.firstName = (localStorage.getItem('firstName') || '' );
    this.lastName = (localStorage.getItem('lastName') || '' );
  }

  ngOnInit(): void {
  }

}
