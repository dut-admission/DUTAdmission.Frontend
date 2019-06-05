import { Component, OnInit } from '@angular/core';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';
import {TuitionTypeService} from '../../../../_areas/admin-area/_services/tuition-type.service';
import {SharedService} from '../../../../_core/shared.service';

@Component({
  selector: 'app-tuition-type-list',
  templateUrl: './tuition-type-list.component.html',
  styleUrls: ['./tuition-type-list.component.scss']
})
export class TuitionTypeListComponent implements OnInit {

  constructor(private tuition_type_service: TuitionTypeService, private sharedService: SharedService) {
    this.tuition_type_list = [];
  }

  tuition_type_list: TuitionType[];
  tuitionType: TuitionType;
      error1;
  ngOnInit() {
    this.tuition_type_service.getAll().subscribe(
      result => {
        this.tuition_type_list = result;
      },
        error1 => {
        alert('Get tuition type error !!');
      }
    );
  }

  openModalDetail(content, tuition_type) {
    if (tuition_type) {
      this.tuitionType = new TuitionType(tuition_type);
    } else {
      this.tuitionType = new TuitionType(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  Edit_Add(tuitionType: TuitionType) {
    this.sharedService.emitChange(true);
    if (tuitionType.Id === 0) {
      this.tuition_type_service.add(tuitionType).subscribe(
        result => {
          this.tuition_type_list.push(result);
          this.sharedService.dismissAll();
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Thêm thành công');
        },
        error1 => {
          this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
          this.sharedService.emitChange(false);
        });
    } else {
      this.tuition_type_service.edit(tuitionType).subscribe(
        result => {
          const index = this.tuition_type_list.findIndex(x => x.Id === result.Id);
          this.tuition_type_list[index] = result;
          this.sharedService.dismissAll();
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Lưu thay đổi thành công');
        },
        error1 => {
          this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
          this.sharedService.emitChange(false);
        });
    }


  }

  deleteTuitionType(id: number) {
    this.sharedService.emitChange(true);
    this.tuition_type_service.delete(id).subscribe(
      result => {
        this.tuition_type_list = this.tuition_type_list.filter(x => x.Id !== id);
        this.sharedService.dismissAll();
        this.sharedService.emitChange(false);
        this.sharedService.notifySuccess('Xóa thành công');
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      });
  }

}
