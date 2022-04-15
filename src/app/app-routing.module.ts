import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ToxinsComponent} from "./toxins/toxins.component";
import {FoodComponent} from "./food/food.component";
import {EnvironmentComponent} from "./environment/environment.component";
import {SummaryComponent} from "./summary/summary.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'toxins',
    component: ToxinsComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'environment',
    component: EnvironmentComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
