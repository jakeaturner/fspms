import { Component, OnInit } from '@angular/core';

interface IConfirmedReservations {
  id?: number;
  dayOfWeek: string;
  date: string;
  timeslot: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  confirmedReservations: Array<IConfirmedReservations> = [];

  constructor() { }

  ngOnInit() {
    this.confirmedReservations = JSON.parse(localStorage.getItem('savedReservations') || '{}');
  }

}
