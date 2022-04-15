import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import {CommonModule} from '@angular/common';
import {SimpleCardComponent} from "./components/simple-card/simple-card.component";
import {StoryService} from "./services/story.service";
import { ToxinsComponent } from './toxins/toxins.component';
import { FoodComponent } from './food/food.component';
import { EnvironmentComponent } from './environment/environment.component';
import { SummaryComponent } from './summary/summary.component';
import {StepperComponent} from "./components/shared/stepper/stepper.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SimpleCardComponent,
    ToxinsComponent,
    FoodComponent,
    EnvironmentComponent,
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
  providers: [ StoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
