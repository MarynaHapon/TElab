import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonentsComponent } from './abonents/abonents.component';

const routes: Routes = [
  { path: 'abonents', component: AbonentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
