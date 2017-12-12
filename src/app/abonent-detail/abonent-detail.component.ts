import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AbonentService } from '../abonent.service';
import { Abonent } from '../abonent';

@Component({
  selector: 'app-abonent-detail',
  templateUrl: './abonent-detail.component.html',
  styleUrls: ['./abonent-detail.component.css']
})
export class AbonentDetailComponent implements OnInit {
  @Input() abonent: Abonent;

  constructor(
    private route: ActivatedRoute,
    private abonentService: AbonentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAbonent();
  }
  getAbonent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.abonentService.getAbonent(id)
      .subscribe( abonent => this.abonent = abonent );
  }
  setAbonentStatus(state: boolean): void {
    this.abonent.active = state;
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.abonentService.updateAbonent(this.abonent)
      .subscribe(() => this.goBack());
  }
}
