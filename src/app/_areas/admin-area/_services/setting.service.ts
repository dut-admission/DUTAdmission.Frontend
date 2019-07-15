import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  getSettingSystem(): Observable<any> {
    return this.http.get< any >(API_URL.SETTING_SYSTEM).pipe(
      tap((x: any ) => console.log(`get ok ${x}`))
    );
  }
}
