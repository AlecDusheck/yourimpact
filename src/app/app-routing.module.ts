import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WorksCitedComponent} from './works-cited/works-cited.component';
import {ChristianityComponent} from './christianity/christianity.component';
import {IslamComponent} from './islam/islam.component';
import {BuddhismComponent} from './buddhism/buddhism.component';
import {SummaryComponent} from './summary/summary.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'christianity',
    component: ChristianityComponent
  },
  {
    path: 'islam',
    component: IslamComponent
  },
  {
    path: 'buddhism',
    component: BuddhismComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'cited',
    component: WorksCitedComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
