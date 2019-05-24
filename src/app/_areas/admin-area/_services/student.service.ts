import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicStudent} from '../_entities/basic-student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getAllStudent(condition): BasicStudent[] {
    if (!condition) {
      const students: BasicStudent[] = [];
      for (let index = 1; index < 30; index++) {
        students.push(
          {
            Id: index,
            Address: 'Quang Nam',
            ClassId: 1,
            ClassName: '14T2',
            DateOfBirth: new Date(),
            DepaermentName: 'CNTT',
            DepartmentId: 1,
            Email: 'trinhminhan1996@gmail.com',
            FacultyId: 1,
            FacultyName: 'CNTT',
            FirstName: `Trinh`,
            IdentityNumber: '205796190',
            LastName: 'An ${index}',
            PhoneNumber: '0965665366',
            ProgramId: 1,
            ProgramName: 'Truyền thống',
            Sex: false
          }
        );
      }
      return students;
    }
  }
}
