import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {StudentProfile} from '../../public-area/_entities/student-profile';
import {API_URL} from '../../../_constants/api-url';
import {HttpClient} from '@angular/common/http';
import {EmployeeProfile} from '../_entities/employee-profile';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {

  constructor(private http: HttpClient) { }

  getEmployeeProfile(): Observable<EmployeeProfile> {
    return this.http.get<EmployeeProfile>(API_URL.EMPLOYEE_PROFILE);
  }

  saveEmployeeProfile(profile: EmployeeProfile): Observable<any> {
    return this.http.put<any>(API_URL.EMPLOYEE_UPDATE_PROFILE, profile, httpOptions);
  }


}
