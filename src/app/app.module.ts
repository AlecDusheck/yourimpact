import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WorksCitedComponent } from './components/works-cited/works-cited.component';
import { HomeComponent } from './components/home/home.component';
import { SimpleCardComponent } from './components/shared/simple-card/simple-card.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import { ChristianityComponent } from './components/christianity/christianity.component';
import {CommonModule} from '@angular/common';
import { IslamComponent } from './components/islam/islam.component';
import { BuddhismComponent } from './components/buddhism/buddhism.component';
import { SummaryComponent } from './components/summary/summary.component';
import { StepperComponent } from './components/shared/stepper/stepper.component';
import { SourcesCardComponent } from './components/shared/sources-card/sources-card.component';
import { MapCardComponent } from './components/shared/map-card/map-card.component';

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
    StepperComponent,
    SourcesCardComponent,
    MapCardComponent
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
