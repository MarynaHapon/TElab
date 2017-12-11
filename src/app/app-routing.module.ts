import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonentsComponent } from './abonents/abonents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbonentDetailComponent } from './abonent-detail/abonent-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'abonents', component: AbonentsComponent },
  { path: 'detail/:id', component: AbonentDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
