import { Component, OnInit } from '@angular/core';
import { Abonent } from '../abonent';
import { AbonentService } from '../abonent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  abonents: Abonent[] = [];

  constructor(private abonentService: AbonentService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.abonentService.getAbonents()
      .subscribe(abonents => this.abonents = abonents.slice(1, 5));
  }
}
