import { Component, OnInit, Input } from '@angular/core';
import { Abonent } from '../abonent';

@Component({
  selector: 'app-abonent-detail',
  templateUrl: './abonent-detail.component.html',
  styleUrls: ['./abonent-detail.component.css']
})
export class AbonentDetailComponent implements OnInit {
  @Input() abonent: Abonent;
  constructor() { }

  ngOnInit() {
  }

}
