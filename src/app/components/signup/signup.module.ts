import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Run21kComponent } from './run21k/run21k.component';
import { Run10kComponent } from './run10k/run10k.component';
import { Run5kComponent } from './run5k/run5k.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [SignupComponent, Run21kComponent, Run10kComponent, Run5kComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    SignupComponent,
    Run5kComponent,
    Run10kComponent,
    Run21kComponent,
  ]
})
export class SignupModule { }
