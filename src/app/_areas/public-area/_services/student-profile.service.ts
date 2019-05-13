import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentProfile} from '../_entities/student-profile';
import {API_URL} from '../../../_constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  constructor(private http: HttpClient) {
  }

  getStudentProfile(): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(API_URL.STUDENT_PROFILE);
  }
}
