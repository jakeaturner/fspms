import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';

//Misc
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'



@NgModule({
  declarations: [
    ReservationCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ReservationCardComponent
  ]
})
export class SharedComponentsModule { }
