import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

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
}
