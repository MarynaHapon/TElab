import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title';
  task = 'Система Телефонная станция. ' +
    'Абонент оплачивает Счет за разговоры и Услуги, ' +
    'может попросить Администратора сменить номер и ' +
    'отказаться от услуг. Администратор изменяет номер, ' +
    'Услуги и временно отключает Абонента за неуплату.';
}
