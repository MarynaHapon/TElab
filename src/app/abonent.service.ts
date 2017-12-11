import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Abonent } from './abonent';
import { ABONENTS } from './mock-abonents';

@Injectable()
export class AbonentService {

  constructor() { }

  getAbonents(): Observable<Abonent[]> {
    return of(ABONENTS);
  }
  getAbonent(id: number): Observable<Abonent> {
    return of (ABONENTS.find(abonent => abonent.id === id ));
  }
}
