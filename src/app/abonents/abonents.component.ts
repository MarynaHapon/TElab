import { Component, OnInit } from '@angular/core';
import { Abonent } from '../abonent';
import { ABONENTS } from '../mock-abonents';

@Component({
  selector: 'app-abonents',
  templateUrl: './abonents.component.html',
  styleUrls: ['./abonents.component.css']
})

export class AbonentsComponent implements OnInit {
  abonent: Abonent = {
    id: 1,
    firstName: 'Maryna',
    lastName: 'Hapon',
    telNumber: 380681154644,
    cashBalance: 34000,
    active: true
  };
  abonents = ABONENTS;
  selectedAbonent: Abonent;

  constructor() { }

  ngOnInit() {
  }
  onSelect(abonent: Abonent): void {
    this.selectedAbonent = abonent;
  }

}
