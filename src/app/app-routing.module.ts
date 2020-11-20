import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WorksCitedComponent} from './components/works-cited/works-cited.component';
import {ChristianityComponent} from './components/christianity/christianity.component';
import {IslamComponent} from './components/islam/islam.component';
import {BuddhismComponent} from './components/buddhism/buddhism.component';
import {SummaryComponent} from './components/summary/summary.component';


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
