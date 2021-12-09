import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-header',
  templateUrl: './reservations-header.component.html',
  styleUrls: ['./reservations-header.component.css']
})
export class ReservationsHeaderComponent implements OnInit {
  savedReservations: any;
  reservationsCount: any;
  constructor() { }

  ngOnInit() {
    this.countReservations();
  }

  countReservations() {
    this.savedReservations = JSON.parse(localStorage.getItem('savedReservations') || '{}');
    this.reservationsCount = this.savedReservations.length;
  }
}
