import { Component, OnInit } from '@angular/core';

interface IConfirmedReservations {
  id?: number;
  date: string;
  time: string;
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
    this.confirmedReservations = [
      {
        id: 1,
        date: '12/11/2021',
        time: '10:00am'
      },
      {
        id: 2,
        date: '12/12/2021',
        time: '10:00am'
      }
    ]
  }

}
