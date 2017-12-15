import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Abonent } from '../abonent';
import { AbonentService } from '../abonent.service';

@Component({
  selector: 'app-abonent-search',
  templateUrl: './abonent-search.component.html',
  styleUrls: ['./abonent-search.component.css']
})
export class AbonentSearchComponent implements OnInit {
  abonents$: Observable<Abonent[]>;
  private searchTerms = new Subject<string>();
  constructor(private abonentService: AbonentService) { }
  // push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.abonents$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.abonentService.searchAbonent(term)),
    );
  }

}
