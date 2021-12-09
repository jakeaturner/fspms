import { NgModule} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthGuardService } from 'src/auth-guard.service';
import { AuthService } from 'src/auth.service';

//Page Components
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';
import { HistoryComponent } from './history/history.component';

//Modules
import { SharedComponentsModule } from './shared-components/shared-components.module';

//Misc
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ReservationComponent,
    ConfirmReservationComponent,
    ConfirmSuccessComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    SharedComponentsModule,
    FontAwesomeModule
  ],
  providers: [
    Title, AuthGuardService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
