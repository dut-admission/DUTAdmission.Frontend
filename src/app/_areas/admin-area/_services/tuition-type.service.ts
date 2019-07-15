import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {httpOptions} from '../../../_constants/http-option';
import {TuitionType} from '../_entities/tuition-type';
import {API_URL} from '../../../_constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class TuitionTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get< any >(API_URL.TUITION_TYPE_LIST).pipe(
      tap((x: any ) => console.log(`get ok ${x}`)),
      catchError(this.handleError<any>('tuition-type'))
    );
  }

  add(newTuitionType: TuitionType): Observable<any> {
    const url = API_URL.TUITION_TYPE_ADD;
    return this.http.post(url, newTuitionType, httpOptions);
  }

  edit(newTuitionType: TuitionType): Observable<any> {
    const url =  API_URL.TUITION_TYPE_EDIT  + `${newTuitionType.Id}`    ;
    return this.http.put(url, newTuitionType, httpOptions);
  }

  delete(id: number): Observable<any> {
    const url =   API_URL.TUITION_TYPE_DELETE + `${id}`    ;
    return this.http.delete(url, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
