import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Achievement, FamilyMember, HighSchoolResult, StudentProfile} from '../_entities/student-profile';
import {API_URL} from '../../../_constants/api-url';
import {ProfileLibrary} from '../_entities/profile-library';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  constructor(private http: HttpClient) {
  }

  getStudentProfile(): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(API_URL.STUDENT_PROFILE);
  }

  getProfileLibrary(): Observable<ProfileLibrary> {
    return this.http.get<ProfileLibrary>(API_URL.PROFILE_LIBRARY);
  }

  saveFamilyMemeber(newMember: FamilyMember): Observable<any> {
    return this.http.post<any>(API_URL.PROFILE_SAVE_MEMBER, newMember, httpOptions);
  }
  saveLearningResult(newResult: HighSchoolResult): Observable<any> {
    return this.http.post<any>(API_URL.PROFILE_SAVE_RESULT, newResult, httpOptions);
  }
  saveAchievement(newAchievement: Achievement): Observable<any> {
    return this.http.post<any>(API_URL.PROFILE_SAVE_ACHIEVEMENT, newAchievement, httpOptions);
  }

}
