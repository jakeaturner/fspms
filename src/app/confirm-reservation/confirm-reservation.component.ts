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
  constructor(private location:Location) { 
  }

  ngOnInit(): void{
    this.stateObject = this.location.getState();
    this.selectedTimeslots = this.stateObject[Object.keys(this.stateObject)[0]];
  }

}
