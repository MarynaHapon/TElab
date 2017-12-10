import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AbonentsComponent } from './abonents/abonents.component';
import { AbonentDetailComponent } from './abonent-detail/abonent-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AbonentsComponent,
    AbonentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
