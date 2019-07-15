import {Injectable} from '@angular/core';
import {Tuition} from '../_entities/tuition';
import {TuitionType} from '../_entities/tuition-type';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../_constants/api-url';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class TuitionService {

  constructor(private http: HttpClient) {
  }

  getTuitions(condition): Observable<any> {
    return this.http.post<any>(API_URL.TUITION_LIST, condition, httpOptions);
  }

  getTuitionsLocal() {
    const tuitions: Tuition[] = [];
    for (let index = 0; index < 30; index++) {
      tuitions.push(
        {
          ClassId: index % 4,
          ClassName: `14T${index}`,
          FirstName: 'Trinh',
          Id: index,
          IdentityNumber: '205796190',
          IsPaid: (index % 2 === 0),
          LastName: 'An',
          Receipt: null,
          TotalTuition: index * 1000,
          TuitionFee: index * 100
        }
      );
    }
    return tuitions;
  }

  getTuitionTypes() {
    const tuitionTypes: TuitionType[] = [];
    for (let index = 0; index < 5; index++) {
      tuitionTypes.push(
        {Description: 'Tham gia học quân sự', LearningYear: 0, Money: 100000 * (index + 1), Name: 'Học phí giáo dục quốc phòng', Id: index}
      );
    }
    return tuitionTypes;
  }
}
