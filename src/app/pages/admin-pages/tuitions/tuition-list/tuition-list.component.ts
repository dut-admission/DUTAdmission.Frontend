import {Component, OnInit} from '@angular/core';
import {Tuition} from '../../../../_areas/admin-area/_entities/tuition';
import {TuitionService} from '../../../../_areas/admin-area/_services/tuition.service';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';
import {SharedService} from '../../../../_core/shared.service';
import {BasicStudent} from '../../../../_areas/admin-area/_entities/basic-student';
import {Classes, Departments, EducationPrograms} from '../../../../_areas/admin-area/_entities/EducationPrograms';
import {TuitionTypeService} from '../../../../_areas/admin-area/_services/tuition-type.service';

@Component({
  selector: 'app-tuition-list',
  templateUrl: './tuition-list.component.html',
  styleUrls: ['./tuition-list.component.scss']
})
export class TuitionListComponent implements OnInit {
  tuitions: Tuition[] = [];
  tuitionTypes: TuitionType[] = [];
  tuition: Tuition = new Tuition(null);

  educationProgramList: EducationPrograms[];
  departmentList: Departments[];
  classList: Classes[];

  condition = {
    Keyword: '',
    ClassId: 0,
    ProgramId: 0,
    DepartmentId: 0,
    IsPaid: false,
    CurrentPage: 1,
    PageSize: 15
  };
  totalPage = 0;

  constructor(private tuitionService: TuitionService,
              private sharedService: SharedService,
              private tuition_type_service: TuitionTypeService) {
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
    this.tuition_type_service.getAll().subscribe(
      result => {
        this.tuitionTypes = result;
      },
      error1 => {
      }
    );
    this.getListTuitionFee();
  }

  getListTuitionFee() {
    this.sharedService.emitChange(true);
    this.tuitionService.getTuitions(this.condition).subscribe(
      result => {
        this.sharedService.emitChange(false);
        this.tuitions = result.TuitionDtos;
        this.totalPage = result['Paging']['TotalPages'];
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      }
    );
  }

  onOpenDetailModal(content, tuition) {
    if (tuition) {
      this.tuition = new Tuition(tuition);
    } else {
      this.tuition = new Tuition(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  onOpenReceiptModal(content) {
    this.sharedService.openFormModal(content, 'lg');
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
  arrayOne(): any[] {
    return Array(this.totalPage);
  }

  changePage(page: number) {
    this.condition.CurrentPage = page;
    this.getListTuitionFee();
  }

  previousPage() {
    this.condition.CurrentPage--;
    this.getListTuitionFee();
  }

  nextPage() {
    this.condition.CurrentPage++;
    this.getListTuitionFee();
  }
}
