import { Component, OnInit } from '@angular/core';
import { Abonent } from '../abonent';
import { AbonentService } from '../abonent.service';

@Component({
  selector: 'app-abonents',
  templateUrl: './abonents.component.html',
  styleUrls: ['./abonents.component.css']
})

export class AbonentsComponent implements OnInit {
  abonents: Abonent[];
  selectedAbonent: Abonent;

  constructor(private abonentService: AbonentService) { }

  ngOnInit() {
    this.getAbonents();
  }
  onSelect(abonent: Abonent): void {
    this.selectedAbonent = abonent;
  }
  getAbonents(): void {
    this.abonentService.getAbonents()
      .subscribe(abonents => this.abonents = abonents);
  }
}
