import { Component, OnInit } from '@angular/core';
import {Abonent} from '../abonent';
import { AbonentService } from '../abonent.service';

const active = true;
const cashBalance = 0;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  abonents: Abonent[];
  constructor(private abonentService: AbonentService) { }

  ngOnInit() {
    this.getAbonents();
  }
  getAbonents(): void {
    this.abonentService.getAbonents()
      .subscribe(abonents => this.abonents = abonents);
  }
  addUser(firstName: string, lastName: string, telNumber: number): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    if (!firstName || !lastName || !telNumber) { return; }
    this.abonentService.addAbonent({ firstName, lastName, telNumber, cashBalance, active} as Abonent)
      .subscribe(abonent => {
        this.abonents.push(abonent);
      });
  }
}
