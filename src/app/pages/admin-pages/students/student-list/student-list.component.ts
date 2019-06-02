import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../_areas/admin-area/_services/student.service';
import {BasicStudent} from '../../../../_areas/admin-area/_entities/basic-student';
import {SharedService} from '../../../../_core/shared.service';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomAdapter} from '../../../../_core/date-adapter';
import {NgbDateCustomParserFormatter} from '../../../../_core/dateformat';

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

  constructor(private studentService: StudentService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.students = this.studentService.getAllStudent(null);
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
