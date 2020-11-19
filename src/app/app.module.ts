import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WorksCitedComponent } from './works-cited/works-cited.component';
import { HomeComponent } from './home/home.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import { ChristianityComponent } from './christianity/christianity.component';
import {CommonModule} from '@angular/common';
import { IslamComponent } from './islam/islam.component';
import { BuddhismComponent } from './buddhism/buddhism.component';
import { SummaryComponent } from './summary/summary.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WorksCitedComponent,
    HomeComponent,
    SimpleCardComponent,
    ChristianityComponent,
    IslamComponent,
    BuddhismComponent,
    SummaryComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
