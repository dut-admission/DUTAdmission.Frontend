import {Component, OnInit} from '@angular/core';
import {AccountGroup} from '../../../../_areas/admin-area/_entities/account-group';
import {AccountGroupService} from '../../../../_areas/admin-area/_services/account-group.service';
import {SharedService} from '../../../../_core/shared.service';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent implements OnInit {
  groups: AccountGroup[] = [];
  newGroup: AccountGroup;

  constructor(private groupService: AccountGroupService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.emitChange(true);
    this.groupService.getAll().subscribe(
      result => {
        this.groups = result;
        this.sharedService.emitChange(false);
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      }
    );
  }

  openModalDetail(content, group) {
    if (group) {
      this.newGroup = new AccountGroup(group);
    } else {
      this.newGroup = new AccountGroup(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  Edit_Add(accountGroup: AccountGroup) {
    this.sharedService.emitChange(true);
    if (accountGroup.Id === 0) {
      this.groupService.add(accountGroup).subscribe(
        result => {
          this.groups.push(result);
          this.sharedService.dismissAll();
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Thêm thành công');
        },
        error1 => {
          this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
          this.sharedService.emitChange(false);
        });
    } else {
      this.groupService.edit(accountGroup).subscribe(
        result => {
          const index = this.groups.findIndex(x => x.Id === result.Id);
          this.groups[index] = result;
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

  deleteGroupAccount(id: number) {
    this.sharedService.emitChange(true);
    this.groupService.delete(id).subscribe(
      result => {
        this.groups = this.groups.filter(x => x.Id !== id);
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
