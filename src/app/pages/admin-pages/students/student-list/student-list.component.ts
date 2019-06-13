import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../_areas/admin-area/_services/student.service';
import {BasicStudent} from '../../../../_areas/admin-area/_entities/basic-student';
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
  educationProgramList: EducationPrograms[];
  departmentList: Departments[];
  classList: Classes[];
  classes: Classes[];

  condition = {
    Keyword: '',
    ClassId: 0,
    ProgramId: 0,
    DepartmentId: 0,
    CurrentPage: 1,
    PageSize: 15
  };
  totalPage = 0;

  constructor(private studentService: StudentService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.getEducationProgram().subscribe(
      result => {
        this.educationProgramList = result.EducationPrograms;
        this.departmentList = this.educationProgramList[0].Departments;
        this.classList = this.departmentList[0].Classes;
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );
    this.getListStudent();
  }

  getListStudent() {
    this.sharedService.emitChange(true);
    this.studentService.getAllStudent(this.condition).subscribe(
      result => {
        this.sharedService.emitChange(false);
        this.students = result.ListOfStudents;
        this.totalPage = result['Paging']['TotalPages'];
        this.classes = result['ListOfClasses'];
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
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

  openModalDetail(content, student) {
    if (student) {
      this.student = new BasicStudent(student);
    } else {
      this.student = new BasicStudent(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  deleteStudent(id) {
    this.sharedService.emitChange(true);
    this.studentService.deleteStudent(id).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.notifySuccess('Xóa sinh viên thành công');
        this.students = this.students.filter((x) => x.Id !== id);
      },
      error1 => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError('Xóa sinh viên không thành công');
      }
    );
  }

  arrayOne(): any[] {
    return Array(this.totalPage);
  }

  changePage(page: number) {
    this.condition.CurrentPage = page;
    this.getListStudent();
  }

  previousPage() {
    this.condition.CurrentPage--;
    this.getListStudent();
  }

  nextPage() {
    this.condition.CurrentPage++;
    this.getListStudent();
  }

  updateStudent() {
    this.sharedService.emitChange(true);
    this.studentService.updateStudent(this.student).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.notifySuccess('Cập nhật dữ liệu thành công');
        if (this.student.Id === 0) {
          this.students.push(value);
        } else {
          const index = this.students.findIndex(student => student.Id === this.student.Id);
          this.students[index] = value;
        }
        this.sharedService.dismissAll();
      },
      error1 => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError('Cập nhật dữ liệu không thành công');
      }
    );
  }
}
