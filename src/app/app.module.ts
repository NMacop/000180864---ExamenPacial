import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterSolicitudCarComponent } from './inscriptions/register-solicitud-car/register-solicitud-car.component';
import { ReportSolicitudCarComponent } from './reports/report-solicitud-car/report-solicitud-car.component';
import {UiModule} from "./ui/ui.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    RegisterSolicitudCarComponent,
    ReportSolicitudCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
