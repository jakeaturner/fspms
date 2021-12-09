import { Component, OnInit } from '@angular/core';
import { faCamera, faClock } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {
  @Input() reservation = {dayOfWeek: '', date: '', timeslot: ''};
  faClock= faClock;
  constructor() { }

  ngOnInit(): void {
  }
}
