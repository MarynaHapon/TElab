import { Component } from '@angular/core';

const ADMIN = 'admin';
const USER = 'user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Телефонная станция';
  role = ADMIN;
  navAdminLinks = [
    {
      label: 'Главная',
      path: '/admin/dashboard'
    },
    {
      label: 'Абоненты',
      path: '/admin/abonents'
    }
  ];
  navUserLinks = [
    {
      label: 'Регистрация',
      path: '/user/registration'
    }
  ];
  setAdminRole(): string {
    return this.role = ADMIN;
  }
  setUserRole(): string {
    return this.role = USER;
  }
}
