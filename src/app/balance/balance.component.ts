import { Component, OnInit, Input } from '@angular/core';
import { Abonent } from '../abonent';
import { AbonentService } from '../abonent.service';

let currentItem: Abonent;
let currentId: number;

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() abonent: Abonent;
  abonents: Abonent[];
  constructor(private abonentService: AbonentService) { }

  ngOnInit() {
    this.getAbonents();
  }
  getAbonents(): void {
    this.abonentService.getAbonents()
      .subscribe(abonents => this.abonents = abonents);
  }
  getCurrentId(): number {
    return currentId;
  }
  searchUser(firstName: string, lastName: string, telNumber: number) {
    firstName = firstName.trim();
    lastName = lastName.trim();
    currentId = null;
    if (!firstName || !lastName || !telNumber) { }
    this.abonents.forEach(function (item) {
      if (firstName === item.firstName && lastName === item.lastName && Number( telNumber ) === item.telNumber ) {
        currentId = item.id;
        return currentItem = item;
      }
    });
  }
  updateBalance(inputCashBalance: string) {
    this.abonentService.updateAbonent({
      id: currentItem.id,
      firstName: currentItem.firstName,
      lastName: currentItem.lastName,
      telNumber: currentItem.telNumber,
      cashBalance: Number(inputCashBalance) + currentItem.cashBalance,
      active: currentItem.active
    }).subscribe(abonents => this.abonents = abonents );
    this.getAbonents();
  }
}

