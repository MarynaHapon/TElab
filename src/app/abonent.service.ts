import { Injectable } from '@angular/core';
import { Abonent } from './abonent';
import { ABONENTS } from './mock-abonents';

@Injectable()
export class AbonentService {

  constructor() { }

  getAbonents(): Abonent[] {
    return ABONENTS;
  }
}
