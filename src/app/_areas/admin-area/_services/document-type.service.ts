import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {DocumentType} from '../_entities/document-type';
import {httpOptions} from '../../../_constants/http-option';
import {API_URL} from '../../../_constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get< any >(API_URL.DOCUMENT_TYPE_LIST).pipe(
      tap((x: any ) => console.log(`get ok ${x}`)),
      catchError(this.handleError<any>('document-type'))
    );
  }

  add(newDocumentType: DocumentType): Observable<any> {
    const url = API_URL.DOCUMENT_TYPE_ADD;
    return this.http.post(url, newDocumentType, httpOptions);
  }

  edit(newDocumentType: DocumentType): Observable<any> {
    const url =   API_URL.DOCUMENT_TYPE_EDIT + `${newDocumentType.Id}`    ;
    return this.http.put(url, newDocumentType, httpOptions);
  }

  delete(id: number): Observable<any> {
    const url =   API_URL.DOCUMENT_TYPE_DELETE + `${id}`    ;
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
