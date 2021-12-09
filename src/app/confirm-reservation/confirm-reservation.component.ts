import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css']
})
export class ConfirmReservationComponent implements OnInit {
  selectedTimeslots: any;
  stateObject: any;
  tempArray = new Array;

  constructor(private location:Location, private router:Router) { 
  }

  ngOnInit() {
    this.stateObject = this.location.getState();
    this.selectedTimeslots = this.stateObject[Object.keys(this.stateObject)[0]];
  }

  moveToSuccess() {
    this.router.navigateByUrl('/reservation/success');
    this.storeReservations();
  }

  storeReservations() {
    if(localStorage.getItem('savedReservations') === null) {
      localStorage.setItem('savedReservations', JSON.stringify(this.selectedTimeslots));
    }
    else {
      this.tempArray = JSON.parse(localStorage.getItem('savedReservations') || '{}');
      this.tempArray.push.apply(this.tempArray, this.selectedTimeslots);
      localStorage.setItem('savedReservations', JSON.stringify(this.tempArray));
    }
  }
}
