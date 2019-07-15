import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicStudent} from '../_entities/basic-student';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {catchError, tap} from 'rxjs/operators';
import {Condition} from 'selenium-webdriver';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }


  getAllStudent(condition): Observable<any> {
    return this.http.post<any>(API_URL.STUDENT_MANEGEMENT_LIST, condition, httpOptions);
  }

  updateStudent(student: BasicStudent): Observable<BasicStudent> {
    return this.http.put<BasicStudent>(API_URL.STUDENT_MANEGEMENT_UPDATE, student, httpOptions);
  }



  deleteStudent(id: any): Observable<any> {
    return this.http.delete<any>(`${API_URL.STUDENT_MANEGEMENT_DELETE}/${id}`);
  }
}
