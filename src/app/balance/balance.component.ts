import { Component, OnInit } from '@angular/core';
import { Abonent } from '../abonent';
import { AbonentService } from '../abonent.service';


let currentId: number;

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  abonents: Abonent[];
  abonent: Abonent;
  constructor(private abonentService: AbonentService) { }

  ngOnInit() {
    this.getAbonents();
  }
  getAbonents(): void {
    this.abonentService.getAbonents()
      .subscribe(abonents => this.abonents = abonents);
  }
  getId(): number {
    return currentId;
  }
  searchUser(firstName: string, lastName: string, telNumber: number) {
    firstName = firstName.trim();
    lastName = lastName.trim();
    currentId = null;
    if (!firstName || !lastName || !telNumber) { }
    this.abonents.forEach(function (item) {
      if (firstName === item.firstName && lastName === item.lastName && Number( telNumber ) === item.telNumber ) {
        return currentId = item.id;
      }
    });
  }
}

