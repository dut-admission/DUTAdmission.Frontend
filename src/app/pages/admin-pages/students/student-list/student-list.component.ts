import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../_areas/admin-area/_services/student.service';
import {BasicStudent} from '../../../../_areas/admin-area/_entities/basic-student';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: BasicStudent[] = [];
  student: BasicStudent = new BasicStudent(null);
  closeResult = '';

  constructor(private studentService: StudentService,
              private modalService: NgbModal) {
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
    this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  deleteStudent(student) {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
