import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicStudent} from '../_entities/basic-student';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {catchError, tap} from 'rxjs/operators';
import {Condition} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }



  getAllStudent(): Observable<any> {
    return this.http.get< any >(API_URL.STUDENT_MANEGEMENT_LIST).pipe(
      tap((x: any ) => console.log(`get ok ${x}`))
    );
  }

  getEducationProgram(): Observable<any> {
    return this.http.get< any >(API_URL.EDUCATION_PROGRAM).pipe(
      tap((x: any ) => console.log(`get ok ${x}`))
    );
  }
}
