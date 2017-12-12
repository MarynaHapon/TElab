import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonentsComponent } from './abonents/abonents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbonentDetailComponent } from './abonent-detail/abonent-detail.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component'


const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/abonents', component: AbonentsComponent },
  { path: 'admin/detail/:id', component: AbonentDetailComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/registration', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
