import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {DocumentType} from '../_entities/document-type';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContact(): Observable<any> {
    return this.http.get< any >(API_URL.CONTACT_MANEGEMENT_LIST).pipe(
      tap((x: any ) => console.log(`get ok ${x}`))
    );
  }

  getStatusContact(): Observable<any> {
    return this.http.get< any >(API_URL.STATUS_CONTACT_MANEGEMENT_LIST).pipe(
      tap((x: any ) => console.log(`get ok ${x}`))
    );
  }

  send(msg: string, id: number): Observable<any> {
    const url = API_URL.CONTACT_MANEGEMENT_SEND + `${id}` + '/reply';
    return this.http.put(url, msg, httpOptions);
  }
}
