import {Injectable} from '@angular/core';
import {Tuition} from '../_entities/tuition';
import {TuitionType} from '../_entities/tuition-type';

@Injectable({
  providedIn: 'root'
})
export class TuitionService {

  constructor() {
  }

  getTuitions() {
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
