import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirm-success',
  templateUrl: './confirm-success.component.html',
  styleUrls: ['./confirm-success.component.css']
})
export class ConfirmSuccessComponent implements OnInit {
  selectedTimeslots: Array<Object> = [];
  stateObject: any;
  constructor(private location:Location) { 

  }

  ngOnInit(): void {
    this.stateObject = this.location.getState();
    this.selectedTimeslots.push(this.stateObject);
    console.log(this.selectedTimeslots);
    // for (var selection in this.selectedTimeslots) {
    //   console.log(selection);
    // }
  }

}
