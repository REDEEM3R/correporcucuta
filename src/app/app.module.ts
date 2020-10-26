import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupModule } from './components/signup/signup.module';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { VirtualRaceComponent } from './components/virtual-race/virtual-race.component';
import { TemporaryComponent } from './components/temporary/temporary.component';
import { RaceDayComponent } from './components/race-day/race-day.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

// import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyDKL1WU5Ep5-ikHaUjF3crAqJ-izOjrHS8",
  authDomain: "correporcucuta.firebaseapp.com",
  databaseURL: "https://correporcucuta.firebaseio.com",
  projectId: "correporcucuta",
  storageBucket: "correporcucuta.appspot.com",
  messagingSenderId: "648158870293",
  appId: "1:648158870293:web:cd5390c83554d3c504071c",
  measurementId: "G-SB463QMBV5"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    VirtualRaceComponent,
    TemporaryComponent,
    RaceDayComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    FormsModule ,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFirestore,
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
