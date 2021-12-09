import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';

//Misc
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReservationsHeaderComponent } from './reservations-header/reservations-header.component'



@NgModule({
  declarations: [
    ReservationCardComponent,
    ReservationsHeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ReservationCardComponent,
    ReservationsHeaderComponent
  ]
})
export class SharedComponentsModule { }
