import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Abonent } from './abonent';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AbonentService {
  constructor(
    private http: HttpClient,
  ) { }

  private abonentsUrl = 'api/abonents';  // URL to web api
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  updateAbonent (abonent: Abonent): Observable<any> {
    return this.http.put(this.abonentsUrl, abonent, httpOptions).
      pipe(
        catchError(this.handleError<any>('updateAbonent'))
      );
  }
  /** GET abonents from the server */
  getAbonents(): Observable<Abonent[]> {
    return this.http.get<Abonent[]>(this.abonentsUrl)
      .pipe(
        catchError(this.handleError('getAbonents', []))
      );
  }
  getAbonent(id: number): Observable<Abonent> {
    const url = `${this.abonentsUrl}/${id}`;
    return this.http.get<Abonent>(url).pipe(
      catchError(this.handleError<Abonent>(`getAbonent id=${id}`))
    );
  }
  /** POST: add a new abonent to the server */
  addAbonent(abonent: Abonent): Observable<Abonent> {
    return this.http.post<Abonent>(this.abonentsUrl, abonent, httpOptions)
      .pipe(
      catchError(this.handleError<Abonent>('addHero'))
    );
  }
  /* GET abonent whose name contains search term */
  searchAbonent(term: string): Observable<Abonent[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Abonent[]>(`api/abonents/?lastName=${term}`).pipe(
      catchError(this.handleError<Abonent[]>('searchHeroes', []))
    );
  }
}
