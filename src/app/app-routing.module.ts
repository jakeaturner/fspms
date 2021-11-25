import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuardService]},
  { path: 'reservation/confirm', component: ConfirmReservationComponent, data: {some_data : 'some value'}, canActivate: [AuthGuardService]},
  { path: 'reservation/success', component: ConfirmSuccessComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }