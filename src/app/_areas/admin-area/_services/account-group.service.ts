import {Injectable} from '@angular/core';
import {AccountGroup} from '../_entities/account-group';
import {Observable, of} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {catchError, tap} from 'rxjs/operators';
import {TuitionType} from '../_entities/tuition-type';
import {httpOptions} from '../../../_constants/http-option';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountGroupService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get< any >(API_URL.ACCOUNT_GROUP_MANEGEMENT_LIST).pipe(
      tap((x: any ) => console.log(`get ok ${x}`)),
      catchError(this.handleError<any>('tuition-type'))
    );
  }

  add(accountGroup: AccountGroup): Observable<any> {
    const url = API_URL.ACCOUNT_GROUP_MANEGEMENT_ADD;
    return this.http.post(url, accountGroup, httpOptions);
  }

  edit(accountGroup: AccountGroup): Observable<any> {
    const url =  API_URL.ACCOUNT_GROUP_MANEGEMENT_EDIT  + '/' + `${accountGroup.Id}` + '/edit'   ;
    return this.http.put(url, accountGroup, httpOptions);
  }

  delete(id: number): Observable<any> {
    const url =   API_URL.ACCOUNT_GROUP_MANEGEMENT_DELETE + `${id}` ;
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
