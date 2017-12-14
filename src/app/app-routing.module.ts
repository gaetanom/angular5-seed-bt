import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
//import { StatsComponent } from './stats/stats.component';

/*const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stats/:type', component: StatsComponent },
];
*/
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  {
    path: 'stats/:type',
    loadChildren: 'app/stats/stats.module#StatsModule'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  /*imports: [
    CommonModule
  ],*/
  // declarations: []
})
export class AppRoutingModule { }
