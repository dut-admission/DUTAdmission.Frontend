import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../_areas/admin-area/_services/student.service';
import {BasicStudent, ConditionStudentManagement} from '../../../../_areas/admin-area/_entities/basic-student';
import {SharedService} from '../../../../_core/shared.service';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomAdapter} from '../../../../_core/date-adapter';
import {NgbDateCustomParserFormatter} from '../../../../_core/dateformat';
import {Classes, Departments, EducationPrograms} from '../../../../_areas/admin-area/_entities/EducationPrograms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateCustomAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}]
})
export class StudentListComponent implements OnInit {
  students: BasicStudent[] = [];
  student: BasicStudent = new BasicStudent(null);
  condition: ConditionStudentManagement;
  educationProgramList: EducationPrograms[];
  departmentList: Departments[];
  classList: Classes[];

  constructor(private studentService: StudentService,
              private sharedService: SharedService) {

  }

  ngOnInit() {

    this.condition = new ConditionStudentManagement(null);
    this.studentService.getEducationProgram().subscribe(
      result => {
        this.educationProgramList = result.EducationPrograms;
        this.departmentList = this.educationProgramList[0].Departments;
        this.classList = this.departmentList[0].Classes;

      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );

    this.studentService.getAllStudent().subscribe(
      result => {
        this.students = result.ListOfStudents;
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );


  }

  ChangeProgram(event: any) {

    const index = this.educationProgramList.findIndex(x => x.Id == event.target.value);
    this.departmentList = this.educationProgramList[index].Departments;
    this.classList = this.departmentList[0].Classes;
  }

  ChangeDepartment(event: any) {

    const index = this.departmentList.findIndex(x => x.Id == event.target.value);
    this.classList = this.departmentList[index].Classes;
  }

  SearchStudentList(condition: ConditionStudentManagement) {
    // this.studentService.Se
  }

  openModalDetail(content, student) {
    if (student) {
      this.student = new BasicStudent(student);
    } else {
      this.student = new BasicStudent(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  deleteStudent(student) {

  }
}
