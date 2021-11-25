import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  checklist:any[] = [];
  checkedList:any;
  stateList:any[] = [];

  uncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = false;
    }
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
  }

  moveToConfirm() {
    this.getCheckedItemList();
    this.stateList = new Array(this.checkedList);
    this.router.navigateByUrl('/reservation/confirm', { state: this.stateList });
  }

  constructor(private router: Router) { 
    this.checklist = [
      {id:1, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '10am - 12pm', isSelected: false, available: true},
      {id:2, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '10am - 12pm', isSelected: false, available: true},
      {id:3, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '10am - 12pm', isSelected: false, available: true},
      {id:4, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '10am - 12pm', isSelected: false, available: true},
      {id:5, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '10am - 12pm', isSelected: false, available: true},
      {id:6, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '10am - 12pm', isSelected: false, available: true},
      {id:7, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '10am - 12pm', isSelected: false, available: true},

      {id:8, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},
      {id:9, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},
      {id:10, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},
      {id:11, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},
      {id:12, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},
      {id:13, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},
      {id:14, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '12pm - 2pm', isSelected: false, available: true},

      {id:15, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},
      {id:16, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},
      {id:17, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},
      {id:18, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},
      {id:19, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},
      {id:20, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},
      {id:21, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '2pm - 4pm', isSelected: false, available: true},

      {id:22, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},
      {id:23, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},
      {id:24, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},
      {id:25, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},
      {id:26, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},
      {id:27, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},
      {id:28, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '4pm - 6pm', isSelected: false, available: true},

      {id:29, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},
      {id:30, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},
      {id:31, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},
      {id:32, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},
      {id:33, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},
      {id:34, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},
      {id:35, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '6pm - 8pm', isSelected: false, available: true},

      {id:36, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},
      {id:37, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},
      {id:38, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},
      {id:39, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},
      {id:40, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},
      {id:41, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},
      {id:42, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '8pm - 10pm', isSelected: false, available: true},

      {id:43, dayOfWeek: 'Monday', date: '11/22/2021', timeslot: '10pm - 12pm', isSelected: false},
      {id:44, dayOfWeek: 'Tuesday', date: '11/23/2021', timeslot: '10pm - 12pm', isSelected: false},
      {id:45, dayOfWeek: 'Wednesday', date: '11/24/2021', timeslot: '10pm - 12pm', isSelected: false},
      {id:46, dayOfWeek: 'Thursday', date: '11/25/2021', timeslot: '10pm - 12pm', isSelected: false},
      {id:47, dayOfWeek: 'Friday', date: '11/26/2021', timeslot: '10pm - 12pm', isSelected: false},
      {id:48, dayOfWeek: 'Saturday', date: '11/27/2021', timeslot: '10pm - 12pm', isSelected: false},
      {id:49, dayOfWeek: 'Sunday', date: '11/28/2021', timeslot: '10pm - 12pm', isSelected: false},
    ];
  }

  ngOnInit(): void {
  }

}
