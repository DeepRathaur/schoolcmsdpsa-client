import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonThingService } from './services/common-thing.service';
import {  AuthServiceService } from './services/auth-service.service';
import {  DetectDeviceService } from './services/detect-device.service';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [CommonThingService,  DetectDeviceService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
